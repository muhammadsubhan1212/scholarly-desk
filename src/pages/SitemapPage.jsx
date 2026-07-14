import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { allServices, footerPolicyLinks } from '../data/brand';

export default function SitemapPage() {
  return (
    <>
      <Seo title="Sitemap" description="Browse every Assignment Solution page — company, policies, and services." path="/sitemap" />
      <PageHero title="Sitemap" subtitle="Find what you need quickly." crumbs={[{ label: 'Sitemap' }]} />
      <section className="container-app grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h2 className="font-display text-lg font-bold text-secondary">Our Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="text-primary hover:underline" to="/">
                Home
              </Link>
            </li>
            {footerPolicyLinks
              .filter((l) => !['Privacy Policy', 'Terms & Conditions', 'Revision Policy', 'Refund Policy'].includes(l.label))
              .map((l) => (
                <li key={l.path}>
                  <Link className="text-primary hover:underline" to={l.path}>
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-secondary">Our Legal Policies</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="text-primary hover:underline" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-primary hover:underline" to="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="text-primary hover:underline" to="/revision-policy">
                Revision Policy
              </Link>
            </li>
            <li>
              <Link className="text-primary hover:underline" to="/refund-policy">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-secondary">Our Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {allServices.map((s) => (
              <li key={s.path}>
                <Link className="text-primary hover:underline" to={s.path}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
