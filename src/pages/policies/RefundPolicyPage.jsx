import Seo from '../../components/Seo';
import PageHero from '../../components/PageHero';

export default function RefundPolicyPage() {
  return (
    <>
      <Seo
        title="Refund Policy"
        description="Clear refund and cancellation terms for Scholarly Desk orders."
        path="/refund-policy"
      />
      <PageHero title="Refund Policy" crumbs={[{ label: 'Refund Policy' }]} />
      <section className="container-app max-w-3xl space-y-4 py-14 text-sm leading-relaxed text-muted md:text-base">
        <p>
          Scholarly Desk aims for fair resolution when work cannot proceed or delivery fails under confirmed
          terms.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Cancellations before writer assignment may qualify for a full refund of amounts paid.</li>
          <li>After drafting begins, refunds are partial and based on completed milestones.</li>
          <li>Quality disputes should open with revision requests first when feasible.</li>
          <li>Chargebacks without contacting support may delay investigation outcomes.</li>
        </ul>
        <p>Email hello@scholarlydesk.com with your order ID to start a refund review.</p>
      </section>
    </>
  );
}
