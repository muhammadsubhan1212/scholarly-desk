import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';
import { premiumServices } from '../../data/home';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ServicesCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={14}
      slidesPerView={1.12}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3800, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2.05 },
        1024: { slidesPerView: 3.15 },
      }}
      className="writers-swiper !pb-11"
    >
      {premiumServices.map((service, i) => (
        <SwiperSlide key={service.path}>
          <Link
            to={service.path}
            className="group surface-card surface-card-interactive flex h-full min-h-[11.5rem] flex-col p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-[11px] font-bold tabular-nums text-primary/50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <ArrowUpRight
                strokeWidth={2}
                className="h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
              />
            </div>
            <h3 className="font-display text-[1.05rem] font-bold tracking-[-0.02em] text-secondary group-hover:text-primary">
              {service.title}
            </h3>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{service.body}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
