import axios from "axios";
import { Card, Label, Button, Textarea } from "flowbite-react";
import useAuth from "./../Hooks/useAuth";
import { toast } from "react-hot-toast";
import CommentDetails from "./CommentDetails";
import { useQuery } from "@tanstack/react-query";
const Comments = ({ id }) => {
  const { user } = useAuth();
  console.log(user);
  const handleComment = (e) => {
    e.preventDefault();
    const commentTitle = e.target.commentTitle.value;
    const CommentUserEmail = user.email;
    const CommentUserName = user.displayName;
    const CommentUserPhoto = user.photoURL;
    console.log("current user", CommentUserEmail);
    const inputComment = {
      id,
      commentTitle,
      CommentUserEmail,
      CommentUserName,
      CommentUserPhoto,
    };
    // console.log(inputComment);
    fetch("https://server-web-blog.vercel.app/api/v1/create-comment", {
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
  const postDetails = async () => {
    try {
      const res = await axios.get("https://server-web-blog.vercel.app/api/v1/all-post");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: allPost } = useQuery({
    queryKey: ["allPost"],
    queryFn: postDetails,
  });
  

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }
  const filteredComments = allPost.data.find(
    (comment) => comment?.UserEmail == user?.email
  );

  return (
    <div>
      <div>
        <Card className="w-full md:mx-2 border-none p-2">
          <h1 className="text-xl font-bold text-center text-[#2f2e41]">
            Review & Comment
          </h1>

          {user?.email ? (
            filteredComments ? (
              <form onSubmit={handleComment} className="">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Comment is Disable" />
                </div>
                <Textarea
                  disabled
                  id="comment"
                  placeholder="Own post not allowed to be commented"
                  name="commentTitle"
                  required
                  rows={3}
                />
                <div className="mt-3">
                  <Button disabled type="submit">Comment Now </Button>
                </div>
              </form>
            ) : (
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
            )
          ) : null}
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
