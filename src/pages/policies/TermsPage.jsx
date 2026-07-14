import Seo from '../../components/Seo';
import PageHero from '../../components/PageHero';

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Terms governing use of Scholarly Desk academic support services."
        path="/terms-and-conditions"
      />
      <PageHero title="Terms & Conditions" crumbs={[{ label: 'Terms & Conditions' }]} />
      <section className="container-app max-w-3xl space-y-4 py-14 text-sm leading-relaxed text-muted md:text-base">
        <p>
          By placing an order with Scholarly Desk you confirm that the information you provide is accurate
          and that you will use delivered materials as learning support in line with your institution’s
          academic integrity policies.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Quotes are estimates until confirmed after brief review.</li>
          <li>Deadlines begin after requirements, payment milestones, and files are confirmed.</li>
          <li>Clients remain responsible for how they submit or cite work at their institutions.</li>
          <li>Abuse, fraud, or harassment toward staff may result in account suspension.</li>
        </ul>
        <p>We may update these terms; continued use after notice constitutes acceptance of revisions.</p>
      </section>
    </>
  );
}
