import sir from "../../../assets/sir.jpg";
import link from "../../../assets/Linkedin_icon.svg.png";
import google from "../../../assets/Google_Scholar_logo.svg.png";
import research from "../../../assets/ResearchGate_icon_SVG.svg.png";
import monogram from "../../../assets/রুয়েট_মনোগ্রাম.png";
import capture from "../../../assets/Capture.png";

const ProfileSection = () => {
  return (
    <div className="bg-gray-100 mx-auto max-w-5xl mt-4">
      <div className="text-center font-bold text-2xl pt-4">
        <h4>WELCOME TO THIS WEBSITE</h4>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center  py-10 px-4">
        {/* Image Section */}
        <div className="w-72 lg:w-80 rounded-lg overflow-hidden shadow-lg relative">
          <img
            src={sir} // Replace with the actual image path
            alt="Mahfujur Rahman"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Information Section */}
        <div className="mt-6 lg:mt-0 lg:ml-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-700">
            Mahfujur Rahman
          </h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-blue-600">
            Lecturer
          </h3>
          <p className="mt-2 text-gray-700">
            Department of Electronics and Communication Engineering (ECE) <br />
            Faculty of Computer Science and Engineering
            <br />
            Hajee Mohammad Danesh Science & Technology University, Dinajpur.
            <br />
            Kazla, Rajshahi-6204, Bangladesh
          </p>
          <p className="mt-4">
            <strong>Office:</strong> 2nd Floor, Academic Building-1
            <br />
            <strong>Cell:</strong> +8801750417224
            <br />
            <strong>Email:</strong>
            <a
              href="mailto: mahfujur.rahman@hstu.ac.bd"
              className="text-blue-600 hover:underline ml-1"
            >
              mahfujur.rahman@hstu.ac.bd
            </a>
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center text-center ml-32 lg:justify-start mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/mahfujur-rahman-b34216124?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              aria-label="LinkedIn"
            >
              <img
                src={link}
                alt="LinkedIn"
                className="w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200"
              />
            </a>
            <a
              href="https://scholar.google.com/citations?user=GDMJGbcAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
            >
              <img
                src={google}
                alt="Google Scholar"
                className="w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57216972833"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ResearchGate"
            >
              <img
                src={research}
                alt="ResearchGate"
                className="w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200"
              />
            </a>
            <a href="#" aria-label="Academia">
              <img
                src={monogram}
                alt="Academia"
                className="w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200"
              />
            </a>
            <a href="#" aria-label="Publons">
              <img
                src={capture}
                alt="Publons"
                className="w-8 h-8 hover:scale-110 hover:opacity-80 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
