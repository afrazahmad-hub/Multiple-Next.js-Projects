// import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { todoTable, Todo, NewTodo, db } from "@/lib/Drizzle";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  try {
    // For Drizzle
    await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255));`;
    const res = await db.select().from(todoTable);
    console.log("Response", res);

    // get data from todo tabble
    // const res = await client.sql`SELECT * FROM Todos`;

    // we can use any array method
    // console.log(res.rows.find((items) => items.id == 1));

    return NextResponse.json({
      data: res,
    });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "Error accored....!" });
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  try {
    if (req.Task) {
      // Drizzle query for enter data
      const res = await db
        .insert(todoTable)
        .values({
          task: req.Task,
        })
        .returning(); // for specifying the output entered.

      console.log("Respone...", res);
      return NextResponse.json({ message: "Task successfully inserted" });
    } else {
      throw new Error("Error...Field required");
    }
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
