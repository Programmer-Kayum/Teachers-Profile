const Researcher = ({ member }) => {
  return (
    <div className="mt-2 lg:mt-4 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Image Section with Hover Effect */}
      <div>
        <img
          src={member.image}
          className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-48 mt-1 lg:mt-2 mx-auto rounded-lg object-cover border-4 border-gray-300 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="mx-2 py-2 text-center">
        {/* Name */}
        <h3 className="lg:text-xl  lg:font-bold text-gray-800">
          {member.name}
        </h3>

        {/* Title */}
        <p className="text-gray-600 ">{member.title}</p>

        {/* Mobile (if available) */}
        {member.mobile && (
          <p className="text-gray-700 mt-2 ">📞 {member.mobile}</p>
        )}

        {/* Email */}
        <p className="text-blue-600  mt-1">{member.email}</p>
      </div>
    </div>
  );
};

export default Researcher;
