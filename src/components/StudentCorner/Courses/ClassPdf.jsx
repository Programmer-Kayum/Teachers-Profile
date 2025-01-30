import { FaDownload } from "react-icons/fa";
const ClassPdf = ({ classPdf }) => {
  return (
    <div>
      <div className="flex items-center my-4 justify-between border p-4 rounded-lg bg-gray-50 shadow-md max-w-4xl mx-auto">
        {/* File Name */}
        <span className="text-gray-800 text-sm font-medium">
          {classPdf.courseName}
        </span>

        {/* Download Button */}
        <button className="flex items-center space-x-2 bg-blue-100 text-blue-700 text-sm font-medium py-1 px-3 rounded-lg hover:bg-blue-200">
          <FaDownload className="text-blue-500" />

          <a
            href={`http://localhost:5000/${classPdf.filePath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <span>View PDF</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default ClassPdf;
