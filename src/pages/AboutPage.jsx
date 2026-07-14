import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import OrderCta from '../components/home/OrderCta';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn how Assignment Solution supports students with ethical, subject-matched academic writing and transparent coordination."
        path="/about-us"
      />
      <PageHero
        title="About Assignment Solution"
        subtitle="A modern academic writing studio for students who value clarity, originality, and humane deadlines."
        crumbs={[{ label: 'About Us' }]}
      />
      <section className="container-app grid gap-6 py-12 md:gap-10 md:py-16 lg:grid-cols-2">
        <div className="space-y-4 text-[15px] leading-relaxed text-muted">
          <p>
            Assignment Solution grew from a simple observation: students rarely fail for lack of ambition — they
            fail when workload outpaces time. We built a coordination-first writing desk that matches each
            brief to a specialist, keeps quotes transparent in your local currency, and treats revisions as part of the craft.
          </p>
          <p>
            Whether you are shaping an undergraduate essay, polishing a research proposal, or preparing a
            graduate thesis chapter, our writers and editors work as an extension of your planning process —
            not a black-box mill.
          </p>
        </div>
        <div className="surface-card p-6 md:p-7">
          <h2 className="font-display text-lg font-bold tracking-tight text-secondary">What we stand for</h2>
          <ul className="mt-4 space-y-3 text-[14px] text-muted">
            {[
              'Ethical academic support that helps you learn from strong drafts',
              'Subject-aware pairing instead of anonymous guesswork',
              'Clear communication from first quote to final handoff',
              'Respect for privacy, originality standards, and fair timelines',
            ].map((item) => (
              <li key={item} className="flex gap-3 border-b border-border/70 pb-3 last:border-0 last:pb-0">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <OrderCta
        title="Build your next draft with the desk"
        body="Share your syllabus notes and deadline — we map next steps with a writer who knows your field."
      />
    </>
  );
}
