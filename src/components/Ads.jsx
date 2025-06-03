import adsImage from "../data/images/ads-image.jpg";

function Ads() {
  return (
    <div className="mt-8 relative desktop:rounded-4xl overflow-hidden">
      <img src={adsImage} alt="adsImage" className="grayscale-50" />
      <p className="absolute top-[60%] laptop:top-[60%] opacity-70 left-4 laptop:left-20 text-sm tablet:text-2xl laptop:text-4xl desktop:text-6xl font-bold text-zinc-100">
        Limited Edition
      </p>
      <p className="absolute top-[70%] left-4 laptop:left-20 text-4xl tablet:text-6xl laptop:text-8xl desktop:text-[9rem] font-bold text-zinc-100">
        30% OFF
      </p>
    </div>
  );
}

export default Ads;
