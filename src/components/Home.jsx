function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-800 mx-3.5 mt-12 rounded-3xl relative desktop:mt-16">
        <img src="./main-image.png" alt="main" />
        <div className="hidden absolute w-80 top-[20%] right-5  laptop:flex flex-col flex-wrap desktop:right-20 desktop:w-96">
          <h1 className=" text-6xl font-bold text-zinc-200">Accessory</h1>
          <div className="text-md font-bold text-zinc-400 mt-3 laptop:flex flex-col flex-wrap desktop:right-60">
            <span>Simplicity meets sophistication.</span>
            <span>Find the perfect accessory for your everyday elegance</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
