import Image from "next/image";
import Link from "next/link";

const Paragraphs = () => {
  return (
    <section>
      <div className="max-w-md mt-16 right-0">
        <h1 className="text-5xl font-bold tracking-wide">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className="grid md:grid-cols-4 justify-between mt-8">
        <div>
          <div>
            <h4 className="text-xl font-semibold">
              Using Good Quality Materials
            </h4>
            <p className="text-lg text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="mt-3">
            <h4 className="text-xl font-semibold">Modern Fashion Design</h4>
            <p className="text-lg text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          <div className=" ">
            <h4 className="text-xl font-semibold">100% Handmade Products</h4>
            <p className="text-lg text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="mt-3 ">
            <h4 className="text-xl font-semibold">Discount for Bulk Orders</h4>
            <p className="text-lg text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div>
          <Image
            src={"/feature.jpeg"}
            alt="feature image"
            width={200}
            height={250}
          />
        </div>
        <div>
          <div className="text-lg text-gray-600">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable
          </div>
          <div className="bg-gray-900 text-white text-center h-10 mt-4">
            <Link href={"/AllProducts"}>See All Products</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paragraphs;
