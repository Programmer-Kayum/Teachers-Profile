import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import CourseIteam from "./CourseIteam";

const LectureMaterials = ({ batch, onEdit, onDelete }) => {
  return (
    <div className="my-2">
      <div className="text-center space-y-4">
        <div className="collapse collapse-arrow bg-base-200 group">
          {" "}
          {/* Add 'group' class to the parent div */}
          <input type="checkbox" />
          <div className="collapse-title text-2xl font-bold flex justify-between items-center">
            <h2 className="flex-1">{batch.batchYear} SERIES</h2>
            {/* Icons */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2 text-lg">
              <FaEdit
                className="cursor-pointer hover:text-blue-500"
                title="Edit"
                onClick={() => onEdit(batch.id)}
              />
              <FaTrash
                className="cursor-pointer hover:text-red-500"
                title="Delete"
                onClick={() => onDelete(batch.id)}
              />
            </div>
          </div>
          <div className="collapse-content">
            {/* Loop through course array and display each course */}
            {batch.course?.map((course, index) => (
              <div key={index}>
                <SectionTitle heading={course}></SectionTitle>
                <CourseIteam batch={batch} course={course}></CourseIteam>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureMaterials;
