import { FeaturedTestimonial } from "@/components/revamp/featured-testimonial";
import { FEATURED_COACHING_TESTIMONIAL } from "@/lib/coaching-content";

export function CoachingFeaturedQuote() {
  const { quote, name, role } = FEATURED_COACHING_TESTIMONIAL;
  return <FeaturedTestimonial quote={quote} name={name} role={role} />;
}
