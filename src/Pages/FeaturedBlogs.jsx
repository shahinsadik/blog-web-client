import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";

const FeaturedBlogs = () => {
  const FeaturedBlogPost = async () => {
    try {
      const res = await axios.get(
        "https://server-web-blog.vercel.app/api/v1/all-post/"
      );

      const sortedData = res.data.sort(
        (a, b) => b.longDes.length - a.longDes.length
      );

      return sortedData.slice(0, 10);
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: featuredPost } = useQuery({
    queryKey: ["featuredPost"],
    queryFn: FeaturedBlogPost,
  });
  console.log(featuredPost);
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="my-10">
      <h1 className="text-3xl text-center font-bold my-10 text-[#0e7490]">Our Featured Blog</h1>
  <div className="lg:mx-40">
    <Table>
      <Table.Head className="">
        <Table.HeadCell>Serial No</Table.HeadCell>
        <Table.HeadCell>Blog Title</Table.HeadCell>
        <Table.HeadCell>Blog Owner</Table.HeadCell>
        <Table.HeadCell >Photo</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {featuredPost?.map((post, index) => (
          <Table.Row
            key={post.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {post?.title?.slice(0, 40)}
            </Table.Cell>
            
            <Table.Cell>{post?.UserName}</Table.Cell>
            <Table.Cell > <img className="rounded-full h-12" src={post.UserPhoto} alt="" /> </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
</div>
  );
};

export default FeaturedBlogs;
