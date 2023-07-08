import Image from "next/image";
import { Image as IImage } from "sanity";

// import client for sanity client
import { client } from "@/lib/sanityClient";

// internal imports
import ProductCart from "@/components/ProductCart";

// function for fatching data from sanity client
export const fetchProductData = async () => {
  const res =
    await client.fetch(`*[_type=="products" && category->name == "Female"]{
    _id,
      image,
       title,
      description,
      pType,
      price,
      category ->{
        name
      }
  }`);
  return res;
};

// interface for product data type
interface IProduct {
  _id: string;
  image: IImage;
  title: string;
  pType: string;
  price: number;
  description: string;
  category: {
    name: string;
  };
}

//  Main function
const Women = async () => {
  // calling the fetch data function
  const data: IProduct[] = await fetchProductData();
  console.log("Dataa: ", data);

  return (
    <section className="flex justify-evenly flex-wrap mt-14 py-10">
      {/* Data from senity */}

      {data.map((items) => (
        <ProductCart key={items._id} items={items} />
      ))}
    </section>
  );
};

export default Women;
