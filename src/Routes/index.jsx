import App from "./../App";
import { createBrowserRouter } from "react-router-dom";
import Home from './../Pages/Home';
import AddBlog from './../Pages/AddBlog';
import AllBlogs from './../Pages/AllBlogs';
import FeaturedBlogs from './../Pages/FeaturedBlogs';
import Wishlist from './../Pages/Wishlist';
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import BlogDetails from './../Pages/BlogDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/addBlog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featuredBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails></BlogDetails>,
      },
      
    ],
  },
]);
export default router;
