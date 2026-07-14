import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { allServices } from '../data/brand';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore Assignment Solution academic and content writing services — essays, research, theses, SOPs, and more."
        path="/services"
      />
      <PageHero
        title="Services"
        subtitle="Pick a lane — each page has tailored process notes, FAQs, and writer focus."
        crumbs={[{ label: 'Services' }]}
      />
      <section className="container-app py-12 md:py-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service, i) => (
            <Link
              key={service.path}
              to={service.path}
              className="group surface-card surface-card-interactive p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display text-[11px] font-bold tabular-nums text-primary/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight
                  strokeWidth={2}
                  className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </div>
              <h2 className="font-display text-[1.05rem] font-bold tracking-[-0.02em] text-secondary group-hover:text-primary">
                {service.label}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{service.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
