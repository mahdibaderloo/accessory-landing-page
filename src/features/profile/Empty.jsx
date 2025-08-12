function Empty({ children }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 laptop:w-[70%] p-4 laptop:p-0 laptop:mx-8">
      <p className="text-4xl font-semibold text-zinc-800">{children}</p>
    </div>
  );
}

export default Empty;
