import Seo from '../../components/Seo';
import PageHero from '../../components/PageHero';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Scholarly Desk collects, uses, and protects student information."
        path="/privacy-policy"
      />
      <PageHero title="Privacy Policy" crumbs={[{ label: 'Privacy Policy' }]} />
      <section className="container-app prose-like max-w-3xl space-y-4 py-14 text-sm leading-relaxed text-muted md:text-base">
        <p>
          Scholarly Desk collects only the information needed to process orders and communicate with you —
          typically your name, email, phone number, and project files.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>We do not sell personal data to third parties.</li>
          <li>Each order receives an internal reference ID for support continuity.</li>
          <li>Access to files is limited to staff assigned to your brief.</li>
          <li>You may request correction or deletion of personal data by contacting support.</li>
        </ul>
        <p>
          Payment providers may process transaction data under their own policies. Contact{' '}
          hello@scholarlydesk.com for privacy requests.
        </p>
      </section>
    </>
  );
}
