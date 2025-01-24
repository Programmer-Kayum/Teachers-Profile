const UploadedBanner = () => {
  return (
    <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      {/* Banner Image */}
      <img
        src="https://via.placeholder.com/1200x400" // Replace this with your image URL
        alt="Uploaded Section"
        className="w-full h-64 object-cover"
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold">Uploaded Section</h2>
        <p className="text-sm md:text-lg mt-2">
          View and manage all your uploaded files and publications here.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 text-sm md:text-md font-bold rounded-md transition duration-300">
          Explore Files
        </button>
      </div>
    </div>
  );
};

export default UploadedBanner;
