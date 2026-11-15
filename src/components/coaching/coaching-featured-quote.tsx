import { FeaturedTestimonial } from "@/components/revamp/featured-testimonial";
import { FEATURED_SITE_TESTIMONIAL } from "@/lib/testimonials-content";

export function CoachingFeaturedQuote() {
  const { quote, name } = FEATURED_SITE_TESTIMONIAL;
  return (
    <FeaturedTestimonial
      quote={quote}
      name={name}
      role="Staff Product Designer at Brightline USA"
    />
  );
}
