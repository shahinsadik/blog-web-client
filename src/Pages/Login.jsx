import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import login from "../../public/login.svg";
import { useState } from "react";
import useAuth from "./../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const { loginUser, signInGoogle} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("login in...");
    try {
      await loginUser(email, password);
      toast.success("Logged in successfully", { id: toastId });
      navigate("/");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state ? location?.state : "/");
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };
 
   
  return (
    <div className="bg-[#0e7490]">
      <div className="min-h-screen grid grid-cols-1  gap-2 md:grid-cols-2  justify-center items-center mx-10">
        <Card className="max-w-lg  border-none p-5">
          <h1 className="text-3xl font-bold text-center text-[#2f2e41]">
            Login to your account
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
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
                placeholder="Enter password"
                onBlur={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" required>Remember me</Label>
              
            </div>
            <Button type="submit">Login</Button>
            <p className="text-center">If you don't have an account! <Link to="/register" className="font-semibold text-blue-600 "> Sign Up Now</Link></p>
          </form>
          <div className="flex items-center justify-center">
              <div><p><hr /> Or <hr /></p> </div>
            
          </div>
          <div className="flex justify-center items-center  ">
                    <button onClick={handleGoogleSignIn}>
                      <div className="flex p-2 justify-center items-center rounded-xl border-2 bg-white">
                        <img
                          className="h-7"
                          src="https://e7.pngegg.com/pngimages/715/371/png-clipart-youtube-google-logo-google-s-google-account-youtube-text-trademark-thumbnail.png"
                          alt=""
                        />
                        <h1 className="font-bold text-xl">Google sign in</h1>
                      </div>
                    </button>
                  </div>
        </Card>
        <div>
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
