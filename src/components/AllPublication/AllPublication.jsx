import { useContext, useEffect, useState } from "react";
import img from "../../assets/publication.png";
import ConferencePapers from "./ConferencePapers/ConferencePapers";
import JournalPapers from "./JournalPapers/JournalPapers";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllPublication = () => {
  const [publication, setPublication] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://mahfuj-sir.vercel.app/publication")
      .then((res) => res.json())
      .then((data) => {
        setPublication(data);
      });
  }, []);

  const conferences = publication.filter(
    (item) => item.category === "Conference"
  );
  const journals = publication.filter((item) => item.category === "Journal");

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full relative">
        {/* Image Banner */}
        <img
          className="h-[400px]  md:h-80 lg:h-[600px]  w-full object-cover"
          src={img}
          alt="Publications"
        />

        {/* Upload Button (Centered on Image) */}

        {user?.email === "kayum.ece.hstu@gmail.com" && (
          <Link to={"/uploadPublication"}>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300 hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-4.5-3L12 9m0 0L7.5 13.5M12 9v9"
                />
              </svg>
              Upload
            </button>
          </Link>
        )}
      </div>

      <div className="mt-4 mb-8">
        <SectionTitle heading={"Journal Papers "}></SectionTitle>
        <ul className=" list-decimal ml-4 sm:ml-6 md:ml-8 mt-4">
          {journals.map((journal) => (
            <JournalPapers journal={journal} key={journal._id}></JournalPapers>
          ))}
        </ul>
      </div>

      <div className="mt-4 mb-8">
        <SectionTitle heading={"Conference Papers"}></SectionTitle>
        <ul className=" list-decimal ml-4 sm:ml-6 md:ml-8 my-4">
          {conferences.map((conference) => (
            <ConferencePapers
              conference={conference}
              key={conference._id}
            ></ConferencePapers>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllPublication;
