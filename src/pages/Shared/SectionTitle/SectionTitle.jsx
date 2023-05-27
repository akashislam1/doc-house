const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="w-full md:w-2/3 mx-auto text-center">
      <h3 className="font-bold text-3xl">{heading}</h3>
      <p>{subheading}</p>
    </div>
  );
};

export default SectionTitle;
