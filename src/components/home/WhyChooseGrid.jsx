import { motion } from 'framer-motion';
import { Award, Clock3, LifeBuoy, RefreshCw, ShieldCheck } from 'lucide-react';
import { whyChooseItems } from '../../data/home';
import Card from '../ui/Card';

const icons = [Award, ShieldCheck, Clock3, LifeBuoy, RefreshCw];

export default function WhyChooseGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {whyChooseItems.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card interactive className="h-full !p-4 md:!p-5">
              <div className="mb-3.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Icon strokeWidth={1.75} className="h-[18px] w-[18px]" />
              </div>
              <h3 className="font-display text-[15px] font-bold tracking-[-0.02em] text-secondary">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.body}</p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
