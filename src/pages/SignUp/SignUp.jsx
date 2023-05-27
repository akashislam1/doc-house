import { Link } from "react-router-dom";
import login from "../../assets/Images/login/login.png";

const SignUp = () => {
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="bg-[#07332F] flex items-center justify-center h-screen">
        <img className="w-96" src={login} alt="" />
      </div>
      <div className="flex items-center justify-center h-screen">
        <form className="bg-white shadow-md rounded px-8 py-8 sm:w-96">
          <h2 className="text-2xl font-bold mb-6">Sign Up to Doc House</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700  font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="appearance-none border rounded-md w-full p-5 text-gray-700 leading-tight bg-[#F3F3F3] focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700  font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded-md w-full p-5 text-gray-700 leading-tight bg-[#F3F3F3] focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="appearance-none border rounded-md w-full p-5 text-gray-700 leading-tight bg-[#F3F3F3] focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-right mb-4 text-[#F7A582]">
            <a href="">Forgot password?</a>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="primary-btn w-full font-bold">
              Sign in
            </button>
          </div>
          <div className="my-5 text-center text-[#6C6B6B]">
            Already register at first. Go to{" "}
            <Link to="/login" className="text-[#F7A582] ml-1">
              SIGN IN
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
