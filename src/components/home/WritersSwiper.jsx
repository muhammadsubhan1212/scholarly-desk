import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { writers } from '../../data/home';
import { getInitials } from '../../utils/helpers';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function WritersSwiper({ items = writers }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={14}
        slidesPerView={1.08}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="writers-swiper !pb-11"
      >
        {items.map((writer) => (
          <SwiperSlide key={writer.name}>
            <button
              type="button"
              onClick={() => setActive(writer)}
              className="surface-card surface-card-interactive w-full p-5 text-left"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-display text-sm font-bold text-white shadow-xs">
                  {getInitials(writer.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-[15px] font-bold tracking-[-0.02em] text-secondary">
                    {writer.name}
                  </h3>
                  <p className="text-[12px] font-semibold text-accent">{writer.rate} success</p>
                  <p className="text-[11px] text-muted">{writer.projects} projects</p>
                </div>
              </div>
              <p className="line-clamp-3 text-[13px] leading-relaxed text-muted">{writer.bio}</p>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {writer.focus.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-bg px-2 py-1 text-[11px] font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-secondary/55 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-bg hover:text-secondary"
                onClick={() => setActive(null)}
                aria-label="Close writer profile"
              >
                <X strokeWidth={2} className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-display text-lg font-bold text-white">
                  {getInitials(active.name)}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-secondary">
                    {active.name}
                  </h3>
                  <p className="text-[13px] text-accent">
                    {active.rate} · {active.projects} projects
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">{active.bio}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {active.focus.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-bg px-2.5 py-1 text-[12px] font-medium text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
