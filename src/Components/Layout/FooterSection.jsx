import { Banner, Button, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const FooterSection = () => {
  return (
    <div >
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
              <Banner >
                <div className="flex mt-5 rounded-xl w-full items-center justify-between border-b border-gray-200 bg-gray-400 p-4 dark:border-gray-600 dark:bg-gray-700">
                  <div className="mx-auto flex w-full flex-shrink-0 items-center sm:w-auto">
                    <form
                      action="#"
                      className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
                      <Label
                        htmlFor="email"
                        className="mb-2 mr-auto flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0">
                        Sign up for our newsletter
                      </Label>
                      <TextInput
                        id="email"
                        placeholder="Enter your email"
                        required
                        type="email"
                      />
                      <Button type="submit">Subscribe</Button>
                    </form>
                  </div>
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
