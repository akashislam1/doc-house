import { Link } from "react-router-dom";
import error from "../../assets/Images/error/error.png";
const ErrorPage = () => {
  return (
    <div className="p-4 my-16 flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Sorry,</h2>
        <p className="text-[#6C6B6B]">This page is not found.</p>
      </div>
      <img className="w-96" src={error} alt="" />
      <Link to="/">
        <button className="primary-btn">Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
