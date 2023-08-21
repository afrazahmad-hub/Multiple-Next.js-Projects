import { NextRequest, NextResponse } from "next/server";
import { db, userPage } from "@/lib/drizzle";

export const GET = async (request: NextRequest) => {
  try {
    const data = await db.select().from(userPage);
    return NextResponse.json({ Data: data });
  } catch (error) {
    console.log("ERROR", error);
    NextResponse.json({ message: "Something went wrong", error });
  }
};

export const POST = async (request: NextRequest) => {
  const response = await request.json();

  try {
    const data = await db
      .insert(userPage)
      .values({
        username: response.username,
        email: response.email,
        password: response.password,
      })
      .returning();
    return NextResponse.json({ data });
  } catch (error) {
    console.log("ERROR", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
