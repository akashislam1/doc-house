import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import doc1 from "../../../assets/Images/doctor_sec/doc1.png";
import doc2 from "../../../assets/Images/doctor_sec/doc2.png";
import doc3 from "../../../assets/Images/doctor_sec/doc3.png";
import {
  FaCalendar,
  FaDollarSign,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
const ExpDoctor = () => {
  return (
    <div className="mt-20">
      <SectionTitle
        heading={"Our Expert Doctors"}
        subheading={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {/* Card 1 */}
        <div className="p-4 border rounded-md">
          <img
            className="w-full h-64 bg-slate-300 rounded-md"
            src={doc1}
            alt=""
          />
          <div>
            <div className="my-5">
              <h3 className="font-semibold text-xl">Karyen Anderson</h3>
              <p className="text-[#6C6B6B]">BTP - Senior Physiotherapist</p>

              <div className="text-yellow-500 flex gap-1 mt-4 text-xl">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
            </div>
            <div className="space-y-3 mb-3 text-[#6C6B6B]">
              <p>
                <FaMapMarkerAlt className="inline-block mr-2"></FaMapMarkerAlt>{" "}
                Dhanmondi, Dhaka, Bangladesh
              </p>
              <p>
                <FaCalendar className="inline-block mr-2"></FaCalendar>
                Available On Mon, 22 December
              </p>
              <p>
                <FaDollarSign className="inline-block mr-2"></FaDollarSign> 45
              </p>
            </div>
            <button className="secondary-btn w-full my-2">View Profile</button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="p-4 border rounded-md">
          <img
            className="w-full h-64 bg-slate-300 rounded-md"
            src={doc2}
            alt=""
          />
          <div>
            <div className="my-5">
              <h3 className="font-semibold text-xl">Karyen Anderson</h3>
              <p className="text-[#6C6B6B]">BTP - Senior Physiotherapist</p>

              <div className="text-yellow-500 flex gap-1 mt-4 text-xl">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
            </div>
            <div className="space-y-3 mb-3 text-[#6C6B6B]">
              <p>
                <FaMapMarkerAlt className="inline-block mr-2"></FaMapMarkerAlt>{" "}
                Dhanmondi, Dhaka, Bangladesh
              </p>
              <p>
                <FaCalendar className="inline-block mr-2"></FaCalendar>
                Available On Mon, 22 December
              </p>
              <p>
                <FaDollarSign className="inline-block mr-2"></FaDollarSign> 45
              </p>
            </div>
            <button className="secondary-btn w-full my-2">View Profile</button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="p-4 border rounded-md">
          <img
            className="w-full h-64 bg-slate-300 rounded-md"
            src={doc3}
            alt=""
          />
          <div>
            <div className="my-5">
              <h3 className="font-semibold text-xl">Karyen Anderson</h3>
              <p className="text-[#6C6B6B]">BTP - Senior Physiotherapist</p>

              <div className="text-yellow-500 flex gap-1 mt-4 text-xl">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
            </div>
            <div className="space-y-3 mb-3 text-[#6C6B6B]">
              <p>
                <FaMapMarkerAlt className="inline-block mr-2"></FaMapMarkerAlt>{" "}
                Dhanmondi, Dhaka, Bangladesh
              </p>
              <p>
                <FaCalendar className="inline-block mr-2"></FaCalendar>
                Available On Mon, 22 December
              </p>
              <p>
                <FaDollarSign className="inline-block mr-2"></FaDollarSign> 45
              </p>
            </div>
            <button className="secondary-btn w-full my-2">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpDoctor;
