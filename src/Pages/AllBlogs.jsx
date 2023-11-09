import { useState } from "react";
import { Select, Button, TextInput } from "flowbite-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AllBlogsCart from "./AllBlogsCart";

const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allBlogPost = async () => {
    try {
      const res = await axios.get("https://server-web-blog.vercel.app/api/v1/all-post");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: blogPost } = useQuery({
    queryKey: ["blogPost"],
    queryFn: allBlogPost,
  });

  const handleCategory = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.searchInput.value;
    setSearchQuery(search);
  };

  const filteredBlogPosts = blogPost?.data?.filter((post) => {
    if (selectedCategory !== "All" && post?.category !== selectedCategory) {
      return false;
    }

    if (
      searchQuery &&
      !post.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
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
      
      <div className="">
        <div className="bg-[#111827]">
          <div className="flex gap-5 lg:justify-between items-center mx-auto p-2 lg:w-[1000px]">
            <div className="flex justify-center items-center gap-3"><h1 className="text-xl font-semibold  text-white">Categories</h1>
              <Select onChange={handleCategory} name="category" id="categories"> 
              
                <option value="All">All</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Tech">Tech</option>
                <option value="Hacks">Hacks</option>
                <option value="ChatGpt">ChatGpt</option>
                <option value="Devops">Devops</option>
              </Select>
            </div>
            <div>
              <div>
                <form onSubmit={handleSearch}>
                  <div className="w-full flex gap-2">
                    <TextInput
                      id="searchInput"
                      name="searchInput"
                      placeholder="Search now"
                      required
                    />
                    <Button className="bg-[#0e7490]" type="submit">
                      Search
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
<div><h1 className="text-5xl text-center font-bold mt-5 ">All Post</h1></div>
        <div>
          <div className="mx-20 grid grid-cols-1 lg:grid-cols-3  gap-5">
            {filteredBlogPosts.map((post) => (
              <div key={post._id}>
                <div>
                  <AllBlogsCart data={post}></AllBlogsCart>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
