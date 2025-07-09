function MiniLoader() {
  return (
    <div className="w-full py-3">
      <div className="w-[40px] h-full relative mx-auto flex justify-center items-center">
        <div className="absolute w-[12px] h-[12px] rounded-full bg-zinc-50 left-[0px] animate-scale1"></div>
        <div className="absolute w-[12px] h-[12px] rounded-full bg-zinc-50 left-[0px] animate-translate-mini"></div>
        <div className="absolute w-[12px] h-[12px] rounded-full bg-zinc-50 left-[16px] animate-translate-mini"></div>
        <div className="absolute w-[12px] h-[12px] rounded-full bg-zinc-50 left-[32px] animate-scale0"></div>
      </div>
    </div>
  );
}

export default MiniLoader;
