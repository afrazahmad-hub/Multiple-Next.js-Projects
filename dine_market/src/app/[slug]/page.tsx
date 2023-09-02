// import { client } from "@/lib/sanityClient";

// import ProductCard from "@/components/ProductCard";
// import { Image as IImage } from "sanity";

// const fetchAllData = async () => {
//   try {
//     const res = await client.fetch(`*[_type=="products"]{
//       _id,
//       image,
//       title,
//       slug,
//       description,
//       pType,
//       price,
//       category->{
//           name
//         }
//     }`);

//     return res;
//   } catch (error) {
//     console.log("Error", error);
//   }
// };

// interface IProducts {
//   _id: string;
//   image: IImage;
//   title: string;
//   slug: {
//     current: string;
//     _item: string;
//   };
//   pType: string;
//   price: number;
//   description: string;
//   category: {
//     name: string;
//   };
// }

// export default async function Page({ params }: { params: { slug: string } }) {
//   const data: IProducts[] = await fetchAllData();

//   return (
//     <div className="grid md:grid-cols-[repeat(3,auto)] space-y-4 mt-10 ">
//       {data.map((items: any) => (
//         <ProductCard key={items._id} items={items} />
//       ))}
//     </div>
//   );
// }

// export default function Page({ params }: { params: { id: string } }) {
//   return <div>Category : {params.id}</div>;
// }

import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

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

// ["XS", "S", "M", "L", "XL"];

const singleProductData = async (slug1: string) => {
  const res = await client.fetch(
    `*[_type=='products' && slug.current=='${slug1}']`
  );
  return res;
};

interface IProducts {
  _id: string;
  image: IImage;
  title: string;
  slug: {
    current: string;
    _item: string;
  };
  pType: string;
  price: number;
  description: string;
  category: {
    name: string;
  };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data: IProducts[] = await singleProductData(params.slug);

  const { image, title, description, pType } = data[0];

  return (
    <Wrapper>
      <section className="flex flex-col">
        <div className="md:flex justify-center mt-12 gap-x-6">
          {/* Image */}
          <div>
            <Image
              src={urlForImage(image).url()}
              alt="pic"
              width={500}
              height={400}
            />
          </div>
          {/* Title */}
          <div className="mt-10">
            <h1 className="text-gray-800 text-3xl font-semibold">{title}</h1>{" "}
            <h4 className="text-gray-400 font-bold">{pType}</h4>
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
            <div className="grid md:grid-cols-2 w-[700px]">
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
            <div className="grid md:grid-cols-2 w-[700px] mt-4">
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
