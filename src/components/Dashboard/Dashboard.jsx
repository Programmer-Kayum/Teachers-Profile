import { FaUpload } from "react-icons/fa";
import UploadedBanner from "./UploadedBanner/UploadedBanner";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="lg:mx-8 mx-4 mb-8">
      <UploadedBanner />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {/* PDF Card */}
        <div className="w-full lg:h-64 mb-4">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Class PDF
              </h2>
              <p className="text-gray-600 mb-6">Upload lecture PDF</p>
              <Link to="/uploadPdf">
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <label className="flex items-center space-x-2 bg-blue-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-blue-600 hover:text-yellow-100 cursor-pointer transition-all duration-300">
                    <FaUpload className="text-white" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Researcher Card */}
        <div className="w-full lg:h-64 ">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Publication
              </h2>
              <p className="text-gray-600 mb-6">Upload a Researcher.</p>
              <Link to="/uploadPublication">
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <label className="flex items-center space-x-2 bg-yellow-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-yellow-600 hover:text-black cursor-pointer transition-all duration-300">
                    <FaUpload className="text-white" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="w-full lg:h-64 mb-4">
          <div className="bg-gradient-to-r from-green-100 to-teal-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Result
              </h2>
              <p className="text-gray-600 mb-6">Upload Exam Results.</p>
              <Link to="/uploadResult">
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <label className="flex items-center space-x-2 bg-green-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-green-600 hover:text-yellow-100 cursor-pointer transition-all duration-300">
                    <FaUpload className="text-white" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Assignment Card */}
        <div className="w-full lg:h-64 mb-4">
          <div className="bg-gradient-to-r from-pink-100 to-red-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Assignment
              </h2>
              <p className="text-gray-600 mb-6">Upload an Assignment.</p>
              <Link to="/assignment">
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <label className="flex items-center space-x-2 bg-pink-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-pink-600 hover:text-yellow-100 cursor-pointer transition-all duration-300">
                    <FaUpload className="text-white" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Assignment Card */}
        <div className="w-full lg:h-64 mb-4">
          <div className="bg-gradient-to-r from-pink-100 to-red-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Add Batch
              </h2>
              <p className="text-gray-600 mb-6">Upload Batch.</p>
              <Link to="/addBatch">
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <label className="flex items-center space-x-2 bg-pink-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-pink-600 hover:text-yellow-100 cursor-pointer transition-all duration-300">
                    <FaUpload className="text-white" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Researcher Card */}
        <div className="w-full lg:h-64 ">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                CARE LAB
              </h2>
              <p className="text-gray-600 mb-6">Upload a Researcher.</p>
              <Link to="/addResearcher">
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <label className="flex items-center space-x-2 bg-yellow-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-yellow-600 hover:text-black cursor-pointer transition-all duration-300">
                    <FaUpload className="text-white" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Add Users Card */}
        <div className="w-full lg:h-64 mb-4">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-200 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Add Users
              </h2>
              <p className="text-gray-600 mb-6">Upload new Users.</p>
              <Link to="/addusers">
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <label className="flex items-center space-x-2 bg-purple-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-purple-600 hover:text-yellow-100 cursor-pointer transition-all duration-300">
                    <FaUpload className="text-white" />
                    <span>Upload</span>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="w-full lg:h-64 mb-4">
          <div className="bg-gradient-to-r from-green-100 to-teal-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Notice
              </h2>
              <p className="text-gray-600 mb-6">Upload Notice.</p>
              <Link to="/notice">
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <label className="flex items-center space-x-2 bg-green-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-green-600 hover:text-yellow-100 cursor-pointer transition-all duration-300">
                    <FaUpload className="text-white" />
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
