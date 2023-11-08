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

  const handleCategory = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.searchInput.value;
    setSearchQuery(search);
  };

  const filteredBlogPosts = blogPost.data.filter((post) => {
    console.log(post.title);
  
    if (selectedCategory !== "All" && post.category !== selectedCategory) {
      return false;
    }

  
    if (searchQuery && post.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
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
      <div>
        <div className="flex gap-5">
          <div>
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
                  <Button color="success" type="submit">Search</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-20 grid grid-cols-3 gap-5">
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
