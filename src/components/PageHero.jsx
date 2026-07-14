import { Link } from 'react-router-dom';

export default function PageHero({ title, subtitle, crumbs = [] }) {
  return (
    <section className="border-b border-white/10 bg-ink text-white">
      <div className="container-app py-12 md:py-14">
        {crumbs.length > 0 && (
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[12px] text-white/40">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2">
                <span className="text-white/20">/</span>
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/75">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-3xl font-display text-[2rem] font-bold tracking-[-0.035em] text-white md:text-[2.4rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-white/55">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
