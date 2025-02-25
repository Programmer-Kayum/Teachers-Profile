import img1 from "../../../assets/upload.png";

const UploadedBanner = () => {
  return (
    <div className="relative bg-gray-100  shadow-lg rounded-lg overflow-hidden">
      {/* Banner Image */}
      <img
        src={img1} // Replace this with your image URL
        alt="Uploaded Section"
        className="w-full lg:h-96 lg:mt-0 mt-16 object-cover"
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold">Uploaded Section</h2>
        <p className="text-sm md:text-lg mt-2">
          View and manage all your uploaded files and publications here.
        </p>
      </div>
    </div>
  );
};

export default UploadedBanner;
