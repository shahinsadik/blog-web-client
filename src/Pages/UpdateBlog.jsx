import React from 'react';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

import { toast } from "react-hot-toast";
import useAuth from "./../Hooks/useAuth";
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const {id} = useParams()
    console.log(id);
    const { user } = useAuth();

  const handleBlogUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const imgUrl = form.imgUrl.value;
    const category = form.category.value;
    const shortDes = form.shortDes.value;
    const longDes = form.longDes.value;
    
    
    const updatePost = {
      title,
      imgUrl,
      category,
      shortDes,
      longDes,
      
    }
    fetch(`http://localhost:5000/api/v1/all-post/${singleData._id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatePost)
        })
        .then(response => response.json())
        .then(data => {
          console.log("recent data",data)})
}
const updateData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/all-post");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: updatePostData } = useQuery({
    queryKey: ["updatePostData"],
    queryFn: updateData,
  });
  console.log(updatePostData);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }
  const filteredUpdate = updatePostData.data.find(
    (comment) => comment?._id == id
  );
  console.log(filteredUpdate.title);
    return (
        <div>
             <div className="lg:my-10 lg:mx-20 mx-5 my-5 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center justify-between">
        <div className="lg:col-span-3">
          <form onSubmit={handleBlogUpdate} className="flex flex-col gap-4">
            <div className="flex gap-5">
              <div className="w-full">
                <div className="mb-2 block ">
                  <Label htmlFor="title" value="Title" />
                </div>
                <TextInput
                defaultValue={updatePostData?.data?.title}
                  name="title"
                  type="text"
                  
                  
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="imgUrl" value="Post Photo Url" />
                </div>
                <TextInput
                defaultValue={handleBlogUpdate?.imgUrl}
                  id=""
                  name="imgUrl"
                  type="text"
                 
                  
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Select your Category" />
                </div>
                <Select name="category" id="countries" required>
                  <option>Gadgets</option>
                  <option>Tech</option>
                  <option>Hacks</option>
                  <option>Hacks</option>
                  <option>ChatGpt</option>
                  <option>Devops</option>
                </Select>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Short Description" />
              </div>
              <Textarea
              defaultValue={handleBlogUpdate?.shortDes}
                id="comment"
                placeholder="Short Description"
                name="shortDes"
                required
                rows={4}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Long Description" />
              </div>
              <Textarea
              defaultValue={handleBlogUpdate?.longDes}
                id="comment"
                placeholder="Long description"
                name="longDes"
                required
                rows={4}
              />
            </div>

            <Button type="submit">Update Post</Button>
          </form>
        </div>
        <div className="lg:col-span-1 bg-[#0e7490] p-10">
          <h1 className="text-3xl font-bold text-center">Write your post</h1>
          <p className=" mt-5 text-justify">
            In this example, we have a BlogPost component that displays the
            title of the blog post, an image with a caption, and leaves space
            for the rest of the blog post content. You can add the actual
            content of your blog post after the caption, such as the
            ingredients, instructions, and any other details you want to include
            in your blog post.
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default UpdateBlog;