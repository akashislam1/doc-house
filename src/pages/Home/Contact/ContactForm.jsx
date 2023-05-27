import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlinePhoneArrowUpRight } from "react-icons/hi2";

const ContactForm = () => {
  return (
    <div className="my-20">
      <div className="grid md:grid-cols-2 gap-4 bg-[#07332F] md:p-20 p-3">
        <div className="py-5 md:p-0 text-center md:text-left text-white space-y-4">
          <h3 className="font-bold text-3xl">Contact With Us</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <div className="text-left">
            <p>
              <HiOutlinePhoneArrowUpRight className="inline-block mr-3"></HiOutlinePhoneArrowUpRight>
              +88 01750 14 14 14
            </p>
            <p>
              <FaMapMarkerAlt className="inline-block mr-3"></FaMapMarkerAlt>
              Dhanmondi, Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <form className="mb-5">
          <div className="grid md:grid-cols-2 gap-3 mb-5">
            <input
              className="w-full text-white px-5 py-2  rounded-md  placeholder:text-white  bg-[#044440] "
              id="name"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full text-white px-5 py-2  rounded-md  placeholder:text-white  bg-[#044440] "
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-5">
            <input
              className="w-full text-white px-5 py-2  rounded-md  placeholder:text-white  bg-[#044440] "
              id="mobile"
              type="tel"
              placeholder="Mobile Number"
            />
            <input
              className="w-full text-white px-5 py-2  rounded-md  placeholder:text-white  bg-[#044440] "
              id="doctor"
              type="text"
              placeholder="Doctor Name"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-5">
            <input
              className="w-full text-white px-5 py-2  rounded-md  placeholder:text-white  bg-[#044440] "
              id="date"
              type="date"
            />
            <input
              className="w-full text-white px-5 py-2  rounded-md  placeholder:text-white  bg-[#044440] "
              id="time"
              type="time"
            />
          </div>
          <button className="w-full primary-btn" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
