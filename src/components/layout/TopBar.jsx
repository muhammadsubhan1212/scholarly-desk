import { Mail, Phone, Star } from 'lucide-react';
import { brand, socialLinks } from '../../data/brand';

export default function TopBar() {
  return (
    <div className="hidden border-b border-border bg-surface lg:block">
      <div className="container-app flex h-10 items-center justify-between text-[12px] text-muted">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 font-medium text-secondary">
            <Star strokeWidth={2} className="h-3.5 w-3.5 fill-highlight text-highlight" />
            {brand.ratingLabel}
            <span className="text-muted">· {brand.rating}/5</span>
          </span>
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            WhatsApp {brand.phone}
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${brand.phoneTel}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Phone strokeWidth={2} className="h-3.5 w-3.5" />
            {brand.phone}
          </a>
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Mail strokeWidth={2} className="h-3.5 w-3.5" />
            {brand.email}
          </a>
          <div className="flex items-center gap-3 border-l border-border pl-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold tracking-wide text-slate-500 transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
