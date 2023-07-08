import { client } from "@/lib/sanityClient";

import ProductCart from "@/components/ProductCart";
import { Image as IImage } from "sanity";

const fetchAllData = async () => {
  try {
    const res = await client.fetch(`*[_type=="products"]{
      _id,
      image,
      title,
      description,
      pType,
      price,
      category->{
          name
        }
    }`);

    return res;
  } catch (error) {
    console.log("Error", error);
  }
};
// const getProductasByCategory = async (category: string) => {
//   const products = await fetchAllData();
//   console.log("Result..", products);

//   // const result = products[0].category.name == category;
//   // const result = products.find(
//   //   (product: any) => product.category.name == category
//   // );
//   // console.log("Result Product..", result);
//   // return result;
// };

interface IProducts {
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

export default async function Page({ params }: { params: { slug: string } }) {
  const data: IProducts[] = await fetchAllData();
  console.log("object,,,,", data[0].category);

  // const data: Products[] = await getProductasByCategory(params.slug);
  return (
    <div className="grid md:grid-cols-[repeat(3,auto)] space-y-4 mt-10 ">
      {data.map((items: any) => (
        <ProductCart key={items._id} items={items} />
      ))}
    </div>
  );
}
