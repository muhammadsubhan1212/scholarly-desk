import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Button from '../components/ui/Button';
import { Field, Input, Select, Textarea } from '../components/ui/Field';
import { useFare } from '../hooks/useFare';
import { useToast } from '../context/ToastContext';
import { useCurrency } from '../context/CurrencyContext';
import { submitOrder } from '../services/fareService';
import {
  academicLevels,
  countryList,
  deadlines,
  pageOptions,
  paperTypes,
  referenceStyles,
  subjectGroups,
} from '../utils/orderOptions';

export default function OrderNowPage() {
  const toast = useToast();
  const { formatPrice } = useCurrency();
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      academicLevel: '1',
      paperTopic: '',
      paperType: paperTypes[0],
      subject: 'Other',
      referenceStyle: 'APA',
      deadline: '1',
      pages: '1',
      spacing: 'Double',
      detail: '',
      name: '',
      email: '',
      country: 'United Kingdom',
      contact: '',
    },
  });

  const values = watch();
  const { perPage, total, loading } = useFare(
    Number(values.academicLevel),
    Number(values.deadline),
    Number(values.pages),
  );

  const levelLabel = useMemo(
    () => academicLevels.find((l) => String(l.id) === String(values.academicLevel))?.label,
    [values.academicLevel],
  );
  const deadlineLabel = useMemo(
    () => deadlines.find((d) => String(d.id) === String(values.deadline))?.label,
    [values.deadline],
  );

  const onFiles = (e) => {
    const list = Array.from(e.target.files || []);
    if (list.length > 10) {
      toast.error('Maximum 10 files.');
      return;
    }
    if (list.find((f) => f.size > 25 * 1024 * 1024)) {
      toast.error('Each file must be 25MB or smaller.');
      return;
    }
    setFiles(list);
  };

  const onSubmit = async (form) => {
    setSubmitting(true);
    try {
      const result = await submitOrder({
        ...form,
        academicLevel: levelLabel,
        deadline: deadlineLabel,
        pages: Number(form.pages),
        perPage,
        total,
        attachments: files.map((f) => ({ name: f.name, size: f.size })),
      });
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      reset();
      setFiles([]);
    } catch {
      toast.error('Order submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Order Now"
        description="Place an Assignment Solution order — share level, subject, deadline, and files for an instant quote in your local currency."
        path="/order-now"
      />
      <PageHero
        title="Order details"
        subtitle="Specific briefs get better writer matches and faster kickoff."
        crumbs={[{ label: 'Order Now' }]}
      />

      <section className="container-app grid gap-6 py-12 md:gap-8 md:py-16 lg:grid-cols-[1.35fr_0.65fr]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7 rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8"
        >
          <fieldset>
            <legend className="font-display text-[15px] font-bold text-secondary">Academic level</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {academicLevels.map((level) => (
                <label
                  key={level.id}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2 text-[13px] font-medium has-[:checked]:border-primary/40 has-[:checked]:bg-primary-soft has-[:checked]:text-primary"
                >
                  <input type="radio" value={level.id} className="accent-primary" {...register('academicLevel')} />
                  {level.label}
                </label>
              ))}
            </div>
          </fieldset>

          <Field label="Paper topic" error={errors.paperTopic?.message}>
            <Input invalid={!!errors.paperTopic} {...register('paperTopic', { required: 'Paper topic is required' })} />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Paper type">
              <Select {...register('paperType')}>
                {paperTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </Select>
            </Field>
            <Field label="Subject *">
              <Select {...register('subject', { required: true })}>
                {subjectGroups.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </Select>
            </Field>
          </div>

          <fieldset>
            <legend className="field-label">Reference style</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {referenceStyles.map((style) => (
                <label
                  key={style}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-[12px] font-medium has-[:checked]:border-primary/40 has-[:checked]:bg-primary-soft has-[:checked]:text-primary"
                >
                  <input type="radio" value={style} className="accent-primary" {...register('referenceStyle')} />
                  {style}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Deadline *">
              <Select {...register('deadline')}>
                {deadlines.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.label}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Length">
              <Select {...register('pages')}>
                {pageOptions.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </Select>
            </Field>
          </div>

          <fieldset>
            <legend className="field-label">Spacing</legend>
            <div className="mt-2 flex gap-2">
              {['Double', 'Single'].map((s) => (
                <label
                  key={s}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2 text-[13px] font-medium has-[:checked]:border-primary/40 has-[:checked]:bg-primary-soft has-[:checked]:text-primary"
                >
                  <input type="radio" value={s} className="accent-primary" {...register('spacing')} />
                  {s}
                </label>
              ))}
            </div>
          </fieldset>

          <Field label="Detail" hint="Rubric notes, module outcomes, or special instructions.">
            <Textarea rows={5} {...register('detail')} />
          </Field>

          <Field label="Attachments" hint="Max 10 files · 25MB each. Hold Ctrl to multi-select.">
            <input
              type="file"
              multiple
              onChange={onFiles}
              className="block w-full text-[13px] text-muted file:mr-3 file:rounded-lg file:border-0 file:bg-primary-soft file:px-3 file:py-2 file:text-[13px] file:font-semibold file:text-primary"
            />
            {files.length > 0 && (
              <ul className="mt-2 space-y-1 text-[12px] text-muted">
                {files.map((f) => (
                  <li key={f.name}>{f.name}</li>
                ))}
              </ul>
            )}
          </Field>

          <div className="border-t border-border pt-7">
            <h3 className="font-display text-[15px] font-bold text-secondary">Personal details</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" error={errors.name?.message}>
                <Input invalid={!!errors.name} {...register('name', { required: 'Name is required' })} />
              </Field>
              <Field label="Your email" error={errors.email?.message}>
                <Input
                  type="email"
                  invalid={!!errors.email}
                  {...register('email', { required: 'Email is required' })}
                />
              </Field>
              <Field label="Country">
                <Select {...register('country')}>
                  {countryList.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Select>
              </Field>
              <Field label="Contact number" error={errors.contact?.message}>
                <Input
                  invalid={!!errors.contact}
                  {...register('contact', { required: 'Contact number is required' })}
                />
              </Field>
            </div>
          </div>

          <Button type="submit" size="lg" loading={submitting}>
            Submit order
          </Button>
        </form>

        <aside className="h-fit rounded-2xl border border-border bg-surface p-5 shadow-elevated lg:sticky lg:top-24 lg:p-6">
          <h2 className="font-display text-[15px] font-bold text-secondary">Order summary</h2>
          <dl className="mt-4 space-y-0 text-[13px]">
            {[
              ['Level', levelLabel],
              ['Topic', values.paperTopic || '—'],
              ['Type', values.paperType],
              ['Subject', values.subject],
              ['Style', values.referenceStyle],
              ['Pages', values.pages],
              ['Urgency', deadlineLabel],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-border/70 py-2.5">
                <dt className="text-muted">{k}</dt>
                <dd className="max-w-[55%] truncate text-right font-medium text-secondary">{v}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-5 font-display text-[13px] font-bold text-secondary">Contact</h3>
          <dl className="mt-1 space-y-0 text-[13px]">
            {[
              ['Name', values.name || '—'],
              ['Email', values.email || '—'],
              ['Country', values.country],
              ['Phone', values.contact || '—'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-border/70 py-2.5">
                <dt className="text-muted">{k}</dt>
                <dd className="max-w-[55%] truncate text-right font-medium text-secondary">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 rounded-xl border border-border bg-bg p-4">
            <div className="flex justify-between text-[13px]">
              <span className="text-muted">Per page</span>
              <span className="font-semibold tabular-nums">{loading ? '—' : formatPrice(perPage)}</span>
            </div>
            <div className="mt-2.5 flex items-end justify-between">
              <span className="text-[13px] font-medium text-secondary">Total</span>
              <span className="font-display text-xl font-bold tabular-nums text-primary">
                {loading ? '—' : formatPrice(total)}
              </span>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
