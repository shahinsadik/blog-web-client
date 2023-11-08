
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./../Hooks/useAuth";
import WishListCart from './WishListCart';

const Wishlist = () => {
  const { user } = useAuth();
  const wishList = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/all-wishList");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: wish } = useQuery({
    queryKey: ["wish"],
    queryFn: wishList,
  });

  console.log("line 20", wish?.data);
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">Wish List</h1>
      {wish?.data.map((list) => (
        <div key={list._id}>
          {list?.data?.UserEmail === user?.email ? (
            <WishListCart  postId={list._id} list={list?.data}></WishListCart>
          ) : (
            <div className="flex justify-center items-center min-h-screen">
              <h1 className="text-5xl font-extrabold ">No white list Found</h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
