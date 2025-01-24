import { FaUpload } from "react-icons/fa";
import Items from "./Items";

const CourseIteam = ({ batch }) => {
  return (
    <div className="p-6 bg-gray-500 rounded-lg mt-4">
      <div className="bg-white p-4 rounded-lg text-center shadow-lg">
        {/* Row Layout */}
        <div className="flex flex-wrap ml-20 gap-4 items-center">
          {/* Loop through items array */}
          {/* className="flex flex-col items-center justify-center p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md" */}
          {<Items batch={batch}></Items>}
          {/* Upload Button */}
          <div className="flex flex-col items-center justify-center p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
            <label className="flex items-center space-x-2 bg-blue-100 text-blue-700 text-sm font-medium py-1 px-4 rounded-lg hover:bg-blue-300 cursor-pointer transition-all duration-500">
              <FaUpload className="text-blue-500" />
              <span>Upload</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIteam;
