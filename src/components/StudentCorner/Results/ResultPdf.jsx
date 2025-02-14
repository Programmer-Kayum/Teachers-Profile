import { FaDownload } from "react-icons/fa";

const ResultPdf = ({ resultPdf }) => {
  return (
    <div className="max-w-4xl mb-4 mx-auto">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between border p-5 rounded-lg bg-white shadow-md hover:shadow-lg transition">
        {/* File Details - Left Side */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 flex-1">
          <span className="text-gray-900 text-lg font-semibold">
            {resultPdf?.examName || "N/A"}
          </span>
          <span className="text-gray-700 text-lg font-medium">
            {resultPdf?.examCategory || "N/A"}
          </span>
          <span className="text-gray-700 text-lg font-medium">
            {resultPdf?.level}, {resultPdf?.semester}
          </span>
        </div>

        {/* Download Button / No File Message */}
        <div>
          {resultPdf?.filePath ? (
            <a
              href={`http://localhost:5000/${resultPdf.filePath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <FaDownload className="text-white" />
              <span>View PDF</span>
            </a>
          ) : (
            <span className="text-red-500 text-sm font-semibold">
              PDF Not Available
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultPdf;
