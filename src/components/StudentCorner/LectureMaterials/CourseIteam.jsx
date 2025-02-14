import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import { FaEdit, FaTrash } from "react-icons/fa";
import Items from "./Items";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const CourseIteam = ({ batch, onDelete }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6 bg-gray-500 rounded-lg mt-4">
      <div className="bg-white p-4 rounded-lg text-center shadow-lg relative group">
        {/* Icons (Only visible for specific user) */}
        {(user?.email === "kayum.ece.hstu@gmail.com" ||
          user?.email === "mahfujurrahmanruice@gmail.com") && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2 text-lg">
            {/* Edit Icon */}
            <Link to={`/update/${batch._id}`}>
              <FaEdit
                className="cursor-pointer hover:text-blue-500"
                title="Edit"
              />
            </Link>

            {/* Delete Icon */}
            <FaTrash
              onClick={() => onDelete(batch._id)}
              className="cursor-pointer hover:text-red-500"
              title="Delete"
            />
          </div>
        )}

        {/* Row Layout */}
        <div className="flex justify-center items-center">
          {/* Items Component */}
          <Items batch={batch} />
        </div>
      </div>
    </div>
  );
};

// ✅ **PropTypes Validation**
CourseIteam.propTypes = {
  batch: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Ensure _id is a required string
  }).isRequired,
  onDelete: PropTypes.func.isRequired, // Ensure onDelete is a required function
};

export default CourseIteam;
