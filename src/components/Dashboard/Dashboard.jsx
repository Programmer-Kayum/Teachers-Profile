import { FaUpload } from "react-icons/fa";
import UploadedBanner from "./UploadedBanner/UploadedBanner";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mx-8 my-2">
      <UploadedBanner />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
        {/* Publication Card */}
        <div className="w-full h-64">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 text-center">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Publication
              </h2>
              {/* Description */}
              <p className="text-gray-500 mb-6">
                Upload your latest publication and share your work effortlessly.
              </p>
              {/* Upload Button */}
              <Link to="/uploadPublication">
                <div className="flex flex-col items-center justify-center p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <label className="flex items-center space-x-2 bg-blue-100 text-blue-700 text-sm font-medium py-1 px-4 rounded-lg hover:bg-blue-300 cursor-pointer transition-all duration-500">
                    <FaUpload className="text-blue-500" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* PDF Card */}
        <div className="w-full h-64">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 text-center">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Class PDF
              </h2>
              {/* Description */}
              <p className="text-gray-500 mb-6">
                Upload your lecture PDF effortlessly.
              </p>
              {/* Upload Button */}
              <Link to="/uploadPdf">
                <div className="flex flex-col items-center justify-center p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <label className="flex items-center space-x-2 bg-blue-100 text-blue-700 text-sm font-medium py-1 px-4 rounded-lg hover:bg-blue-300 cursor-pointer transition-all duration-500">
                    <FaUpload className="text-blue-500" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="w-full h-64">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-9 text-center">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Result</h2>
              {/* Description */}
              <p className="text-gray-500 mb-6">Upload Exam Results.</p>
              {/* Upload Button */}
              <Link to="/uploadResult">
                <div className="flex flex-col items-center justify-center p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <label className="flex items-center space-x-2 bg-blue-100 text-blue-700 text-sm font-medium py-1 px-4 rounded-lg hover:bg-blue-300 cursor-pointer transition-all duration-500">
                    <FaUpload className="text-blue-500" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Add Batch Card */}
        <div className="w-full h-64">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-9 text-center">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Add Batch
              </h2>
              {/* Description */}
              <p className="text-gray-500 mb-6">Upload a New Batch.</p>
              {/* Upload Button */}
              <Link to="/addBatch">
                <div className="flex flex-col items-center justify-center p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <label className="flex items-center space-x-2 bg-blue-100 text-blue-700 text-sm font-medium py-1 px-4 rounded-lg hover:bg-blue-300 cursor-pointer transition-all duration-500">
                    <FaUpload className="text-blue-500" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Add Student to CARE LAB Card */}
        <div className="w-full h-64">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-5 text-center">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Assignment
              </h2>
              {/* Description */}
              <p className="text-gray-500 mb-6">Upload a Assignment.</p>
              {/* Upload Button */}
              <Link to="/assignment">
                <div className="flex flex-col items-center justify-center p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <label className="flex items-center space-x-2 bg-blue-100 text-blue-700 text-sm font-medium py-1 px-4 rounded-lg hover:bg-blue-300 cursor-pointer transition-all duration-500">
                    <FaUpload className="text-blue-500" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Add Student to CARE LAB Card */}
        <div className="w-full h-64">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-5 text-center">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                CARE LAB
              </h2>
              {/* Description */}
              <p className="text-gray-500 mb-6">Upload a Researcher.</p>
              {/* Upload Button */}
              <Link to="/addResearcher">
                <div className="flex flex-col items-center justify-center p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <label className="flex items-center space-x-2 bg-blue-100 text-blue-700 text-sm font-medium py-1 px-4 rounded-lg hover:bg-blue-300 cursor-pointer transition-all duration-500">
                    <FaUpload className="text-blue-500" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
