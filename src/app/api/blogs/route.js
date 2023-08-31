import connect from "@/libs/db";
import Blogs from "@/models/blogs";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();
  const blogs = await Blogs.find();
  return NextResponse.json(blogs);
}
