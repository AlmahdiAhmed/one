import Image from "next/image";
import getBlogs from "./getBlogs";

const Blogs = async () => {
  const blogs = await getBlogs();
  return (
    <div>
      {blogs.map((blog) => {
        const { _id, title, img } = blog;
        return (
          <div key={_id}>
            <div>
              <Image src={img} width={200} height={200} alt="img" />
            </div>
            <div>
              <p>{title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Blogs;
