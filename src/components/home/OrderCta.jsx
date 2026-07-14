import Button from '../ui/Button';

export default function OrderCta({
  title = 'Ship your next draft without the Sunday panic',
  body = 'Share the brief once — get a matched writer, clear PKR pricing, and delivery that respects your calendar.',
}) {
  return (
    <section className="container-app py-14 md:py-16">
      <div className="relative overflow-hidden border border-ink/10 bg-ink px-6 py-12 text-center md:px-12 md:py-14">
        <div className="relative">
          <h2 className="mx-auto max-w-xl font-display text-[1.65rem] font-bold tracking-[-0.03em] text-white md:text-[2rem]">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed text-white/60">{body}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button to="/order-now" size="lg" variant="inverted">
              Start an order
            </Button>
            <Button to="/contact-us" size="lg" variant="outlineInverse">
              Talk to the desk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
