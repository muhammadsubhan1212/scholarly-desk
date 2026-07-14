import Seo from '../../components/Seo';
import PageHero from '../../components/PageHero';

export default function RevisionPolicyPage() {
  return (
    <>
      <Seo
        title="Revision Policy"
        description="Scholarly Desk revision windows and what qualifies as complimentary edits."
        path="/revision-policy"
      />
      <PageHero title="Revision Policy" crumbs={[{ label: 'Revision Policy' }]} />
      <section className="container-app max-w-3xl space-y-4 py-14 text-sm leading-relaxed text-muted md:text-base">
        <p>
          Complimentary revisions are available when feedback stays within the original brief, marking
          rubric, and agreed word count.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Request revisions within the window stated on your order confirmation.</li>
          <li>Provide specific comments — page numbers, rubric criteria, or tracked changes help.</li>
          <li>Scope changes, new chapters, or longer lengths may require a new quote.</li>
          <li>Urgent re-delivery windows depend on writer availability after the first handoff.</li>
        </ul>
      </section>
    </>
  );
}
