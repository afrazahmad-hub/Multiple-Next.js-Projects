import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";

const Products = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="mt-16">
      {/* // <Slider{ ...settings}>
      // </Slider> */}
      <div className="flex flex-col items-center">
        <h6 className="text-blue-700 font-bold">PRODUCTS</h6>
        <h1 className="text-3xl font-bold">Check What We Have</h1>
      </div>
      <div className="mt-6">
        <div className="flex overflow-x-auto">
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end bg-gray-300 w-[22rem] h-96 ">
              <Image
                src={"/products/product1.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end w-[22rem] h-96 ">
              <Image
                src={"/products/product2.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end bg-gray-300 w-[22rem] h-96 ">
              <Image
                src={"/products/product3.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end bg-gray-300 w-[22rem] h-96 ">
              <Image
                src={"/products/product4.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end bg-gray-300 w-[22rem] h-96 ">
              <Image
                src={"/products/product5.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end bg-gray-300 w-[22rem] h-96 ">
              <Image
                src={"/products/product7.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end bg-gray-300 w-[22rem] h-96 ">
              <Image
                src={"/products/product8.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end bg-gray-300 w-[22rem] h-96 ">
              <Image
                src={"/products/product9.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end bg-gray-300 w-[22rem] h-96 ">
              <Image
                src={"/products/product10.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end bg-gray-300 w-[22rem] h-96 ">
              <Image
                src={"/products/product11.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$195</h2>
            </div>
          </div>
          <div className="transform hover:scale-110 transition-transform duration-300">
            <div className="flex items-end w-[22rem] h-96 ">
              <Image
                src={"/products/product12.jpeg"}
                alt="girl product1"
                height={300}
                width={450}
              />
            </div>
            <div className="text-lg font-semibold">
              <h3>Brushed Raglan Swetshirt</h3>
              <h2>$1965</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
