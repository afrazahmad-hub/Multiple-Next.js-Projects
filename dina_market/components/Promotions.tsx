import Image from "next/image";

const Promotions = () => {
  return (
    <section className="mt-8">
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-blue-700 font-bold">PROMOTIONS</h6>
        <h1 className="text-3xl font-bold">Our Promotions Events</h1>
      </div>
      <div className="grid md:grid-cols-3 justify-between gap-10 mt-6">
        <div className="flex flex-col justify-between">
          <div className="flex items-center bg-gray-300 h-52">
            <div className="pl-3">
              <h4 className="text-2xl font-bold">GET UP TO</h4>
              <h3 className="text-4xl font-bold">60 %</h3>
              <p className=" text-lg text-gray-900">For the summer season</p>
            </div>
            <div>
              <Image
                src={"/promotions/event1.jpeg"}
                alt="girl promo"
                height={200}
                width={350}
              />
            </div>
          </div>
          <div className="mt-4 bg-gray-900 text-white h-52 flex flex-col items-center ">
            <h2 className="text-4xl font-bold mt-11">GET 30% Off</h2>
            <p className="mt-3">USE PROMO CODE</p>
            <button className="text-lg bg-gray-600 px-12 py-1 rounded-lg mt-1">
              DINE WEEKEND SLAE
            </button>
          </div>
        </div>
        <div className="bg-orange-100 px-5">
          <div className="mt-4">
            <h2>Flex Sweatshirt</h2>
            <p className="text-lg">
              <s>$100.00</s> <b>$75.00</b>
            </p>
          </div>
          <div>
            <Image
              src={"/promotions/event2.jpeg"}
              alt="men promo1"
              height={200}
              width={300}
            />
          </div>
        </div>
        <div className="bg-gray-300 px-5">
          <div className="mt-4">
            <h2>Flex Push Button Bomber</h2>
            <p className="text-lg">
              <s>$225.00</s> <b>$190.00</b>
            </p>
          </div>
          <Image
            src={"/promotions/event3.jpeg"}
            alt="men promo2"
            height={200}
            width={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Promotions;
