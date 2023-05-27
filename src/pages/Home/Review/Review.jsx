import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import review1 from "../../../assets/Images/review/review1.png";
import review2 from "../../../assets/Images/review/review2.png";
import ReviewCard from "./ReviewCard";
const Review = () => {
  return (
    <div>
      <SectionTitle
        heading={"What Our Patients Says"}
        subheading={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ></SectionTitle>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <dir className="grid md:grid-cols-2 gap-10 px-8 md:px-16 md:py-10">
            <ReviewCard
              img={review1}
              name={"Awlad Hossain"}
              title={"Product Designer"}
              text={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
              }
            ></ReviewCard>
            <ReviewCard
              img={review2}
              name={"Farhana Hossain"}
              title={"Brand Designer"}
              text={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
              }
            ></ReviewCard>
          </dir>
        </SwiperSlide>
        <SwiperSlide>
          <dir className="grid md:grid-cols-2 gap-10 px-8 md:px-16 md:py-10">
            <ReviewCard
              img={review1}
              name={"Awlad Hossain"}
              title={"Product Designer"}
              text={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
              }
            ></ReviewCard>
            <ReviewCard
              img={review2}
              name={"Farhana Hossain"}
              title={"Brand Designer"}
              text={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
              }
            ></ReviewCard>
          </dir>
        </SwiperSlide>
        <SwiperSlide>
          <dir className="grid md:grid-cols-2 gap-10 px-8 md:px-16 md:py-10">
            <ReviewCard
              img={review1}
              name={"Awlad Hossain"}
              title={"Product Designer"}
              text={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
              }
            ></ReviewCard>
            <ReviewCard
              img={review2}
              name={"Farhana Hossain"}
              title={"Brand Designer"}
              text={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
              }
            ></ReviewCard>
          </dir>
        </SwiperSlide>
        <SwiperSlide>
          <dir className="grid md:grid-cols-2 gap-10 px-8 md:px-16 md:py-10">
            <ReviewCard
              img={review1}
              name={"Awlad Hossain"}
              title={"Product Designer"}
              text={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
              }
            ></ReviewCard>
            <ReviewCard
              img={review2}
              name={"Farhana Hossain"}
              title={"Brand Designer"}
              text={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
              }
            ></ReviewCard>
          </dir>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
