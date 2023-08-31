import mongoose from "mongoose";
import { Schema } from "mongoose";
const blogs = new Schema(
  {
    title: String,
    content: String,
    category: String,
    featured: String,
    img: String,
  },
  { timestamps: true }
);
const Blogs = mongoose.model("Blogs", blogs);
export default Blogs;
