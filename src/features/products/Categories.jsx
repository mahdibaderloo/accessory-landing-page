import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import necklacesImage from "../../data/images/necklace.jpg";
import earringsImage from "../../data/images/earrings.jpg";
import braceletsImage from "../../data/images/bracelets.jpg";
import ringsImage from "../../data/images/rings.jpg";
import watchesImage from "../../data/images/watches.jpg";
import { useDispatch } from "react-redux";
import { showCategoryItems } from "./categorySlice";
import { useSearchParams } from "react-router-dom";

function Categories({ items }) {
  const dispatch = useDispatch();
  const [SearchParams, setSearchParams] = useSearchParams();

  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  const images = {
    necklacesImage,
    earringsImage,
    braceletsImage,
    ringsImage,
    watchesImage,
  };

  function handleClick(category) {
    dispatch(showCategoryItems(category));

    SearchParams.set("category", category);
    setSearchParams(SearchParams);
  }

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
          <SwiperSlide
            onClick={() => handleClick(category)}
            className="flex items-center justify-center rounded-2xl overflow-hidden relative text-zinc-50 laptop:cursor-grab laptop:active:cursor-grabbing hover:text-2xl hover:text-zinc-600 hover:font-medium "
          >
            <img
              src={images[`${category.toLowerCase()}Image`]}
              alt="image"
              className="w-full h-full object-cover grayscale-75 hover:grayscale-25 transition-all duration-200 z-10 "
            />
            <p className="absolute top-[40%] w-full flex justify-center items-center transition-all duration-200 pointer-events-none">
              {category}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
