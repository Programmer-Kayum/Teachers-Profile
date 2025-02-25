const SectionTitle = ({ heading }) => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg text-center py-4">
      <span className="text-white lg:font-bold font-semibold lg:text-2xl text-lg">
        {heading}
      </span>
    </div>
  );
};

export default SectionTitle;
