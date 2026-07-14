import { motion } from 'framer-motion';
import { processSteps } from '../../data/home';

export default function ProcessSteps() {
  return (
    <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
      />
      {processSteps.map((step, index) => (
        <motion.article
          key={step.step}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06, duration: 0.35 }}
          className="surface-card relative p-5"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-white shadow-xs">
            {step.step}
          </span>
          <h3 className="mt-4 font-display text-[15px] font-bold tracking-[-0.02em] text-secondary">
            {step.title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">{step.body}</p>
        </motion.article>
      ))}
    </div>
  );
}
