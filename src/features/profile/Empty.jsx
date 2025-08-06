function Empty({ children }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <p className="text-4xl font-semibold text-zinc-800">{children}</p>
    </div>
  );
}

export default Empty;
