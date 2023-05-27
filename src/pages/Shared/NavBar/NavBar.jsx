import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { useState } from "react";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const navItems = (
    <>
      <div
        className={`flex gap-5 ${
          toggle && "flex-col justify-center items-center"
        }`}
      >
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Appointment</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
  return (
    <div className="relative">
      <div className="bg-[#07332F] fixed text-white z-50 w-full md:px-20 p-4 flex justify-between items-center ">
        <div className="flex items-center gap-3">
          <img className="w-12" src={logo} alt="" />
          <h3 className="text-2xl font-semibold">
            <span className="color-primary">Doc</span> House
          </h3>
        </div>
        <div className="hidden md:block">{navItems}</div>
        <div onClick={() => setToggle(!toggle)} className="md:hidden">
          {toggle ? <FaTimes></FaTimes> : <FaBars></FaBars>}
        </div>
      </div>
      {toggle && (
        <div className="mt-20 fixed   text-white w-full bg-[#07332F] py-4 duration-300">
          {navItems}
        </div>
      )}
    </div>
  );
};

export default NavBar;
