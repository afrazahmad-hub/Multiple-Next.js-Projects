import React from "react";
import { cookies } from "next/dist/client/components/headers";

const fetchData = async () => {
  const id = cookies().get("user_id")?.value as string;
  try {
    const res = await fetch(`http://localhost:3000/api/cart?user_id=${id}`);
    const data = await res.json(); // Parse the response as JSON
    return data; // Return the parsed data
  } catch (error) {
    console.log(error);
  }
};

const AddCart = async () => {
  const data = await fetchData();

  console.log("Data...........", data);

  return <div>AddCart</div>;
};

export default AddCart;
