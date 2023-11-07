import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {Link } from "react-router-dom";
import { Card } from "flowbite-react";
// import { useState } from 'react';
const RecentBlog = () => {
  // const [recentPosts,setRecentPosts ]= useState()
  const allBlogPost = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/all-post");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: recentPost } = useQuery({
    queryKey: ["recentPost"],
    queryFn: allBlogPost,
  });

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
  console.log(sortData);
  return (
    <div>
        <h2>Home section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortData.map((data) => 
          <Card key={data._id}
            className="max-w-sm my-10"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={data.imgUrl}>
            <div className=" flex justify-between">
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {data.timestamp}
              </span>
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {data.category}
              </span>
            </div>
            <a href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.title.slice(0, 45)}
              </h5>
            </a>

            <span className=" text-gray-900 dark:text-white">
              {data.shortDes.slice(0, 200)}
            </span>
            <div className="flex items-center justify-between">
              <Link
                to={`/blog-details/${data._id}`}
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                Details
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                Wishlist
              </Link>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RecentBlog;
