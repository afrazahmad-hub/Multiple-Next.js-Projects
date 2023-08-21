import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq, sql } from "drizzle-orm";

//------- GET
export const GET = async (request: Request) => {
  //---- Get user_id from user's browser cookies
  const url = new URL(request.url);
  const urlParams = new URLSearchParams(url.search);
  const user_id = urlParams.get("user_id");

  //---- Get product_ID of a specific user ID (taken from cookies)
  if (user_id !== null) {
    const res = await db
      .select({
        product_id: sql<string>`product_id`,
      })
      .from(cartTable)
      .where(eq(cartTable.user_id, user_id));
    return NextResponse.json({ res });
  } else {
    return NextResponse.json({ message: "AWW ERROR !!" });
  }

  //----- Get all data of a specific user ID (taken from cookies)
  // if (user_id !== null) {
  //     const res = await db.select().from(cartTable).where(eq(cartTable.user_id, user_id));
  //     return NextResponse.json({res});
  // } else {
  //     return NextResponse.json({message: "AWW ERROR !!"});
  // }

  //----- Get only product IDs from the table
  // const res = await db.select({
  //     'product_id' : sql<string> `product_id`
  // }).from(cartTable);
  // return NextResponse.json({res});
};

//------- POST

export const POST = async (request: Request) => {
  const req = await request.json();

  //----- To save user ID in user's browser cookies

  const uid = uuid(); // Generate random string that we use as ID
  const setCookies = cookies(); // Create new cookie object
  const userId = cookies().get("user_id"); // Get userID that is saved in the browser

  if (!userId) {
    // if it doesn't exist, create one
    setCookies.set("user_id", uid); // Set ID in the cookies of user browser
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        // Set data in database
        product_id: req.product_id,
        quantity: 1,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    console.log("result ", res);

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "ERROR !!" });
  }
};
