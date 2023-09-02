"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Image as IImage } from "sanity";

// import client for sanity client
import { client } from "@/lib/sanityClient";

// internal imports
import ProductCard from "@/components/ProductCard";

// interface for product data type
interface IProduct {
  _id: string;
  image: IImage;
  title: string;
  slug: {
    current: string;
    _item: string;
  };
  description: string;
  pType: string;
  price: number;
  category: {
    name: string;
  };
}

// function for fatching data from sanity client
const fetchProductData = async () => {
  const res =
    await client.fetch(`*[_type=="products" && category->name == "Male"]{
    _id,
      image,
       title,
       slug,
      description,
      pType,
      price,
      category ->{
        name
      }
  }`);
  return res;
};

//  Main function
const Men = async () => {
  // const [products, setProducts] = useState<IProduct[]>([]);
  // const [isLoading, setLoading] = useState<boolean>(false);

  // calling the fetch data function
  const data: IProduct[] = await fetchProductData();
  console.log("Dataa: ", data);

  return (
    <section className="flex justify-evenly flex-wrap mt-14 py-10">
      {/* Data from senity */}
      {data.map((items) => (
        <ProductCard key={items._id} items={items} />
      ))}
    </section>
  );
};

export default Men;

// {
//   {isLoading ? (
//     <p>Loading...</p>
//   ) : products.length > 0 ? (
//     <div>
//       {data.map((items) => (
//         <ProductCard key={items._id} items={items} />
//       ))}
//       {/* {products.map((items: any) => (
//         <ProductCard key={items._id} items={items} />
//       ))} */}
//     </div>
//   ) : (
//     "No any product available yet."
//   )}
// }
