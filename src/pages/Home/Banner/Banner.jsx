import doc1Img from "../../../assets/Images/Banner/doc1.png";
import doc2Img from "../../../assets/Images/Banner/doc2.png";
import doc3Img from "../../../assets/Images/Banner/doc3.png";
const Banner = () => {
  return (
    <div className="bg-[#07332F]  md:h-[658px] p-4">
      <div className="pt-20 pb-6 md:py-32 md:w-[88%] mx-auto flex flex-col md:flex-row  md:items-center gap-10">
        <div className="text-white text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-5xl font-semibold">
            Your Best Medical <br /> Help Center
          </h2>
          <p className="text-xs">
            Lorem Ipsum is simply dummy text they are printing typesetting has
            been the industry’s stardard.
          </p>
          <button className="primary-btn ">All Service</button>
        </div>
        <div className="flex items-center justify-center gap-5">
          <img
            className="w-20 h-20 md:w-60 md:h-60 bg-slate-200 "
            src={doc3Img}
            alt=""
          />
          <img
            className="w-20 h-20 md:w-60 md:h-60 bg-slate-200 "
            src={doc2Img}
            alt=""
          />
          <img
            className="w-20 h-20 md:w-60 md:h-60 bg-slate-200 "
            src={doc1Img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
