import { Download } from 'lucide-react';
import Button from '../ui/Button';
import { samples } from '../../data/home';

export default function SamplesGrid({ items = samples }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((sample) => (
        <article key={sample.title} className="surface-card surface-card-interactive flex flex-col p-5">
          <p className="section-eyebrow mb-2">Work sample</p>
          <h3 className="font-display text-[1.05rem] font-bold tracking-[-0.02em] text-secondary">
            {sample.title}
          </h3>
          <dl className="mt-4 flex-1 space-y-0 text-[13px]">
            {[
              ['Discipline', sample.discipline],
              ['Level', sample.level],
              ['Pages', sample.pages],
              ['Format', sample.format],
            ].map(([k, v], i, arr) => (
              <div
                key={k}
                className={`flex justify-between gap-3 py-2.5 ${i < arr.length - 1 ? 'border-b border-border/80' : ''}`}
              >
                <dt className="text-muted">{k}</dt>
                <dd className="font-medium text-secondary">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={sample.file}
              download
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border-strong/70 bg-surface text-[13px] font-semibold text-secondary transition-colors hover:border-primary/35 hover:bg-primary-soft hover:text-primary"
            >
              <Download strokeWidth={2} className="h-3.5 w-3.5" />
              Download
            </a>
            <Button to="/order-now" size="sm">
              Order similar
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
