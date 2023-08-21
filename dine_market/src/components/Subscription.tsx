const Subscription = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mt-28 relative">
        <div className="text-8xl md:text-9xl text-slate-200/60 font-bold absolute -z-10">
          Newslatter
        </div>
        <div>
          <h1 className="text-4xl font-bold">Subscribe Our Newsletter</h1>
          <p className="text-lg text-gray-700 mt-4">
            Get the latest information and promo offers directly
          </p>
        </div>
        <div className="flex justify-center items-center mt-6 gap-2">
          <input
            type="text"
            placeholder="Input Email Address"
            className="border border-slate-950 h-10 p-2"
          />
          <button
            type="submit"
            className="bg-black text-white h-10 shrink-0 p-2 max-w-3xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
