import qute from "../../../assets/Images/review/Quote_1_.png";
const ReviewCard = ({ img, name, text, title }) => {
  return (
    <div>
      <div className="flex justify-between gap-5">
        <div className="flex items-center gap-2 mb-4">
          <img className="w-12" src={img} alt="" />
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-xs">{title}</p>
          </div>
        </div>
        <img className="w-8 h-8" src={qute} alt="" />
      </div>
      <p className="mb-6">{text}</p>
    </div>
  );
};

export default ReviewCard;
