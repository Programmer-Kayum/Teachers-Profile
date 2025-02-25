import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Items from "./Items";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const CourseItem = ({ batch, onDelete }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-500 rounded-lg mt-4">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg text-center shadow-lg relative group transition-transform transform hover:scale-105">
        {/* Icons (Only visible for specific users) */}
        {(user?.email === "kayum.ece.hstu@gmail.com" ||
          user?.email === "mahfujurrahmanruice@gmail.com") && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2 text-lg">
            {/* Edit Icon */}
            <Link to={`/update/${batch._id}`}>
              <FaEdit
                className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
                title="Edit"
              />
            </Link>

            {/* Delete Icon */}
            <FaTrash
              onClick={() => onDelete(batch._id)}
              className="cursor-pointer hover:text-red-500 transition-colors duration-200"
              title="Delete"
            />
          </div>
        )}

        {/* Content Layout */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Items Component */}
          <Items batch={batch} />
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
