import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Comments from "./Comments";
const BlogDetails = () => {
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
            <div className="flex justify-between my-3">
              <span className="text-gray-700 font-semibold">
                Posted: {postDetails.data.timestamp}
              </span>
              <span className="bg-green-400 px-2 text-gray-700 font-semibold rounded-lg">
                Category: {postDetails.data.category}
              </span>
            </div>
            <div>
              <h1 className="text-3xl text-center font-bold my-3">
                {postDetails.data.title}
              </h1>
              <p className="mb-3 text-xl font-semibold">
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
