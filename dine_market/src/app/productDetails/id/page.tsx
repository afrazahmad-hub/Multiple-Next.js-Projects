// export default function Page({ params }: { params: { id: string } }) {
//   return <div>Category : {params.id}</div>;
// }

import Image from "next/image";
import ProductCounter from "@/components/ProductCounter";
import Wrapper from "@/components/Wrapper";

const sizes = [
  { id: 1, size: "XS" },
  { id: 2, size: "S" },
  { id: 3, size: "M" },
  { id: 4, size: "L" },
  { id: 5, size: "XL" },
];

const page = () => {
  return (
    <Wrapper>
      <section className="flex flex-col">
        <div className="md:flex justify-center mt-12 gap-x-6">
          {/* Image */}
          <div>
            <Image src={"/feature.jpeg"} alt="pic" width={500} height={400} />
          </div>
          {/* Title */}
          <div className="mt-10">
            <h1 className="text-gray-800 text-3xl font-semibold">
              Imperial Alpaca Hoodie
            </h1>{" "}
            <h4 className="text-gray-400 font-bold">Jackets</h4>
            {/* Sizes */}
            <h4 className="mt-12 font-bold text-gray-800">SELECT SIZE</h4>
            <div className="flex   ">
              {sizes.map((size) => (
                <div
                  key={size.id}
                  className="flex justify-center items-center hover:shadow-xl cursor-pointer h-9 w-9 rounded-full mt-2 gap-x-4"
                >
                  <span className="text-gray-400 text-lg font-bold">
                    {size.size}
                  </span>
                </div>
              ))}
            </div>
            {/* Quantity */}
            <div className="flex items-center mt-12 gap-x-3">
              <p className="text-lg font-bold text-gray-800">Quantity:</p>
              <ProductCounter />
            </div>
            {/* Add to cart */}
            <div className="flex justify-between items-center mt-12">
              <button className="bg-gray-900 text-white h-12 w-36">
                Add To Cart
              </button>
              <p className="text-2xl font-bold text-gray-800">$ 525.00</p>
            </div>
          </div>
        </div>
        <div className="ml-3 mt-14">
          <div>
            <p className="text-2xl font-bold">Product Information</p>
          </div>
          {/* PRODUCT DETAILS */}
          <div className="flex flex-col mt-8">
            <div className="grid grid-cols-2 w-[700px]">
              <h4 className="text-base text-gray-400 font-bold">
                PRODUCT DETAILS
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                magnam eos, recusandae, quam laudantium hic iste doloribus
                deleniti aperiam repudiandae dolorum enim non inventore velit
                laborum saepe odit vero dolorem.
              </p>
            </div>
            <div className="grid grid-cols-2 w-[700px] mt-4">
              <h4 className="text-base text-gray-400 font-bold">
                PRODUCT CARE
              </h4>
              <ul>
                <li>Hand wash using cold water.</li>
                <li>Do not using bleach.</li>
                <li>Hang it to dry.</li>
                <li>Iron on low temperature</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default page;
