import flogo from "../../../assets/footerlogo.png";
import moment from "moment";
const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-6 w-full md:px-20 p-4">
        <div className="space-y-4">
          <div className="flex items-center gap-1 ">
            <img src={flogo} alt="" />
            <h4 className="font-bold text-3xl ">
              <span className="text-[#F7A582]">Doc</span>{" "}
              <span className="text-[#07332F]">House</span>
            </h4>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. has been since the printer took.
          </p>
          <button className="secondary-btn">Appointment</button>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold text-black">Quick Links</h2>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Service</a>
            </li>
            <li>
              <a href="#doctors">Doctors</a>
            </li>
            <li>
              <a href="#departments">Departments</a>
            </li>
            <li>
              <a href="#payment">Online Payment</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#account">My Account</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold text-black">Doc House Services</h2>
          <ul>
            <li>
              <a href="#pediatric">Pediatric Clinic</a>
            </li>
            <li>
              <a href="#diagnosis">Diagnosis Clinic</a>
            </li>
            <li>
              <a href="#cardiac">Cardiac Clinic</a>
            </li>
            <li>
              <a href="#lab">Laboratory Analysis</a>
            </li>
            <li>
              <a href="#gynecological">Gynecological Clinic</a>
            </li>
            <li>
              <a href="#counseling">Personal Counseling</a>
            </li>
            <li>
              <a href="#dental">Dental Clinic</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold text-black">Working Hours</h2>
          <ul>
            <li>Monday - 10 am to 7 pm</li>
            <li>Tuesday - 10 am to 7 pm</li>
            <li>Wednesday - 10 am to 7 pm</li>
            <li>Thursday - 10 am to 7 pm</li>
            <li>Friday - 10 am to 7 pm</li>
            <li>Saturday - 10 am to 7 pm</li>
            <li>Sunday - 10 am to 7 pm</li>
          </ul>
        </div>
      </div>
      <hr className="border-t border-gray-200 my-4 w-[88%] mx-auto"></hr>
      <div className="text-center pb-5">
        <p>
          Copyright © {moment().format("YYYY")} - All right reserved by Doc
          House Ltd
        </p>
      </div>
    </>
  );
};

export default Footer;
