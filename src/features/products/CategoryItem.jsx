import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import necklaceImage from "../../data/images/necklace.webp";
import earringsImage from "../../data/images/earrings.jpg";
import braceletsImage from "../../data/images/bracelets.jpg";
import ringsImage from "../../data/images/rings.webp";
import watchesImage from "../../data/images/watches.jpg";

function CategoryItem({ category, image }) {
  const images = [
    necklaceImage,
    earringsImage,
    braceletsImage,
    ringsImage,
    watchesImage,
  ];

  return (
    <SwiperSlide className="flex items-center justify-center rounded-2xl overflow-hidden relative text-zinc-50 laptop:cursor-grab laptop:active:cursor-grabbing hover:text-2xl hover:text-zinc-600 hover:font-medium ">
      <img
        src={images[image]}
        alt="image"
        className="w-full h-full object-cover grayscale-75 hover:grayscale-25 transition-all duration-200 z-10 "
      />
      <p className="absolute top-[40%] w-full flex justify-center items-center transition-all duration-200 pointer-events-none">
        {category}
      </p>
    </SwiperSlide>
  );
}

export default CategoryItem;
