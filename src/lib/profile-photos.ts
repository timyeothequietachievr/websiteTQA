/** Display name → image in /public/assets (profile-*.jpg). */
const PROFILE_PHOTOS: Record<string, string> = {
  "Rod Naber": "/assets/profile-rod.jpg",
  "Patricia Avila": "/assets/profile-patricia.jpg",
  "Leonardo Mattei": "/assets/profile-leonardo.jpg",
  "Claire Erickson": "/assets/profile-claire.jpg",
  "Lemon Mingyue Wang": "/assets/profile-lemon.jpg",
  "Thuan Nguyen": "/assets/profile-thuan.jpg",
  "Kumari Pacheco": "/assets/profile-kumari.jpg",
  "Nada Salem": "/assets/profile-nada.jpg",
};

export function getProfilePhoto(name: string): string | undefined {
  return PROFILE_PHOTOS[name];
}
