import { useState } from 'react';
import { Info } from 'lucide-react';
import Button from '../ui/Button';
import { Field, Select } from '../ui/Field';
import { useFare } from '../../hooks/useFare';
import { academicLevels, deadlines, pageOptions, paperTypes } from '../../utils/orderOptions';
import { formatPrice } from '../../utils/helpers';
import { cn } from '../../utils/helpers';

export default function PriceQuoteCalculator({ tone = 'light' }) {
  const [paperType, setPaperType] = useState(paperTypes[0]);
  const [levelId, setLevelId] = useState(1);
  const [pages, setPages] = useState(1);
  const [deadlineId, setDeadlineId] = useState(1);
  const [showPayHint, setShowPayHint] = useState(false);
  const { perPage, total, loading } = useFare(levelId, deadlineId, pages);
  const dark = tone === 'dark';

  return (
    <div
      className={cn(
        'border p-5 sm:p-6',
        dark
          ? 'border-white/15 bg-white/[0.04] text-white'
          : 'border-border-strong bg-surface',
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p
            className={cn(
              'mb-1 text-[11px] font-bold uppercase tracking-[0.12em]',
              dark ? 'text-teal-300/90' : 'text-accent',
            )}
          >
            Price estimate
          </p>
          <h3
            className={cn(
              'font-display text-lg font-bold tracking-[-0.02em]',
              dark ? 'text-white' : 'text-secondary',
            )}
          >
            Check your rate
          </h3>
        </div>
        <div className="relative shrink-0">
          <button
            type="button"
            className={cn(
              'inline-flex items-center gap-1 border px-2 py-1 text-[11px] font-semibold',
              dark
                ? 'border-white/20 text-white/80 hover:bg-white/5'
                : 'border-border text-secondary hover:bg-bg',
            )}
            onMouseEnter={() => setShowPayHint(true)}
            onMouseLeave={() => setShowPayHint(false)}
            onFocus={() => setShowPayHint(true)}
            onBlur={() => setShowPayHint(false)}
          >
            <Info strokeWidth={2} className="h-3 w-3" />
            Pay in 2
          </button>
          {showPayHint && (
            <div className="absolute right-0 top-full z-10 mt-2 w-52 border border-border bg-surface p-3 text-[12px] leading-relaxed text-muted shadow-elevated">
              Pay 50% to start, balance when your draft is ready for review.
            </div>
          )}
        </div>
      </div>

      <div className={cn('grid gap-3.5', dark && '[&_.field-label]:text-white/80 [&_.field-control]:border-white/20 [&_.field-control]:bg-ink [&_.field-control]:text-white')}>
        <Field label="Paper type">
          <Select value={paperType} onChange={(e) => setPaperType(e.target.value)}>
            {paperTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Academic level">
          <Select value={levelId} onChange={(e) => setLevelId(Number(e.target.value))}>
            {academicLevels.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </Select>
        </Field>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="Length">
            <Select value={pages} onChange={(e) => setPages(Number(e.target.value))}>
              {pageOptions.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Deadline">
            <Select value={deadlineId} onChange={(e) => setDeadlineId(Number(e.target.value))}>
              {deadlines.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.label}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      </div>

      <div
        className={cn(
          'mt-5 grid grid-cols-2 gap-3 border p-4',
          dark ? 'border-white/15 bg-black/20' : 'border-border bg-bg',
        )}
      >
        <div>
          <p className={cn('text-[11px] uppercase tracking-wide', dark ? 'text-white/50' : 'text-muted')}>
            Per page
          </p>
          <p
            className={cn(
              'mt-1 font-display text-base font-bold tabular-nums tracking-tight',
              dark ? 'text-white' : 'text-secondary',
            )}
          >
            {loading ? '—' : formatPrice(perPage)}
          </p>
        </div>
        <div className={cn('border-l pl-3', dark ? 'border-white/15' : 'border-border')}>
          <p className={cn('text-[11px] uppercase tracking-wide', dark ? 'text-white/50' : 'text-muted')}>
            Total
          </p>
          <p
            className={cn(
              'mt-1 font-display text-base font-bold tabular-nums tracking-tight',
              dark ? 'text-white' : 'text-secondary',
            )}
          >
            {loading ? '—' : formatPrice(total)}
          </p>
        </div>
      </div>

      <Button to="/order-now" className="mt-4 w-full" size="lg" variant={dark ? 'inverted' : 'primary'}>
        Continue to order
      </Button>
    </div>
  );
}
