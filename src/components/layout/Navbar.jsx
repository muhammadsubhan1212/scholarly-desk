import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../Logo';
import Button from '../ui/Button';
import { navLinks, serviceNavGroups } from '../../data/brand';
import { cn } from '../../utils/helpers';

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    cn(
      'relative rounded-lg px-3 py-2 text-[13px] font-semibold tracking-[-0.01em] transition-colors',
      isActive ? 'text-primary' : 'text-slate-600 hover:text-secondary',
      isActive &&
        'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-primary',
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-surface/80 backdrop-blur-xl transition-[border-color,box-shadow] duration-200',
        scrolled ? 'border-border shadow-xs' : 'border-transparent',
      )}
    >
      <div className="container-app flex h-[3.75rem] items-center justify-between gap-4 lg:h-16">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.hasMega ? (
              <div
                key={link.path}
                className="relative"
                ref={megaRef}
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-semibold tracking-[-0.01em] transition-colors',
                    megaOpen ? 'bg-slate-100 text-primary' : 'text-slate-600 hover:text-secondary',
                  )}
                  aria-expanded={megaOpen}
                  onClick={() => setMegaOpen((v) => !v)}
                >
                  Services
                  <ChevronDown
                    strokeWidth={2}
                    className={cn('h-3.5 w-3.5 transition-transform duration-200', megaOpen && 'rotate-180')}
                  />
                </button>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,54rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated"
                    >
                      <div className="grid gap-0 md:grid-cols-3">
                        {serviceNavGroups.map((group, gi) => (
                          <div
                            key={group.title}
                            className={cn('p-5', gi > 0 && 'md:border-l md:border-border')}
                          >
                            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                              {group.title}
                            </p>
                            <ul className="space-y-0.5">
                              {group.items.map((item) => (
                                <li key={item.path}>
                                  <Link
                                    to={item.path}
                                    onClick={() => setMegaOpen(false)}
                                    className="group block rounded-lg px-2.5 py-2 transition-colors hover:bg-primary-soft"
                                  >
                                    <span className="block text-[13px] font-semibold text-secondary group-hover:text-primary">
                                      {item.label}
                                    </span>
                                    <span className="mt-0.5 block text-[12px] leading-snug text-muted">
                                      {item.blurb}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between gap-3 border-t border-border bg-bg/80 px-5 py-3.5">
                        <p className="text-[13px] text-muted">Need a recommendation?</p>
                        <Button to="/services" size="sm" variant="soft" onClick={() => setMegaOpen(false)}>
                          View all services
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === '/'}>
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/login" variant="ghost" size="sm">
            Login
          </Button>
          <Button to="/order-now" size="sm">
            Order Now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-secondary transition-colors hover:bg-bg lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X strokeWidth={2} className="h-5 w-5" /> : <Menu strokeWidth={2} className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-surface lg:hidden"
          >
            <div className="container-app flex max-h-[min(80vh,36rem)] flex-col gap-0.5 overflow-y-auto py-3">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.path}>
                    <button
                      type="button"
                      className="flex h-11 w-full items-center justify-between rounded-xl px-3 text-left text-sm font-semibold text-secondary"
                      onClick={() => setMobileServices((v) => !v)}
                    >
                      Services
                      <ChevronDown
                        strokeWidth={2}
                        className={cn('h-4 w-4 text-muted transition-transform', mobileServices && 'rotate-180')}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServices && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pb-2 pl-1"
                        >
                          {serviceNavGroups.map((group) => (
                            <div key={group.title} className="mb-2">
                              <p className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                                {group.title}
                              </p>
                              {group.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="block rounded-lg px-3 py-2.5 text-[13px] text-muted hover:bg-bg hover:text-primary"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'flex h-11 items-center rounded-xl px-3 text-sm font-semibold',
                        isActive ? 'bg-primary-soft text-primary' : 'text-secondary',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ),
              )}
              <div className="mt-2 grid gap-2 border-t border-border pt-4">
                <Button to="/login" variant="outline" onClick={() => setMobileOpen(false)}>
                  Login
                </Button>
                <Button to="/order-now" onClick={() => setMobileOpen(false)}>
                  Order Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
