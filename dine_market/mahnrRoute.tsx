import { NextRequest, NextResponse } from "next/server";
import { db } from "@/sanity/lib/drizzle";
import { cartTable } from "@/sanity/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Fetch Failed!" });
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const id = uuid();
  const setCookies = cookies();
  const user_id = setCookies.get("user_id")?.value;

  if (!user_id) {
    setCookies.set("user_id", id);
    console.log(id);
  }

  try {
    const query = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: req.quantity,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    console.log("inserted data ", JSON.stringify(query));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
