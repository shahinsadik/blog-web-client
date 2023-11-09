import {Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import useAuth from "./../../Hooks/useAuth";
import logo from "../../../public/logo.png";
const MainLayout = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const links = (
    <>
      <Navbar.Collapse >
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-cyan-900 p-2 rounded-lg text-white"
            : " font-semibold   p-2 rounded-lg text-white" 
          }
          to="/">
          Home
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-cyan-900 p-2 rounded-lg text-white"
            : " font-semibold   p-2 rounded-lg text-white" 
          }
          to="/contact">
          Contact
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-cyan-900 p-2 rounded-lg text-white"
            : " font-semibold   p-2 rounded-lg text-white" 
          }
          to="/about">
          About
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-cyan-900 p-2 rounded-lg text-white "
            : " font-semibold   p-2 rounded-lg text-white" 
          }
          to="/addBlog">
          Add Blog
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-cyan-900 p-2 rounded-lg text-white"
            : " font-semibold   p-2 rounded-lg text-white" 
          }
          to="/allBlogs">
          All Blogs
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-cyan-900 p-2 rounded-lg text-white"
            : " font-semibold   p-2 rounded-lg text-white" 
          }
          to="/featuredBlogs">
          Featured Blogs
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-cyan-900 p-2 rounded-lg text-white"
            : " font-semibold   p-2 rounded-lg text-white" 
          }
          to="/wishlist">
          Wishlist{" "}
        </NavLink>
      </Navbar.Collapse>
    </>
  );
  return (
    <div>
      <Navbar className="bg-[#0e7490]" fluid rounded>
        <Navbar.Brand >
          <img
            src={logo}
            className=" h-6 sm:h-9"
            alt="Web Blog"
          />
          
          <span className="self-center whitespace-nowrap text-2xl font-black text-red-600">
            TechBlog
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                user.photoURL  ? <Avatar alt="User settings" img={user?.photoURL} rounded /> : <Avatar alt="User settings" img="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" rounded />
              }>
              <Dropdown.Header className="text-white">
                <span className="block text-sm font-bold text-white">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium ">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                {" "}
                <Link onClick={handleLogOut} className="p-2 rounded-lg text-white font-semibold bg-red-600 w-full">
                  Log Out
                </Link>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <div className="flex justify-center items-center gap-3">
              
              <Link className=" font-semibold bg-[#38b29b] p-2 rounded-lg text-white"  to="/login">Login</Link>
              <Link className="font-semibold bg-[#38b29b] p-2 rounded-lg text-white" to="/register ">Sign Up</Link>
              
              
            </div>
          )}
          <Navbar.Toggle />
        </div>
        {links}
      </Navbar>
    </div>
  );
};

export default MainLayout;
