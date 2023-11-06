import { Button, Card, Label, TextInput } from "flowbite-react";
import register from "../../public/register.svg";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import useAuth from "./../Hooks/useAuth";
import { toast } from "react-hot-toast";
const Register = () => {
  const { profileUpdate } = useAuth();
  const { crateUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  console.log(email, password, name, photo);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Registering....");

    try {
      await crateUser(email, password, name, photo);
      toast.success("Register successfully", { id: toastId });
      profileUpdate(name, photo);
      navigate("/");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };
  return (
    <div>
      <div className="bg-[#0e7490] py-10">
        <div className="min-h-screen grid grid-cols-1  gap-2 md:grid-cols-2  justify-center items-center mx-10">
          <Card className="max-w-lg  border-none p-5">
            <h1 className="text-5xl font-bold text-center text-[#3f3d56] mb-5">
              Sign up now!
            </h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block ">
                  <Label htmlFor="email1" value="Your name" />
                </div>
                <TextInput
                  name="name"
                  type="text"
                  placeholder="Your name"
                  onBlur={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your Photo url" />
                </div>
                <TextInput
                  id=""
                  name="photo"
                  type="text"
                  placeholder="Photo url"
                  onBlur={(e) => setPhoto(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  name="email"
                  placeholder="name@flowbite.com"
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  placeholder="Enter your password"
                  onBlur={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-center">
              Already have an account!{" "}
              <Link to="/login" className="font-semibold text-blue-600 ">
                {" "}
                Login Now
              </Link>
            </p>
          </Card>
          <div>
            <img src={register} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
