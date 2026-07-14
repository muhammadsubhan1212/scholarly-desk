import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import PriceQuoteCalculator from '../components/home/PriceQuoteCalculator';
import WhyChooseGrid from '../components/home/WhyChooseGrid';
import ServicesCarousel from '../components/home/ServicesCarousel';
import WritersSwiper from '../components/home/WritersSwiper';
import ProcessSteps from '../components/home/ProcessSteps';
import SamplesGrid from '../components/home/SamplesGrid';
import SubjectsStrip from '../components/home/SubjectsStrip';
import ReviewsCarousel from '../components/home/ReviewsCarousel';
import FaqAccordion from '../components/home/FaqAccordion';
import OrderCta from '../components/home/OrderCta';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Academic Writing Studio for Students in Pakistan"
        description="Scholarly Desk delivers subject-matched academic writing, transparent PKR quotes, and calm deadline support for university students across Pakistan."
        path="/"
      />

      <section className="border-b border-border">
        <div className="grid lg:grid-cols-2">
          <div className="bg-ink text-white">
            <div className="flex h-full flex-col justify-between px-5 py-12 sm:px-8 md:px-10 lg:py-16 xl:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]">
              <div>
                <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45">
                  Academic writing studio · Pakistan
                </p>
                <h1 className="max-w-[11ch] font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-[3.25rem] lg:text-[3.5rem]">
                  Deadlines stay firm.
                  <span className="mt-2 block text-white/55">Writing gets clearer.</span>
                </h1>
                <p className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-white/65">
                  Pair with a subject-aware writer for essays, research papers, theses, and career documents.
                  Transparent PKR quotes. Coordinators who answer when the brief changes.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to="/order-now" size="lg" variant="inverted">
                    Start an order
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outlineInverse"
                    onClick={() => window.dispatchEvent(new CustomEvent('sd-open-chat'))}
                  >
                    <MessageCircle strokeWidth={2} className="h-4 w-4" />
                    Ask the desk
                  </Button>
                </div>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                  { k: '12+', v: 'Years active' },
                  { k: '20k+', v: 'Briefs helped' },
                  { k: '24/7', v: 'Desk hours' },
                ].map((stat) => (
                  <div key={stat.v}>
                    <dt className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {stat.k}
                    </dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-[0.08em] text-white/40">{stat.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="bg-paper">
            <div className="flex h-full items-center px-5 py-12 sm:px-8 md:px-10 lg:py-16 xl:pr-[max(2rem,calc((100vw-72rem)/2+2rem))]">
              <div className="w-full max-w-md lg:ml-4 xl:ml-8">
                <PriceQuoteCalculator />
                <p className="mt-4 text-[12px] leading-relaxed text-muted">
                  Rates update by academic level and deadline. Final quote confirmed after your brief is reviewed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-app grid gap-8 py-14 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:py-16">
          <SectionHeading
            className="mb-0"
            eyebrow="The problem we solve"
            title="Heavy academic seasons, light operational load"
            body="Campus stacks deadlines, labs, and presentations. Scholarly Desk keeps quality high when your calendar is already full."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { t: 'Peak weeks', d: 'Specialists absorb overflow when modules collide.' },
              { t: 'On the clock', d: 'Urgency options down to six hours when capacity allows.' },
              { t: 'Rubric-aware', d: 'Drafts structured so your revisions stay focused.' },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-border bg-bg/60 p-4"
              >
                <p className="font-display text-[14px] font-bold text-secondary">{item.t}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-app py-14 md:py-16">
        <SectionHeading
          eyebrow="Why choose us"
          title="Five promises on every brief"
          body="Writer matching, originality checks, predictable timelines, always-on coordination, and revision-friendly QA."
          center
        />
        <WhyChooseGrid />
      </section>

      <section className="border-y border-border bg-surface py-14 md:py-16">
        <div className="container-app">
          <SectionHeading
            eyebrow="Services"
            title="Across academic and content work"
            body="Each service page has its own process notes, FAQs, and writer focus."
          />
          <ServicesCarousel />
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-14 text-white md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_100%_0%,rgb(37_99_235/0.25),transparent_50%)]"
        />
        <div className="container-app relative grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-eyebrow text-accent">How we work</p>
            <h2 className="font-display text-[1.75rem] font-bold tracking-[-0.03em] text-white md:text-[2rem]">
              No template mill — scoped to your instructions
            </h2>
          </div>
          <div className="space-y-4 text-[14px] leading-relaxed text-slate-300">
            <p>
              Affordable PKR rates without soft quality. Writers research with method, coordinators answer
              after midnight, and editors catch structure before you ever see a draft.
            </p>
            <p>
              From Karachi seminar papers to Islamabad thesis chapters — one desk, consistent standards.
            </p>
            <Button to="/order-now" className="mt-2 bg-accent hover:bg-teal-700">
              Place an order
            </Button>
          </div>
        </div>
      </section>

      <section className="container-app py-14 md:py-16">
        <SectionHeading
          eyebrow="Writers"
          title="Specialists students request by name"
          body="Open a profile for focus areas and delivery history."
          center
        />
        <WritersSwiper />
      </section>

      <section className="border-y border-border bg-bg py-14 md:py-16">
        <div className="container-app">
          <SectionHeading eyebrow="Process" title="Brief to delivery in four steps" center />
          <ProcessSteps />
        </div>
      </section>

      <section className="container-app py-14 md:py-16">
        <SectionHeading
          eyebrow="Samples"
          title="See the standard before you commit"
          body="Download anonymized excerpts, or start an order with a similar scope."
          center
        />
        <SamplesGrid />
      </section>

      <section className="border-y border-border bg-surface py-14 md:py-16">
        <div className="container-app">
          <SectionHeading
            title="Subjects we cover every week"
            body="Writers across the domains taught at Pakistani universities and international programs."
            center
          />
          <SubjectsStrip />
        </div>
      </section>

      <section className="container-app py-14 md:py-16">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            className="mb-0"
            eyebrow="Reviews"
            title="Notes after completed deliveries"
            body="Collected from students who finished an order with the desk."
          />
          <Button to="/reviews" variant="outline" size="sm">
            All reviews
          </Button>
        </div>
        <ReviewsCarousel />
      </section>

      <section className="border-t border-border bg-bg py-14 md:py-16">
        <div className="container-app">
          <SectionHeading eyebrow="FAQ" title="Straight answers before you order" center />
          <FaqAccordion />
        </div>
      </section>

      <OrderCta />
    </>
  );
}
