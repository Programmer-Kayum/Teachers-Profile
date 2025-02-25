import { useState } from "react";
import axios from "axios";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    courseCode: "",
    batch: "",
    pdf: null,
  });

  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress

  const handleChange = (e) => {
    if (e.target.name === "pdf") {
      setFormData({ ...formData, pdf: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("courseName", formData.name); // ✅ 'name' ঠিক করা হলো
    data.append("courseCode", formData.courseCode); // ✅ 'courseCode' ঠিক করা হলো
    data.append("batch", formData.batch);
    data.append("pdf", formData.pdf);

    try {
      const response = await axios.post(
        "https://mahfuj-sir.vercel.app/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            // Calculate the percentage of the upload
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent); // Update progress state
          },
        }
      );
      if (response.status === 200) {
        alert("✅ PDF uploaded successfully!");
      } else {
        alert("❌ PDF upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("❌ Error uploading PDF: " + error.message);
    }
  };

  return (
    <div className="min-h-screen lg:mt-0 mt-16 flex flex-col items-center bg-gray-100 p-6">
      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Upload Class PDF
        </h2>

        {/* File Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 font-medium mb-2"
          >
            File Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter file name"
            value={formData.name}
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
            placeholder="Enter course code"
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
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>

        {/* PDF Upload */}
        <div className="mb-6">
          <label htmlFor="pdf" className="block text-gray-600 font-medium mb-2">
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

        {/* Upload Progress */}
        {uploadProgress > 0 && (
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <div className="text-center text-sm text-gray-700 mt-2">
              {uploadProgress}% Uploaded
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
