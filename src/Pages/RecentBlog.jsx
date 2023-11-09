import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { toast } from "react-hot-toast";
import useAuth from "./../Hooks/useAuth";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";

const RecentBlog = () => {
  const { user } = useAuth();
  const allBlogPost = async () => {
    try {
      const res = await axios.get(
        "https://server-web-blog.vercel.app/api/v1/all-post"
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: recentPost } = useQuery({
    queryKey: ["recentPost"],
    queryFn: allBlogPost,
  });
  console.log(recentPost);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }
  const sortData = [...recentPost.data]
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 6);

  const recentWhite = (data) => {
    fetch("https://server-web-blog.vercel.app/api/v1/crate-wishList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Added your wishlist successfully");
      });
  };

  return (
    <div className="mx-5">
      <h1 className="text-3xl text-center font-bold my-10 text-[#0e7490]">
        Recent Blog Post
      </h1>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  gap-5 justify-center ">
        {sortData.map((data) => (
          <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} key={data?._id}>
            <Card
            
            className="w-full "
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={data?.imgUrl}>
            <div className=" flex justify-between">
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {data?.timestamp}
              </span>
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {data?.category}
              </span>
            </div>
            <a href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data?.title?.slice(0, 45)}
              </h5>
            </a>

            <span className=" text-gray-900 dark:text-white">
              {data?.shortDes?.slice(0, 200)}
            </span>
            <div className="flex items-center justify-between">
              <Link
                to={`/blog-details/${data._id}`}
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                Details
              </Link>
              <div>
                {user ? (
                  <button
                    onClick={() => recentWhite({ data })}
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    Wishlist
                  </button>
                ) : (
                  <Button disabled>Add Wishlist</Button>
                )}
              </div>
            </div>
          </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
