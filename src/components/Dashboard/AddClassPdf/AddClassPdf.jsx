import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    year: "",
    courseName: "",
    courseCode: "",
    batch: "",
    level: "",
    semester: "",
    pdf: null,
  });

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
    data.append("courseName", formData.courseName);
    data.append("courseCode", formData.courseCode);
    data.append("batch", formData.batch);
    data.append("level", formData.level);
    data.append("semester", formData.semester);
    data.append("pdf", formData.pdf);

    try {
      const response = await axios.post("http://localhost:5000/upload", data);
      if (response.status === 200) {
        alert("PDF uploaded successfully!");
      } else {
        alert("PDF upload failed. Please try again.");
      }
    } catch (error) {
      alert("Error uploading PDF: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">PDF Upload</h1>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Upload Class PDF
        </h2>

        {/* Course Name */}
        <div className="mb-4">
          <label
            htmlFor="courseName"
            className="block text-gray-600 font-medium mb-2"
          >
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            placeholder="Enter course name"
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

        {/* Level */}
        <div className="mb-4">
          <label
            htmlFor="level"
            className="block text-gray-600 font-medium mb-2"
          >
            Level
          </label>
          <select
            id="level"
            name="level"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select Level
            </option>
            <option>Level 1</option>
            <option>Level 2</option>
            <option>Level 3</option>
            <option>Level 4</option>
          </select>
        </div>

        {/* Semester */}
        <div className="mb-4">
          <label
            htmlFor="semester"
            className="block text-gray-600 font-medium mb-2"
          >
            Semester
          </label>
          <select
            id="semester"
            name="semester"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select Semester
            </option>
            <option>Semester 1</option>
            <option>Semester 2</option>
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
