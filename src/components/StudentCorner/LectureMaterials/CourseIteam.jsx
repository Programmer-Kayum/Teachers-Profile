import { Link } from "react-router-dom";
import Items from "./Items";
import { FaEdit, FaTrash } from "react-icons/fa";

const CourseIteam = ({ batch, onDelete }) => {
  return (
    <div className="p-6 bg-gray-500 rounded-lg mt-4">
      <div className="bg-white p-4 rounded-lg text-center shadow-lg">
        {/* Icons */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2 text-lg">
          {/* Edit Icon Link */}

          <Link to={`/update/${batch._id}`}>
            <FaEdit
              className="cursor-pointer hover:text-blue-500"
              title="Edit"
            />
          </Link>

          {/* Delete Icon Link */}

          <FaTrash
            onClick={() => onDelete(batch._id)}
            className="cursor-pointer hover:text-red-500"
            title="Delete"
          />
        </div>
        {/* Row Layout */}
        <div className="flex justify-center items-center">
          {/* Items Component */}
          {<Items batch={batch} />}
        </div>
      </div>
    </div>
  );
};

export default CourseIteam;

// {userRole === "admin" && (
//   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2 text-lg">
//     {/* Edit Icon Link */}
//     <Link to={`/update/${batch._id}`}>
//       <FaEdit
//         className="cursor-pointer hover:text-blue-500"
//         title="Edit"
//       />
//     </Link>

//     {/* Delete Icon Link */}
//     <FaTrash
//       onClick={() => onDelete(batch._id)}
//       className="cursor-pointer hover:text-red-500"
//       title="Delete"
//     />
//   </div>
// )}
