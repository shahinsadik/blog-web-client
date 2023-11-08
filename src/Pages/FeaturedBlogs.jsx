import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";

const FeaturedBlogs = () => {
  const FeaturedBlogPost = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/all-post/");
      
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

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="my-10">
      <div className="mx-20 ">
        {featuredPost?.map((post) => (
          <div key={post.id}>
            <Table className="border mb-2" hoverable>
              
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
                  <Table.Cell> <img className="h-20" src={post.imgUrl} alt="" /> </Table.Cell>
                  <Table.Cell className="text-xl font-bold">{post?.title.slice(0,40)}</Table.Cell>
                  <Table.Cell>{post?.UserEmail}</Table.Cell>
                  <Table.Cell>{post.timestamp}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
