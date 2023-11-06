import {Link} from "react-router-dom";
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
      <Navbar.Collapse>
        <Navbar.Link
          className={({ isActive }) =>
            isActive
              ? " font-semibold bg-red-600"
              : " font-semibold text-white"
          }
          href="/">
          Home
        </Navbar.Link>
        <Navbar.Link
          className={({ isActive }) =>
            isActive
              ? " font-semibold btn btn-primary btn-sm"
              : " font-semibold btn btn-ghost btn-sm"
          }
          href="/addBlog">
          Add Blog
        </Navbar.Link>
        <Navbar.Link
          className={({ isActive }) =>
            isActive
              ? " font-semibold btn btn-primary btn-sm"
              : " font-semibold btn btn-ghost btn-sm"
          }
          href="/allBlogs">
          All Blogs
        </Navbar.Link>
        <Navbar.Link
          className={({ isActive }) =>
            isActive
              ? " font-semibold btn btn-primary btn-sm"
              : " font-semibold btn btn-ghost btn-sm"
          }
          href="/featuredBlogs">
          Featured Blogs
        </Navbar.Link>
        <Navbar.Link
          className={({ isActive }) =>
            isActive
              ? " font-semibold btn btn-primary btn-sm"
              : " font-semibold btn btn-ghost btn-sm"
          }
          href="/wishlist">
          Wishlist{" "}
        </Navbar.Link>
      </Navbar.Collapse>
    </>
  );
  return (
    <div>
      <Navbar className="bg-[#0e7490]" fluid rounded>
        <Navbar.Brand href="/">
          <img
            src="https://w7.pngwing.com/pngs/711/22/png-transparent-blogger-social-media-logo-social-media-logo-social-brand-3d-icon-thumbnail.png"
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
