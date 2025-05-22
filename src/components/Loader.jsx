function Loader() {
  return (
    <div className="w-[115px] h-screen relative mx-auto flex justify-center items-center">
      <div className="absolute w-[33px] h-[33px] rounded-full bg-zinc-800 left-[0px] animate-scale1"></div>
      <div className="absolute w-[33px] h-[33px] rounded-full bg-zinc-800 left-[0px] animate-translate"></div>
      <div className="absolute w-[33px] h-[33px] rounded-full bg-zinc-800 left-[40px] animate-translate"></div>
      <div className="absolute w-[33px] h-[33px] rounded-full bg-zinc-800 left-[80px] animate-scale0"></div>
    </div>
  );
}

export default Loader;
