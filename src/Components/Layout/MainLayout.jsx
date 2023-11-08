import {Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import useAuth from "./../../Hooks/useAuth";
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
            ? " font-semibold bg-green-500 p-2 rounded-lg "
            : " font-semibold  bg-[#0e7490] p-2 rounded-lg" 
          }
          to="/">
          Home
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-green-500 p-2 rounded-lg "
            : " font-semibold  bg-[#0e7490] p-2 rounded-lg" 
          }
          to="/addBlog">
          Add Blog
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-green-500 p-2 rounded-lg "
            : " font-semibold  bg-[#0e7490] p-2 rounded-lg" 
          }
          to="/allBlogs">
          All Blogs
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-green-500 p-2 rounded-lg "
            : " font-semibold  bg-[#0e7490] p-2 rounded-lg" 
          }
          to="/featuredBlogs">
          Featured Blogs
        </NavLink>
        <NavLink 
          className={({ isActive }) =>
            isActive
            ? " font-semibold bg-green-500 p-2 rounded-lg "
            : " font-semibold  bg-[#0e7490] p-2 rounded-lg" 
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
        <Navbar.Brand href="/">
          <img
            src="https://logo.com/image-cdn/images/kts928pd/production/a195406f1cbf3510e8901abf512267d4a80d2230-359x359.png?w=1080&q=72"
            className="mr-3 h-6 sm:h-9"
            alt="Web Blog"
          />
          
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            web Blog
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
              <Dropdown.Header>
                <span className="block text-sm font-bold">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
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
            <div>
              <Navbar.Collapse>
              <Navbar.Link  href="/login">Login</Navbar.Link>
              <Navbar.Link href="/register">Sign Up</Navbar.Link>
              </Navbar.Collapse>
              
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
