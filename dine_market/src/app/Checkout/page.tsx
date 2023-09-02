// "use client";

// import user_id from "../../../cookies";
// import { useEffect, useState } from "react";
// import { client } from "@/lib/sanityClient";

// const getProductData = async (product_id: string) => {
//   const sanityResponse = await client.fetch(
//     `*[_type=="products" && _id == "${product_id}"]`
//   );

//   console.log("Sanity Data", sanityResponse);
//   return sanityResponse[0];
// };

// const page = async () => {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   // const sanityData = await getProductData(data);

//   // const result = await getData();

//   // const fetchData = async () => {
//   //   const userID = user_ID();
//   //   const res = await fetch(`/api/cart?user_id=${userID}`, {
//   //     method: "GET",
//   //     cache: "no-store",
//   //   });
//   //   const data = await res.json();
//   //   console.log("Uswer IDD", data);
//   //   return data;
//   // };
//   // fetchData();

//   // useEffect(() => {
//   //   const getData = async () => {
//   //     const user_ID = await user_id();
//   //     console.log("USER ID Cookies", user_ID);
//   //     try {
//   //       // fetching the GET api, while passing user_ID as an argument
//   //       const res = await fetch(`/api/cart?user_id=${user_ID}`, {
//   //         method: "GET",
//   //         cache: "no-store",
//   //       });

//   //       if (res.ok) {
//   //         const response = await res.json();
//   //         // specific user data from the database
//   //         const data1 = await response.data;

//   //         // Handle the case when data1 has only one item
//   //         if (data1.length === 1) {
//   //           const productData = await getProductData(data1[0].product_id);
//   //           setData([{ ...data1[0], productData }]);
//   //           console.log("Updated Data", data);
//   //         } else {
//   //           const updatedData = await Promise.all(
//   //             data1.map(async (item: any) => {
//   //               const pID = item.product_id;
//   //               const productData = await getProductData(pID);
//   //               return { ...item, productData };
//   //             })
//   //           );
//   //           setData(updatedData);
//   //           setLoading(false);
//   //         }
//   //       } else {
//   //         console.log("data not found");
//   //       }
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   };

//   //   getData();
//   // }, []);

//   // useEffect to log data whenever it changes

//   // useEffect(() => {}, [data]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const user_ID = await user_id();
//         console.log("USER ID Cookies", user_ID);
//         // fetching the GET api, while passing user_ID as argument
//         const res = await fetch(`/api/cart?user_id=${user_ID}`, {
//           method: "GET",
//           cache: "no-store",
//         });

//         if (res.ok) {
//           const response = await res.json();
//           // specific user data from database
//           const data1 = response.data;
//           // console.log("Response Data: ", data1);

//           const updatedData = await Promise.all(
//             data1.map(async (item: any) => {
//               const pID = item.product_id;
//               // console.log("Product ID :" + pID);
//               // console.log("Data Product", item.productData);
//               // if (pID.includes(pID)) {
//               if (pID === item.product_id) {
//                 const productData = await getProductData(pID);

//                 console.log("Product Data :" + productData);

//                 return { ...item, productData };
//               } else if (data1.length === 1) {
//                 const productData = await getProductData(data1[0].product_id);

//                 // console.log("Product Data 2", productData);
//                 return { ...item, productData };
//               }
//             })
//           );

//           setData(updatedData);
//           setLoading(false);
//         } else {
//           console.log("data not found");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getData();
//   }, []);

//   // console.log("Response: ", data);

//   return (
//     <div>
//       <h1 className="text-4xl font-bold flex justify-center mt-10 text-red-500">
//         Shopping Cart
//       </h1>
//       <p>Api Data</p>
//       <div>
//         {loading ? (
//           <p>Loading page data</p>
//         ) : data.length > 0 ? (
//           data.map((item: any) => (
//             <div key={item.id}>
//               <p>{item.productData.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No data available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";

import React, { useEffect, useState } from "react";
import user_id from "../../../cookies";
import { client } from "@/lib/sanityClient";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";

const getProductData = async (product_id: string) => {
  const sanityResponse = await client.fetch(
    `*[_type=="products" && _id == "${product_id}"]`
  );

  // console.log("Sanity DAta", sanityResponse);
  return sanityResponse[0];
};

const Page = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const user_ID = await user_id();
        const res = await fetch(`/api/cart?user_id=${user_ID}`, {
          method: "GET",
          cache: "no-store",
        });

        if (res.ok) {
          const response = await res.json();
          const data1 = response.data;

          const updatedData = await Promise.all(
            data1.map(async (item: any) => {
              const productData = await getProductData(item.product_id);
              return { ...item, productData };
            })
          );

          setData(updatedData);
          setLoading(false); // Set loading to false when the data is fetched and processed
        } else {
          console.log("Error: Data not found");
          setLoading(false); // Set loading to false if there was an error fetching data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there was an error fetching data
      }
    };

    getData();
  }, []);

  return (
    <div className="p-16">
      <h1 className="text-4xl font-bold flex mt-10">Shopping Cart</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <div className="mt-6">
          {data.map((item: any) => (
            <div key={item._id} className="flex justify-between">
              <div className="flex space-x-8 mt-8">
                <Image
                  src={urlForImage(item.productData.image).url()}
                  width={180}
                  height={200}
                  alt="pic"
                  className="max-h-[200px] max-w-[250w] rounded-lg"
                />

                <div className="flex flex-col space-y-4">
                  <h2 className="text-2xl">{item.productData.title} </h2>

                  <h3 className="font-bold text-gray-500">
                    {item.productData.pType}{" "}
                  </h3>
                  <h3 className="text-lg font-bold text-gray-800">
                    Delivery Estimation
                  </h3>
                  <p className="text-lg text-yellow-500 font-bold">
                    5 Working Days
                  </p>

                  <p className="font-bold text-lg">
                    $ {item.productData.price}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-evenly">
                <div className="flex justify-center items-center cursor-pointer bg-slate-200 h-11 w-11 rounded-full ">
                  <RiDeleteBinLine className="text-2xl font-bold " />
                </div>

                <div className="flex items-center gap-x-3">
                  <button className="flex justify-center items-center hover:shadow-xl cursor-pointer h-11 w-11 rounded-full text-3xl bg-slate-200">
                    -
                  </button>
                  <h2 className="text-lg font-semibold">{item.quantity} </h2>
                  <button className="flex justify-center hover:shadow-xl cursor-pointer h-11 w-11 rounded-full text-3xl bg-slate-200">
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-evenly">
                <h2 className="font-bold text-xl ">Order Summery</h2>
                <div className="flex gap-x-2 text-lg">
                  <p>Quantity:</p>
                  <span>{item.quantity} Product</span>
                </div>
                <div className="flex gap-x-2 text-lg">
                  <p>Sub Total: </p>
                  <span>$ 200</span>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white h-10 shrink-0 p-2 max-w-3xl"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col justify-center items-center">
          <BsBag className="text-6xl font-bold " />
          <p className="text-3xl font-bold ">Your shopping bag is empty</p>
        </div>
      )}
    </div>
  );
};

export default Page;
