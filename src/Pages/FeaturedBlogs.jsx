import React from 'react';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const FeaturedBlogs = () => {
    const FeaturedBlogPost = async () => {
        try {
          const res = await axios.get(
            "http://localhost:5000/api/v1/all-post/"
          );
          return res;
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
        <div>
            <div>
                {
                   featuredPost?.data?.map(post=>console.log(post?.longDes?.length)) 
                }
            </div>

        </div>
    );
};

export default FeaturedBlogs;