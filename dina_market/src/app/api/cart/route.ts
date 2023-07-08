import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/Drizzle";

import { v4 as uuid } from "uuid";
import { cookies } from "next/dist/client/components/headers";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "Something went wrong" });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();

  // generate a random id
  const uid = uuid();

  // storing in cookies
  const userID = cookies().get("user_id");
  if (!userID) {
    cookies().set("user_id", uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        user_id: cookies().get("user_id")?.value as string,
        product_id: req.product_id,
        quantity: 1,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "Something went wrong" });
  }
};
