import { FaDownload } from "react-icons/fa";

const ClassPdf = ({ classPdf }) => {
  const { courseName, fileUrl } = classPdf;
  console.log(classPdf);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between border p-5 rounded-lg bg-white shadow-md hover:shadow-lg transition">
        {/* File Details - Left Side */}
        <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between w-full">
          <span className="text-gray-900 text-lg font-semibold text-center sm:text-left">
            {courseName || "N/A"}
          </span>
        </div>

        {/* Download Button / No File Message */}
        <div className="mt-4 ">
          {fileUrl ? (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-end space-x-2 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <FaDownload className="text-white" />
              <span>View PDF</span>
            </a>
          ) : (
            <div className="flex flex-col sm:flex-row items-center sm:justify-end space-x-2">
              <span className="text-red-500 text-sm font-semibold">
                PDF Not Available
              </span>
              <button
                onClick={() => alert("Try uploading again!")}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassPdf;
