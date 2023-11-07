import {Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { toast } from 'react-hot-toast';

const AllBlogsCart = ({ data }) => {
  const { title, imgUrl, category, shortDes, longDes, _id, timestamp,UserEmail,UserName,UserPhoto } = data;
  // const data= {_id,title, imgUrl, category, shortDes, longDes,timestamp,UserEmail,UserName,UserPhoto}
 const handleWhiteList =(data)=>{
  
  fetch("http://localhost:5000/api/v1/crate-wishList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Added your wishlist successfully");
        
      });
 }
 
  
  return (
    <div >
      <Card
        className="max-w-sm my-10"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={imgUrl}>
            <div className=" flex items-center">
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {category}
          </span>
        </div>
        <a href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title?.slice(0, 45)}
          </h5>
        </a>
        
        <span className=" text-gray-900 dark:text-white">{shortDes?.slice(0, 200)}</span>
        <div className="flex items-center justify-between">
          <Link to={`/blog-details/${_id}`}
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
            Details
          </Link>
          <Link 
            onClick={()=>handleWhiteList({data})}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
            Wishlist
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AllBlogsCart;
