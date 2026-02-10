import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export default function Carousel({ images = [] }) {
  return (
    <div className="ti-carousel">
      <Swiper
        modules={[EffectCards, Pagination]}
        effect="cards"
        grabCursor
        centeredSlides
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="ti-swiper"
      >
        {images.map((img) => (
          <SwiperSlide key={img.src}>
            <div className="ti-slide">
              <img className="ti-slide-img" src={img.src} alt={img.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
