/**
 * Resize and compress raster images in public/assets.
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(__dirname, "../public/assets");

const HERO_FILES = new Set([
  "tim-masthead.jpg",
  "tim-masthead-bc.jpg",
  "about-hero.jpg",
  "speaker-hero.jpg",
  "coaching-hero.jpg",
  "book-cover.jpg",
]);

const SECTION_FILES = new Set([
  "course-30habits.jpg",
  "bookhero.jpg",
  "30habits-howitworks.jpg",
  "30habits-whyjoin.jpg",
]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function profileFor(filePath) {
  const base = path.basename(filePath);
  const rel = path.relative(ASSETS, filePath).replace(/\\/g, "/");

  if (HERO_FILES.has(base)) {
    return { kind: "hero", maxWidth: 1200, maxHeight: 1600, jpegQuality: 78 };
  }
  if (SECTION_FILES.has(base) || rel.startsWith("30habits/") && base.endsWith(".jpg")) {
    return { kind: "section", maxWidth: 1400, maxHeight: 900, jpegQuality: 82 };
  }
  if (rel.startsWith("podcast/")) {
    return { kind: "podcast", maxWidth: 640, maxHeight: 360, jpegQuality: 80 };
  }
  if (base.startsWith("profile-")) {
    return { kind: "profile", maxWidth: 256, maxHeight: 256, jpegQuality: 82 };
  }
  if (rel.startsWith("30habits/topic-") && base.endsWith(".png")) {
    return { kind: "topic", maxWidth: 800, maxHeight: 450 };
  }
  if (base === "logo-tqa.jpg") {
    return { kind: "logo", maxWidth: 512, maxHeight: 512, jpegQuality: 85 };
  }
  return { kind: "default", maxWidth: 1600, maxHeight: 1600, jpegQuality: 82 };
}

async function optimizeFile(filePath, profile) {
  const before = (await fs.stat(filePath)).size;
  const input = sharp(filePath, { failOn: "none" });
  const meta = await input.metadata();

  let pipeline = sharp(filePath).rotate();

  const needsResize =
    (meta.width && meta.width > profile.maxWidth) ||
    (meta.height && meta.height > profile.maxHeight);

  if (needsResize) {
    pipeline = pipeline.resize({
      width: profile.maxWidth,
      height: profile.maxHeight,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const ext = path.extname(filePath).toLowerCase();
  let output;
  if (ext === ".png") {
    output = await pipeline
      .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
      .toBuffer();
  } else {
    output = await pipeline
      .jpeg({ quality: profile.jpegQuality ?? 82, mozjpeg: true })
      .toBuffer();
  }

  if (output.length >= before && !needsResize) {
    return { filePath, before, after: before, skipped: true };
  }

  await fs.writeFile(filePath, output);
  return { filePath, before, after: output.length, skipped: false };
}

async function createOgImage() {
  const source = path.join(ASSETS, "tim-masthead-bc.jpg");
  const dest = path.join(ASSETS, "og.jpg");
  const output = await sharp(source)
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  await fs.writeFile(dest, output);
  return dest;
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

const files = await walk(ASSETS);
const results = [];

for (const file of files.sort()) {
  const profile = profileFor(file);
  try {
    results.push(await optimizeFile(file, profile));
  } catch (err) {
    console.error(`Failed: ${file}`, err.message);
  }
}

const ogPath = await createOgImage();
const ogSize = (await fs.stat(ogPath)).size;

let saved = 0;
for (const r of results) {
  const rel = path.relative(ASSETS, r.filePath);
  if (!r.skipped) {
    saved += r.before - r.after;
    console.log(`${rel}: ${formatBytes(r.before)} → ${formatBytes(r.after)}`);
  }
}

console.log(`\nCreated og.jpg (${formatBytes(ogSize)})`);
console.log(`Optimized ${results.filter((r) => !r.skipped).length} files, saved ${formatBytes(saved)}`);
