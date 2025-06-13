import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import CategoryItem from "./CategoryItem";

function Categories({ items }) {
  const uniqueCategories = [...new Set(items.map((item) => item.category))];

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
        {uniqueCategories.map((category) => (
          <CategoryItem
            category={category}
            key={category}
            image={`${category}Image`}
          />
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
