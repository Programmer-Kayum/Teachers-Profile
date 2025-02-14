import { useState } from "react";
import axios from "axios";

const AddExamResult = () => {
  const [formData, setFormData] = useState({
    examName: "",
    examCategory: "",
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
    data.append("examName", formData.examName);
    data.append("examCategory", formData.examCategory);
    data.append("batch", formData.batch);
    data.append("level", formData.level);
    data.append("semester", formData.semester);
    data.append("pdf", formData.pdf);

    try {
      const response = await axios.post("http://localhost:5000/results", data);
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
    <div className="mx-4">
      <div>
        <div className="flex justify-center items-center py-8 bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="w-1/2 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
              Upload Exam Details
            </h2>

            {/* Exam Name */}
            <div className="mb-4">
              <label
                htmlFor="examName"
                className="block text-gray-600 font-medium mb-2"
              >
                Exam Name
              </label>
              <select
                id="examName"
                name="examName"
                value={formData.examName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select Exam Name
                </option>
                <option>Midterm</option>
                <option>Final</option>
                <option>Quiz</option>
                <option>Assignment</option>
              </select>
            </div>

            {/* Exam Category */}
            <div className="mb-4">
              <label
                htmlFor="examCategory"
                className="block text-gray-600 font-medium mb-2"
              >
                Exam Category
              </label>
              <select
                id="examCategory"
                name="examCategory"
                value={formData.examCategory}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option>Theory</option>
                <option>Lab</option>
                <option>Practical</option>
              </select>
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
              >
                <option value="" disabled>
                  Select Batch
                </option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
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
                value={formData.level}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                value={formData.semester}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      </div>
    </div>
  );
};

export default AddExamResult;
