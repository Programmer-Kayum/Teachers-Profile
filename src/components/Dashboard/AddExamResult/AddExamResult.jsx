import { useState } from "react";
import axios from "axios";

const AddExamResult = () => {
  const [formData, setFormData] = useState({
    examName: "",
    courseCode: "",
    batch: "",
    pdf: null,
  });

  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const [isUploading, setIsUploading] = useState(false); // Disable submit button while uploading

  const handleChange = (e) => {
    if (e.target.name === "pdf") {
      setFormData({ ...formData, pdf: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.examName ||
      !formData.courseCode ||
      !formData.batch ||
      !formData.pdf
    ) {
      alert("Please fill all fields and upload a PDF file.");
      return;
    }

    const data = new FormData();
    data.append("examName", formData.examName);
    data.append("courseCode", formData.courseCode);
    data.append("batch", formData.batch);
    data.append("pdf", formData.pdf);

    try {
      setIsUploading(true);
      setUploadProgress(0); // Reset progress bar

      const response = await axios.post(
        "https://mahfuj-sir.vercel.app/results",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      if (response.status === 200) {
        alert("PDF uploaded successfully!");
        setFormData({ examName: "", courseCode: "", batch: "", pdf: null });
        setUploadProgress(0); // Reset progress bar
      } else {
        alert("PDF upload failed. Please try again.");
      }
    } catch (error) {
      alert(
        "Error uploading PDF: " + (error.response?.data?.error || error.message)
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="lg:mx-4 mt-16 lg:mt-0">
      <div className="flex justify-center items-center py-8 bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Upload Exam Result
          </h2>

          {/* Exam Name */}
          <div className="mb-4">
            <label
              htmlFor="examName"
              className="block text-gray-600 font-medium mb-2"
            >
              Exam Name
            </label>
            <input
              type="text"
              id="examName"
              name="examName"
              value={formData.examName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Course Code */}
          <div className="mb-4">
            <label
              htmlFor="courseCode"
              className="block text-gray-600 font-medium mb-2"
            >
              Course Code
            </label>
            <input
              type="text"
              id="courseCode"
              name="courseCode"
              value={formData.courseCode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Batch */}
          <div className="mb-4">
            <label
              htmlFor="batch"
              className="block text-gray-600 font-medium mb-2"
            >
              Batch
            </label>
            <select
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select Batch
              </option>
              {[2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* PDF Upload */}
          <div className="mb-6">
            <label
              htmlFor="pdf"
              className="block text-gray-600 font-medium mb-2"
            >
              Upload PDF
            </label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf"
              required
            />
          </div>

          {/* Upload Progress Bar */}
          {uploadProgress > 0 && (
            <div className="mb-4">
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-center text-gray-600 mt-2">
                Uploading... {uploadProgress}%
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isUploading}
              className={`w-full font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                isUploading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {isUploading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExamResult;
