"use client";

import Image from "next/image";

//internal import for female products from sanity
import { urlForImage } from "../../sanity/lib/image";
import { FC } from "react";
import Link from "next/link";

const ProductCard: FC<{ items: any }> = ({ items }) => {
  const handleAddCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: items._id,
      }),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div>
      <Link href={`/${items.slug.current}`}>
        {items.image && (
          <Image
            src={urlForImage(items.image).url()}
            alt="pic"
            width={200}
            height={150}
            className="max-w-[200px] max-h-[250px]"
          />
        )}
        <h1>{items.title}</h1>
        <p>{items.pType}</p>
        <h3>$ {items.price}</h3>
        <h3>{items.category.name}</h3>
        <p>{items.slug.current} </p>
      </Link>
      <button
        onClick={handleAddCart}
        className="border rounded-lg py-2 px-6 bg-blue-600 text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
