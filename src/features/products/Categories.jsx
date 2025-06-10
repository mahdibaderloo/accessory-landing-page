import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

function Categories() {
  return (
    <div className="w-full px-3.5">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        // freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full h-40"
      >
        <SwiperSlide className="flex items-center justify-center rounded-2xl bg-red-500 text-zinc-800 laptop:cursor-grab laptop:active:cursor-grabbing">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl bg-blue-500 text-zinc-800 laptop:cursor-grab laptop:active:cursor-grabbing">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl bg-yellow-500 text-zinc-800 laptop:cursor-grab laptop:active:cursor-grabbing">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl bg-zinc-500 text-zinc-800 laptop:cursor-grab laptop:active:cursor-grabbing">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl bg-amber-500 text-zinc-800 laptop:cursor-grab laptop:active:cursor-grabbing">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl bg-emerald-500 text-zinc-800 laptop:cursor-grab laptop:active:cursor-grabbing">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl bg-indigo-500 text-zinc-800 laptop:cursor-grab laptop:active:cursor-grabbing">
          Slide 7
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Categories;
