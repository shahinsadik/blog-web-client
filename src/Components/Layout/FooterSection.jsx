import { Banner, Button, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { Footer } from "flowbite-react";
import { toast } from "react-hot-toast";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const FooterSection = () => {
  const handleSubmit = () => {
    toast.success("Thank you for subscribing to our newsletter");
  };
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 justify-center items-center my-10 bg-gray-700 ">
        <div>
          <img
            src="https://i0.wp.com/anythingnotary.com/wp-content/uploads/2023/01/businessman-internet-continents-2682712.jpg?w=1280&ssl=1"
            alt=""
          />
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className=" mx-10 flex-col mb-10 items-center md:flex-row md:gap-x-3">
          <p className="text-2xl text-center font-bold my-5 text-white">
            {" "}
            Stay in the know !
          </p>
          <p className="text-xl font-semibold my-3 text-center text-white">
            {" "}
            Subscribe our newsletter and get all updates...
          </p>
            <div className="flex w-full gap-3">
              <TextInput
                id="email"
                placeholder="First Name"
                required
                type="text"
                className="w-full"
              />

              <TextInput
                id="email"
                placeholder="Last Name"
                required
                type="text"
                className="w-full"
              />
            </div>
            <div className="flex gap-3 mt-2">
              <TextInput
                id="email"
                placeholder="Enter your email"
                required
                type="email"
                className="w-full"
              />

              <Button type="submit">Subscribe</Button>
            </div>
          </form>
        </div>
      </div>
      <Footer container className="bg-gray-900">
        <div className="w-full ">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="/"
                src="https://w7.pngwing.com/pngs/711/22/png-transparent-blogger-social-media-logo-social-media-logo-social-brand-3d-icon-thumbnail.png"
                alt=""
                name="Web Blog"
              />
              <Banner>
                <div className="flex mt-5 rounded-xl w-full items-center justify-between border-b border-gray-200 bg-gray-400 p-4 dark:border-gray-600 dark:bg-gray-700">
                  <div className="mx-auto flex w-full flex-shrink-0 items-center sm:w-auto"></div>
                </div>
              </Banner>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="SS™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterSection;
