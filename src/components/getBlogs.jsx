const getBlogs = async () => {
  try {
    const res = await fetch("https://one-topaz.vercel.app/api/blogs", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch blogs");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default getBlogs;
