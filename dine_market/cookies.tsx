"use server";

import { cookies } from "next/headers";
// getting the user Id stored in user's browser
const user_id = () => {
  const user_id = async () => {
    const user = (await cookies().get("user_id")?.value) as string;
    console.log("Cookie ID", user);
    return user;
  };

  return user_id();
};

export default user_id;
