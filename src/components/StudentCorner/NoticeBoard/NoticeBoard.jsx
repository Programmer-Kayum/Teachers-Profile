import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FaPlus } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import ShowNotice from "./ShowNotice";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 4; // Show 5 notices per page
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://mahfuj-sir.vercel.app/notices")
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
      });
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(notices.length / noticesPerPage);

  // Get current notices for the page
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  return (
    <div className="mt-4 mb-12 relative">
      <SectionTitle heading={"NOTICE BOARD"}></SectionTitle>

      {/* Add Notice Button */}

      {user?.email === "kayum.ece.hstu@gmail.com" && (
        <Link to={"/notice"}>
          <button className="absolute top-0 right-0 flex items-center gap-2 px-4 py-2 mr-4 mt-3 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-700 hover:text-gray-200">
            <FaPlus />
          </button>
        </Link>
      )}

      {/* Notices List */}
      <div>
        {currentNotices.map((notice) => (
          <ShowNotice key={notice._id} notice={notice} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Previous
        </button>

        <span className="text-gray-700 text-lg">{`Page ${currentPage} of ${totalPages}`}</span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;
