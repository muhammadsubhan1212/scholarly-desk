import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { reviews } from '../data/home';
import { getInitials } from '../utils/helpers';
import { Quote } from 'lucide-react';

const extraReviews = [
  {
    name: 'Charlotte D.',
    city: 'Melbourne, Australia',
    quote: 'Presentation slides finally looked like a story instead of a dump of bullets. On-time and sharp.',
  },
  {
    name: 'Liam R.',
    city: 'Manchester, UK',
    quote: 'Research proposal feedback from my supervisor was mostly praise for the literature map. Worth it.',
  },
  {
    name: 'Jessica P.',
    city: 'Wellington, New Zealand',
    quote: 'I appreciated that the writer asked clarifying questions before drafting. Felt collaborative.',
  },
  {
    name: 'David K.',
    city: 'Chicago, USA',
    quote: 'Revision turnaround was faster than expected. The revised theory section finally clicked.',
  },
];

export default function ReviewsPage() {
  const all = [...reviews, ...extraReviews];

  return (
    <>
      <Seo
        title="Student Reviews"
        description="Read Assignment Solution reviews from students worldwide on deadlines, quality, and support."
        path="/reviews"
      />
      <PageHero
        title="Reviews"
        subtitle="Honest notes collected after completed deliveries."
        crumbs={[{ label: 'Reviews' }]}
      />
      <section className="container-app grid gap-3 py-12 md:grid-cols-2 md:py-16">
        {all.map((review) => (
          <article
            key={review.name + review.city}
            className="surface-card flex flex-col p-5 md:p-6"
          >
            <Quote strokeWidth={1.5} className="h-6 w-6 text-accent/30" />
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
              “{review.quote}”
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft font-display text-[12px] font-bold text-primary">
                {getInitials(review.name)}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-secondary">{review.name}</p>
                <p className="text-[11px] text-muted">{review.city}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
