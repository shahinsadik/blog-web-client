import { Link } from "react-router-dom";
const Errorpage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen object-cover"
        style={{
          backgroundImage:
            "url(https://www.drip.com/hs-fs/hubfs/Imported_Blog_Media/E-Commerce-404-Page-Facebook.jpg?width=900&height=473&name=E-Commerce-404-Page-Facebook.jpg)",
        }} >
        
        <div className="flex h-screen justify-center items-center">
          <div>
          <h1 className="text-3xl font-bold text-center text-white ">404 Error</h1>
        <h2 className="mb-5 text-white text-5xl font-black text-center mt-20 ">
          Page Not Found
        </h2>
        <Link
          className="text-center text-3xl text-white font-bold p-2 flex justify-center items-center hover:bg-green-800 bg-red-600 rounded-md"
          to="/">
          {" "}
          Go to Home
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
