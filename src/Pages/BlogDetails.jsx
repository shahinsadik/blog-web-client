import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Button } from 'flowbite-react';
import Comments from "./Comments";
import useAuth from './../Hooks/useAuth';
const BlogDetails = () => {
  const {user} = useAuth()
  const { id } = useParams();
  const singlePostDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/all-post/${id}`
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: postDetails } = useQuery({
    queryKey: ["postDetails"],
    queryFn: singlePostDetails,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-4 m-5 gap-5 ">
      <div className=" lg:col-span-3 ">
        <div className="border-2 ">
          <h1 className="text-5xl text-center font-bold my-2">
            {postDetails.data.title}
          </h1>
          <div>
            <img src={postDetails.data.imgUrl} alt="" />
          </div>
          <div className="mx-10">
            <div className="flex justify-between items-center my-3">
              <div>
                <span className="text-gray-700 font-semibold">
                  Posted: {postDetails.data.timestamp}
                </span>
                <div className="mt-3">
                  <span className="bg-green-400 p-2  text-gray-700 font-semibold rounded-lg">
                    {postDetails.data.category}
                  </span>
                </div>
              </div>
              <div>
                {
                  postDetails?.data?.UserEmail === user?.email ? <div><Link
                  to={`/blog-details/update/${postDetails.data._id}`}
                  className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                  Update Details
                </Link></div>
                  :
                  <div className="disabled"><Button disabled>Update Details</Button>;</div>
                }
              </div>
            </div>
            <div>
              <h1 className="text-3xl text-center font-bold my-3">
                {postDetails.data.title}
              </h1>
              <p className="mb-3 text-xl font-semibold text-justify">
                {postDetails.data.shortDes}
              </p>
              <p className="mb-3 text-sm text-justify text-gray-600 font-semibold">
                {postDetails.data.longDes}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <div>
          <Comments id={id}></Comments>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
