import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import PriceQuoteCalculator from '../components/home/PriceQuoteCalculator';
import WhyChooseGrid from '../components/home/WhyChooseGrid';
import ServicesCarousel from '../components/home/ServicesCarousel';
import WritersSwiper from '../components/home/WritersSwiper';
import ProcessSteps from '../components/home/ProcessSteps';
import SamplesGrid from '../components/home/SamplesGrid';
import ReviewsCarousel from '../components/home/ReviewsCarousel';
import FaqAccordion from '../components/home/FaqAccordion';
import OrderCta from '../components/home/OrderCta';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { getServiceBySlug } from '../data/servicesContent';

export default function ServiceLandingPage({ slug }) {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <section className="container-app py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Service not found</h1>
        <Button to="/services" className="mt-6">
          Browse services
        </Button>
      </section>
    );
  }

  return (
    <>
      <Seo title={service.seoTitle} description={service.seoDescription} path={`/${service.slug}`} />

      <section className="border-b border-border">
        <div className="grid lg:grid-cols-2">
          <div className="bg-ink text-white">
            <div className="px-5 py-12 sm:px-8 md:px-10 lg:py-14 xl:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]">
              <p className="mb-4 text-[12px] font-medium text-white/45">
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
                <span className="mx-2 text-white/25">/</span>
                {service.title}
              </p>
              <h1 className="max-w-[16ch] font-display text-[2.15rem] font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-[2.6rem]">
                {service.hero}
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">{service.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button to="/order-now" size="lg" variant="inverted">
                  Start this service
                </Button>
                <Button to="/contact-us" size="lg" variant="outlineInverse">
                  Ask a question
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-paper">
            <div className="px-5 py-12 sm:px-8 md:px-10 lg:py-14 xl:pr-[max(2rem,calc((100vw-72rem)/2+2rem))]">
              <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-4">
                <PriceQuoteCalculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-app py-14 md:py-16">
        <SectionHeading
          title={`Built for ${service.title.toLowerCase()}`}
          body="What students notice first when they work with Scholarly Desk on this brief type."
        />
        <ul className="grid gap-3 md:grid-cols-3">
          {service.benefits.map((b) => (
            <li key={b} className="surface-card flex gap-3 p-5 text-[14px] leading-relaxed text-muted">
              <ArrowUpRight strokeWidth={2} className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-surface py-14 md:py-16">
        <div className="container-app">
          <SectionHeading title="Why students stay with the desk" center />
          <WhyChooseGrid />
        </div>
      </section>

      <section className="container-app py-14 md:py-16">
        <SectionHeading title="Related services" />
        <ServicesCarousel />
      </section>

      <section className="border-y border-border bg-bg py-14 md:py-16">
        <div className="container-app">
          <SectionHeading title="Writers for this work" center />
          <WritersSwiper />
        </div>
      </section>

      <section className="container-app py-14 md:py-16">
        <SectionHeading title="How the process works" center />
        <ProcessSteps />
      </section>

      <section className="border-y border-border bg-surface py-14 md:py-16">
        <div className="container-app">
          <SectionHeading title="Sample work" center />
          <SamplesGrid />
        </div>
      </section>

      <section className="container-app py-14 md:py-16">
        <SectionHeading title="Student reviews" />
        <ReviewsCarousel />
      </section>

      <section className="border-t border-border bg-bg py-14 md:py-16">
        <div className="container-app">
          <SectionHeading title="Questions about this service" center />
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      <OrderCta title={`Start your ${service.title.toLowerCase()} brief`} />
    </>
  );
}
