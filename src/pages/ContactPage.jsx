import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Button from '../components/ui/Button';
import { Field, Input, Textarea } from '../components/ui/Field';
import { brand, socialLinks } from '../data/brand';
import { submitContact } from '../services/fareService';
import { useToast } from '../context/ToastContext';
import { isValidEmail } from '../utils/helpers';

export default function ContactPage() {
  const toast = useToast();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', email: '', Phone: '', subject: '', detail: '' },
  });

  const onSubmit = async (values) => {
    setSubmitting(true);
    try {
      const result = await submitContact({
        name: values.name,
        email: values.email,
        Phone: values.Phone,
        phone: values.Phone,
        subject: values.subject,
        detail: values.detail,
      });
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      reset();
    } catch {
      toast.error('Unable to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with the Scholarly Desk academic team for quotes, status updates, and writing support."
        path="/contact-us"
      />
      <PageHero
        title="Contact Us"
        subtitle="Usually within one business hour — voice, WhatsApp, or email."
        crumbs={[{ label: 'Contact Us' }]}
      />
      <section className="container-app grid gap-6 py-12 md:gap-8 md:py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8"
        >
          <h2 className="font-display text-lg font-bold tracking-tight text-secondary">Send a message</h2>
          <p className="mt-1 text-[13px] text-muted">Tell us the subject and what you need next.</p>
          <div className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message} htmlFor="contact-name">
                <Input
                  id="contact-name"
                  invalid={!!errors.name}
                  {...register('name', { required: 'Name is required' })}
                />
              </Field>
              <Field label="Email" error={errors.email?.message} htmlFor="contact-email">
                <Input
                  id="contact-email"
                  type="email"
                  invalid={!!errors.email}
                  {...register('email', {
                    required: 'Email is required',
                    validate: (v) => isValidEmail(v) || 'Enter a valid email',
                  })}
                />
              </Field>
            </div>
            <Field label="Phone" error={errors.Phone?.message}>
              <Controller
                name="Phone"
                control={control}
                rules={{ required: 'Phone is required' }}
                render={({ field }) => (
                  <PhoneInput
                    defaultCountry="pk"
                    value={field.value}
                    onChange={field.onChange}
                    className="phone-input-sd"
                  />
                )}
              />
            </Field>
            <Field label="Subject" error={errors.subject?.message} htmlFor="contact-subject">
              <Input
                id="contact-subject"
                invalid={!!errors.subject}
                {...register('subject', { required: 'Subject is required' })}
              />
            </Field>
            <Field label="Message" error={errors.detail?.message} htmlFor="contact-detail">
              <Textarea
                id="contact-detail"
                rows={5}
                invalid={!!errors.detail}
                {...register('detail', {
                  required: 'Message is required',
                  minLength: { value: 10, message: 'Please add more detail' },
                })}
              />
            </Field>
            <div className="rounded-xl border border-dashed border-border bg-bg px-3.5 py-3 text-[12px] text-muted">
              Demo captcha placeholder — validated by the mock API on submit.
            </div>
            <Button type="submit" loading={submitting}>
              Send message
            </Button>
          </div>
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
            <h2 className="font-display text-[15px] font-bold text-secondary">Direct channels</h2>
            <ul className="mt-4 space-y-3 text-[13px]">
              <li>
                <a
                  href={`tel:${brand.phoneTel}`}
                  className="inline-flex items-center gap-2.5 font-medium text-secondary transition-colors hover:text-primary"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Phone strokeWidth={2} className="h-3.5 w-3.5" />
                  </span>
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  className="inline-flex items-center gap-2.5 font-medium text-secondary transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <MessageCircle strokeWidth={2} className="h-3.5 w-3.5" />
                  </span>
                  WhatsApp desk
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-2.5 font-medium text-secondary transition-colors hover:text-primary"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Mail strokeWidth={2} className="h-3.5 w-3.5" />
                  </span>
                  {brand.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border px-2.5 py-1 text-[11px] font-semibold transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
