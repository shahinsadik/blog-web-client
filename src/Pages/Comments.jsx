import React from "react";
import { Card, Label, Button, Textarea } from "flowbite-react";
import useAuth from "./../Hooks/useAuth";
import { toast } from 'react-hot-toast';
import CommentDetails from './CommentDetails';
const Comments = ({ id }) => {
  const { user } = useAuth();
  const handleComment = (e) => {
    e.preventDefault();
    const commentTitle = e.target.commentTitle.value;
    const CommentUserEmail = user.email;
    const CommentUserName = user.displayName;
    const CommentUserPhoto = user.photoURL;

    const inputComment = {
      id,
      commentTitle,
      CommentUserEmail,
      CommentUserName,
      CommentUserPhoto,
    };
    console.log(inputComment);
    fetch("http://localhost:5000/api/v1/create-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputComment),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Car added Successfully");
        e.target.reset("");
      });
  };
  return (
    <div>
      <div>
        <Card className="max-w-lg mx-2 border-none p-2">
          <h1 className="text-xl font-bold text-center text-[#2f2e41]">
            Review & Comment
          </h1>
          <form onSubmit={handleComment} className="">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Write Your Comment" />
            </div>
            <Textarea
              id="comment"
              placeholder="Write Your Comment"
              name="commentTitle"
              required
              rows={3}
            />
            <div className="mt-3">
              <Button type="submit">Comment Now </Button>
            </div>
          </form>
          <div className="flex items-center justify-center"></div>
      <div>
        <CommentDetails id={id}></CommentDetails>
      </div>
        </Card>
      </div>
    </div>
  );
};

export default Comments;
