import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Logo from '../Logo';
import { brand, allServices, footerPolicyLinks, socialLinks } from '../../data/brand';

export default function Footer() {
  const mid = Math.ceil(allServices.length / 2);
  const servicesCol1 = allServices.slice(0, mid);
  const servicesCol2 = allServices.slice(mid);

  return (
    <footer className="mt-auto bg-secondary text-slate-400">
      <div className="container-app grid gap-10 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="space-y-4 lg:pr-4">
          <Logo light />
          <p className="max-w-xs text-[13px] leading-relaxed">
            Academic writing studio for students who want clear structure, original work, and calm support
            from idea to final draft.
          </p>
          <div className="space-y-2.5 text-[13px]">
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle strokeWidth={2} className="h-3.5 w-3.5 text-accent" />
              WhatsApp {brand.phone}
            </a>
            <a
              href={`tel:${brand.phoneTel}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone strokeWidth={2} className="h-3.5 w-3.5 text-accent" />
              {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail strokeWidth={2} className="h-3.5 w-3.5 text-accent" />
              {brand.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 px-2 py-1 text-[11px] font-semibold tracking-wide transition-colors hover:border-accent/50 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3.5 font-display text-[12px] font-bold uppercase tracking-[0.08em] text-white">
            Company
          </h3>
          <ul className="space-y-2 text-[13px]">
            {footerPolicyLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3.5 font-display text-[12px] font-bold uppercase tracking-[0.08em] text-white">
            Services
          </h3>
          <ul className="space-y-2 text-[13px]">
            {servicesCol1.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="transition-colors hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3.5 font-display text-[12px] font-bold uppercase tracking-[0.08em] text-white">
            More services
          </h3>
          <ul className="space-y-2 text-[13px]">
            {servicesCol2.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="transition-colors hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-black/20">
        <div className="container-app flex flex-col items-center justify-between gap-2 py-4 text-center text-[12px] text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {brand.copyrightYears} {brand.name}. All rights reserved.
          </p>
          <p>Academic support for learning — use ethically.</p>
        </div>
      </div>
    </footer>
  );
}
