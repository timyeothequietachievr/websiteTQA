"use client";

import { useState } from "react";
import { getProfilePhoto } from "@/lib/profile-photos";

export function ProfileAvatar({
  name,
  photo,
  size = 56,
  className = "",
}: {
  name: string;
  photo?: string;
  size?: number;
  className?: string;
}) {
  const mapped = photo ?? getProfilePhoto(name);
  const [failed, setFailed] = useState(false);
  const src = mapped && !failed ? mapped : null;

  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (!src) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-ink font-display font-semibold text-paper ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.28 }}
        aria-hidden
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- local assets with initials fallback on error
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 rounded-full object-cover ring-1 ring-charcoal/10 ${className}`}
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}
