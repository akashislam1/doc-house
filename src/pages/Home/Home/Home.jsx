import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ContactForm from "../Contact/ContactForm";
import ExpDoctor from "../ExpDoctor/ExpDoctor";
import OurServices from "../OurServices/OurServices";
import Review from "../Review/Review";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="md:w-[88%] mx-auto p-3">
        <OurServices></OurServices>
        <Contact></Contact>
        <Review></Review>
        <ExpDoctor></ExpDoctor>
        <ContactForm></ContactForm>
      </div>
    </>
  );
};

export default Home;
