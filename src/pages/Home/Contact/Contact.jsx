import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { HiOutlinePhoneArrowUpRight } from "react-icons/hi2";

const Contact = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-24">
      <div className="contact-card">
        <FaRegClock className="w-16 h-16"></FaRegClock>
        <div className="space-y-2">
          <h4 className="font-bold">Opening Hours</h4>
          <p>
            Open 9.00 am to 5.00pm <br /> Everyday
          </p>
        </div>
      </div>
      <div className="contact-card">
        <FaMapMarkerAlt className="w-16 h-16"></FaMapMarkerAlt>
        <div className="space-y-2">
          <h4 className="font-bold">Our Locations</h4>
          <p>
            Dhanmondi 17, Dhaka - 1200, <br /> Bangladesh
          </p>
        </div>
      </div>
      <div className="contact-card ">
        <HiOutlinePhoneArrowUpRight className="w-16 h-16"></HiOutlinePhoneArrowUpRight>
        <div className="space-y-2">
          <h4 className="font-bold">Contact Us</h4>
          <p>+88 01750 00 00 00 </p>
          <p>+88 01750 00 00 00 </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
