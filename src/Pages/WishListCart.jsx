// import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import useAuth from './../Hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const WishListCart = ({list, postId}) => {
    // const [myCart, setMyCart] = useState(list);
    const {user} = useAuth()


    const handleRemove = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:5000/api/v1/all-wishList/${id}`);
          // const remaining = wish?.filter((book) => book._id !== id);
          // (remaining);
          // return res;
          window.location.reload()
          toast.success("Deleted has been successfully")
        } catch (error) {
          console.log(error);
        }
          }
          

    return (
        <div>
            <div className="lg:flex  lg:p-0 gap-5 mb-5 mx-20 border-2 items-center justify-between">
              <div>
                <img
                  className="lg:h-36 lg:w-72 w-full object-cover"
                  src={list?.imgUrl}
                  alt=""
                />
              </div>
              <div className="space-y-2 p-3 ">
                <span className="mr-5 rounded  px-2.5 py-0.5 text-xs font-semibold bg-pink-200 dark:bg-cyan-200 dark:text-cyan-800">
                  {list?.timestamp}
                </span>
                <span className="rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                  {list?.category}
                </span>
                <h1 className="text-xl font-bold">{list?.title}</h1>
                <p className="text-sm text-gray-600">
                  {list?.shortDes?.slice(0, 200)}
                </p>
              </div>
                <div className="grid lg:grid-cols-1 grid-cols-2 mb-5 my-5 justify-between gap-10 items-center ml-5 lg:mr-10">
                  <div>
                    <Link
                      to={`/blog-details/${list._id}`}
                      href="#"
                      className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                      Details
                    </Link>
                  </div>
                  <div>
                    <Link
                    onClick={() => handleRemove(postId)}
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                      Remove
                    </Link>
                  </div>
                </div>
              <div>
              </div>
            </div>
        </div>
    );
};

export default WishListCart;