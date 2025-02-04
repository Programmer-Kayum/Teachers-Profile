const Researcher = ({ member }) => {
  return (
    <div className="my-6 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Image Section with Hover Effect */}
      <div>
        <img
          src={
            member.image ||
            (member.gender === "male"
              ? "https://www.w3schools.com/howto/img_avatar.png" // Male avatar
              : member.gender === "female"
              ? "https://www.w3schools.com/howto/img_avatar2.png" // Female avatar
              : "https://www.w3schools.com/w3images/avatar2.png") // Default avatar
          }
          className="sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-48 mt-2 mx-auto rounded-lg object-cover border-4 border-gray-300 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 text-center">
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>

        {/* Title */}
        <p className="text-gray-600">{member.title}</p>

        {/* Mobile (if available) */}
        {member.mobile && (
          <p className="text-gray-700 mt-2 text-sm">📞 {member.mobile}</p>
        )}

        {/* Email */}
        <p className="text-blue-600 text-sm mt-1">{member.email}</p>
      </div>
    </div>
  );
};

export default Researcher;
