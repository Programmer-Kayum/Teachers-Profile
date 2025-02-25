import sir from "../../../assets/sir.jpg";
import link from "../../../assets/Linkedin_icon.svg.png";
import google from "../../../assets/Google_Scholar_logo.svg.png";
import hstuLog from "../../../assets/hstu_logo_.png";

const ProfileSection = () => {
  return (
    <div className="bg-gray-100 mx-auto max-w-5xl mt-4 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="text-center font-bold text-xl sm:text-2xl md:text-3xl pt-4">
        <h4>WELCOME TO THIS WEBSITE</h4>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center py-6 sm:py-8 md:py-10 px-2 sm:px-4 md:px-6">
        {/* Image Section */}
        <div className="w-64 sm:w-72 md:w-80 rounded-lg overflow-hidden shadow-lg relative">
          <img
            src={sir}
            alt="John Smith"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Information Section */}
        <div className="mt-6 lg:mt-0 lg:ml-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-700">
            John Smith
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">
            Professor
          </h3>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg">
            Department of Electronics and Communication Engineering (ECE) <br />
            Faculty of Computer Science and Engineering
            <br />
            Hajee Mohammad Danesh Science & Technology University, Dinajpur.
            <br />
            Kazla, Rajshahi-6204, Bangladesh
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            <strong>Office:</strong> Academic Building-3
            <br />
            <strong>Cell:</strong> +8801750xxxxxxx
            <br />
            <strong>Email:</strong>
            <a
              href="mailto:johnsmith123@gmail.com"
              className="text-blue-600 hover:underline ml-1"
            >
              johnsmith123@gmail.com
            </a>
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start mt-4 space-x-3 sm:space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="relative group"
            >
              <img
                src={link}
                alt="LinkedIn"
                className="w-6 sm:w-8 hover:scale-110 hover:opacity-80 transition-transform duration-200"
              />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </span>
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              className="relative group"
            >
              <img
                src={google}
                alt="Google Scholar"
                className="w-6 sm:w-8 hover:scale-110 hover:opacity-80 transition-transform duration-200"
              />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Google Scholar
              </span>
            </a>

            <a
              href="https://hstu.ac.bd"
              aria-label="HSTU"
              className="relative group"
            >
              <img
                src={hstuLog}
                alt="HSTU"
                className="w-6 sm:w-8 hover:scale-110 hover:opacity-80 transition-transform duration-200"
              />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                HSTU
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
