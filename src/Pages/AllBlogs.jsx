import { Button } from "flowbite-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AllBlogsCart from "./AllBlogsCart";
const AllBlogs = () => {
  const allBlogPost = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/all-post");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: blogPost } = useQuery({
    queryKey: ["blogPost"],
    queryFn: allBlogPost,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  console.log(blogPost.data.category);
  return (
    <div>
      <div>
        <div>
          {blogPost.data.map((cata) => (
            <Button.Group key={cata._id}>
              <Button color="gray">{cata.category}</Button>
            </Button.Group>
          ))}
        </div>

        <div className="mx-20 grid grid-cols-3 gap-5">
          {blogPost.data.map((post) => (
            <div key={post._id}>
              <div>
                <AllBlogsCart post={post}></AllBlogsCart>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
