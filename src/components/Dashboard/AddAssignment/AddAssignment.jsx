import { useState } from "react";
import axios from "axios";

const AddAssignment = () => {
  const [formData, setFormData] = useState({
    assignmentName: "",
    batch: "",
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

    // Validation: Ensure all fields are filled
    if (!formData.assignmentName || !formData.batch || !formData.pdf) {
      alert("Please fill in all fields and upload a PDF.");
      return;
    }

    const data = new FormData();
    data.append("assignmentName", formData.assignmentName);
    data.append("batch", formData.batch);
    data.append("pdf", formData.pdf);

    try {
      const response = await axios.post(
        "http://localhost:5000/assignment",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        alert("Assignment uploaded successfully!");
      } else {
        alert("Failed to upload assignment. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading assignment:", error);
      alert("Error uploading assignment: " + error.message);
    }
  };

  return (
    <div className="mx-4">
      <div className="flex justify-center items-center py-8 bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Upload Assignment Details
          </h2>

          {/* Assignment Name */}
          <div className="mb-4">
            <label
              htmlFor="assignmentName"
              className="block text-gray-600 font-medium mb-2"
            >
              Assignment Name
            </label>
            <input
              type="text"
              id="assignmentName"
              name="assignmentName"
              value={formData.assignmentName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
};

export default AddAssignment;
