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
  "Dawn Ta": "/assets/profile-dawnta.jpg",
  "Julia Racsko": "/assets/profile-juliaracsko.jpg",
  "Amy Zhu": "/assets/profile-amyzhu.jpg",
  "Jennifer O": "/assets/profile-jenno.jpg",
  "Evena Wong": "/assets/profile-evenawong.jpg",
  "Sophie Matrai": "/assets/profile-sophiematrai.jpg",
  "Lewis Kangethe Ngugi": "/assets/profile-lewis.jpg",
  "Bethany Moran": "/assets/profile-bethanymoran.jpg",
  "Allison Lei": "/assets/profile-allisonlei.jpg",
  "Vicky Chiu": "/assets/profile-vickychiu.jpg",
  "Plamena Doncheva": "/assets/profile-plamena.jpg",
  "Scott Llewellyn": "/assets/profile-scottl.jpg",
  "Madeleine van Dam": "/assets/profile-maddie.jpg",
  "Daniela Montanez": "/assets/profile-daniela.jpg",
  "Andrew Cuevas": "/assets/profile-andrew.jpg",
  "Beth Bridges": "/assets/profile-bethbridges.jpg",
  "Capra Jneva": "/assets/profile-capra.jpg",
  "Raemarie Lee": "/assets/profile-rae.jpg",
  "Eunbi Koh": "/assets/profile-eunbi.jpg",
  "Erin Yeh": "/assets/profile-erinyeh.jpg",
  "Melanie Owubokiri": "/assets/profile-melanie.jpg",
  "Wilson Thai": "/assets/profile-wilson.jpg",
  "Taryn Ewens": "/assets/profile-tarynewens.jpg",
  "Ezra Ju": "/assets/profile-ezra.jpg",
};

export function getProfilePhoto(name: string): string | undefined {
  return PROFILE_PHOTOS[name];
}
