import img from "../../assets/studentCorners.jpg";
import LectureMaterials from "./LectureMaterials/LectureMaterials";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const StudentCorner = () => {
  const [batches, setBatches] = useState([]);
  const { user } = useContext(AuthContext);

  // Fetch batches from server
  const fetchBatches = async () => {
    try {
      const response = await fetch("https://mahfuj-sir.vercel.app/batches");
      const data = await response.json();

      // Sort in descending order (latest batches first)
      const sortedData = data.sort((a, b) => a.batchYear - b.batchYear);
      setBatches(sortedData);
    } catch (error) {
      console.error("Error fetching batches:", error);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  // Delete function
  const handleDelete = async (_id) => {
    console.log("Deleting:", _id);

    try {
      const response = await fetch(
        `https://mahfuj-sir.vercel.app/batches/${_id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.deletedCount > 0) {
        alert("Successfully deleted");

        // Fetch fresh data after deletion
        fetchBatches();
      }
    } catch (error) {
      console.error("Error deleting batch:", error);
      alert("Failed to delete. Please try again.");
    }
  };

  return (
    <div>
      <img
        className=" lg:h-[500px] mt-16 lg:mt-0 h-[200px] w-full"
        src={img}
        alt="Student Corner"
      />
      <div className="lg:mx-8 mx-4 mb-20">
        <NoticeBoard />

        <div>
          <div className="mt-4 relative">
            <SectionTitle heading={"LECTURE MATERIALS AND MARKS"} />

            {/* Add Notice Button */}

            {user?.email === "kayum.ece.hstu@gmail.com" && (
              <Link to={"/addBatch"}>
                <button className="absolute top-0 right-0 flex items-center gap-2 px-4 py-2 mr-4 mt-3 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-700 hover:text-gray-200">
                  <FaPlus />
                </button>
              </Link>
            )}
          </div>

          <div className="my-6  ">
            {batches.map((batch) => (
              <LectureMaterials
                key={batch._id} // ✅ Fixed: Correct key usage
                onDelete={handleDelete}
                batch={batch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCorner;
