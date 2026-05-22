"use client";

import { Navigation } from "@/components/revamp/navigation";
import { FooterRev, NewsletterBand } from "@/components/revamp/sections-3";
import { Container, Button, Eyebrow } from "@/components/revamp/primitives";
import { PODCAST_EPISODES, type PodcastEpisode } from "@/lib/podcast-episodes";

const featured = PODCAST_EPISODES.filter((e) => e.featured);
const episodes = PODCAST_EPISODES.filter((e) => !e.featured);

/** Pattern: blog-sections/02-three-column-with-images — cover on top, copy below */
function EpisodeCover({ episode }: { episode: PodcastEpisode }) {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={episode.cover}
        alt={episode.coverAlt ?? `${episode.show} cover`}
        className="aspect-video w-full bg-paper-soft object-cover sm:aspect-2/1"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-t-lg ring-1 ring-inset ring-charcoal/10"
      />
    </div>
  );
}

function EpisodeCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-paper ring-1 ring-charcoal/10">
      <EpisodeCover episode={episode} />
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ember">{episode.show}</p>
        <h3 className="font-display mt-3 text-xl font-semibold text-charcoal" style={{ lineHeight: 1.1 }}>
          {episode.title}
        </h3>
        <p className="mt-1 font-sans text-sm text-warm-600">{episode.date}</p>
        <p className="mt-4 flex-1 font-reading text-[15px] leading-relaxed text-warm-700">{episode.summary}</p>
        <a
          href={episode.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex font-sans text-[15px] font-semibold text-ember underline underline-offset-4"
        >
          Listen now →
        </a>
      </div>
    </article>
  );
}

export function PodcastLandingPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation />
      <main>
        <section className="border-b border-charcoal/10 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <Container>
            <Eyebrow>Free to watch &amp; listen</Eyebrow>
            <h1
              className="font-display mt-4 font-semibold text-charcoal"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              Podcasts. Videos. Articles.
            </h1>
            <p className="mt-6 max-w-2xl font-reading text-lg leading-relaxed text-warm-700">
              Watch, listen, and read — all free. Tim on other people&rsquo;s shows, talking quiet leadership,
              introverts at work, and tiny habits that actually stick.
            </p>
          </Container>
        </section>

        {featured.length > 0 ? (
          <section className="bg-paper-soft py-14 sm:py-16">
            <Container>
              <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">Featured</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {featured.map((episode) => (
                  <EpisodeCard key={episode.href} episode={episode} />
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <section className="py-14 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">All appearances</h2>
            <p className="mt-3 max-w-2xl font-reading text-[17px] text-warm-700">
              Newest first. Each link opens the episode on the host&rsquo;s site or platform.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {episodes.map((episode) => (
                <EpisodeCard key={episode.href} episode={episode} />
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-charcoal/10 bg-ink py-14 sm:py-16">
          <Container>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                Want Tim on your podcast?
              </h2>
              <p className="mt-4 font-reading text-[17px] leading-relaxed text-paper/85">
                Tim speaks on quiet leadership, introverts at work, and practical habits from{" "}
                <em>The Quiet Achiever</em>. See the speaking page for topics, bio, and booking.
              </p>
              <div className="mt-8">
                <Button href="/speaking" variant="cream">
                  Speaking &amp; podcast enquiries
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <NewsletterBand />
      <FooterRev />
    </div>
  );
}
