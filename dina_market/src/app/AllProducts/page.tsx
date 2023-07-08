import { Image as IImage } from "sanity";

//internal import for female products from sanity
import { client } from "@/lib/sanityClient";
import ProductCart from "@/components/ProductCart";

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

interface Products {
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

const AllProducts = async () => {
  const data: Products[] = await fetchAllData();

  return (
    <section className="flex justify-evenly flex-wrap mt-14 py-10">
      {/* Data from senity */}
      {data.length > 0 ? (
        data.map((items) => <ProductCart key={items._id} items={items} />)
      ) : (
        <p>No items yet</p>
      )}
    </section>
  );
};

export default AllProducts;
