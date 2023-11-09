import React from "react";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";
const CommentDetails = ({ id }) => {
  const allComments = async () => {
    try {
      const res = await axios.get("https://server-web-blog.vercel.app/api/v1/all-comment");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: comments } = useQuery({
    queryKey: ["comments"],
    queryFn: allComments,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }
  console.log(comments);
  const filteredComments = comments.data.filter((comment) => comment.id === id);

  if (filteredComments.length === 0) {
    return (
      <div>
        <h1>No comments found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl mb-3 font-bold text-center">Recent Comments</h1>
      <div>
        {filteredComments.map((comment) => (
          <div key={comment._id}>
            <div className="border mt-2 rounded-lg ">
              <div className=" rounded-lg">
                <div className="flex gap-5 border  items-center">
                  <img
                    className="h-10 rounded-full"
                    src={comment.CommentUserPhoto}
                    alt=""
                  />
                  <h1 className="text-xl font-bold ">
                    {comment.CommentUserName}
                  </h1>
                </div>
                <div className="">
                  <h1 className="p-2 text-sm">{comment.commentTitle}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentDetails;
