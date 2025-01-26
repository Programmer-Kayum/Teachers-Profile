import axios from "axios";
import React from "react";

const AddClassPdf = () => {
  // Fix the function name to 'handleSubmit'
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    // Get form values
    const courseName = form.courseName.value.trim();
    const courseCode = form.courseCode.value.trim();
    const batch = form.batch.value;
    const level = form.level.value;
    const semester = form.semester.value;
    const pdf = form.pdf.files[0];

    // Basic validation
    if (!courseName || !courseCode || !batch || !level || !semester || !pdf) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("courseCode", courseCode);
    formData.append("batch", batch);
    formData.append("level", level);
    formData.append("semester", semester);
    formData.append("file", pdf);

    try {
      // Send POST request with FormData using axios
      const result = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Handle success
      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        form.reset(); // Reset the form after successful upload
      } else {
        alert("Failed to upload PDF. Please try again.");
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
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
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
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
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
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
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
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
  );
};

export default AddClassPdf;
