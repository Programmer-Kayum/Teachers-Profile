import { useState } from "react";

const AddBatchItem = () => {
  const [batchName, setBatchName] = useState(""); // ব্যাচ নামের স্টেট
  const [course, setCourse] = useState(""); // কোর্সের স্টেট
  const [courseCode, setCourseCode] = useState(""); // কোর্স কোডের স্টেট
  const [batchYear, setBatchYear] = useState(""); // ব্যাচ বছরের স্টেট
  const [key, setBatchKey] = useState(""); // সিক্রেট কী স্টেট

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!batchName.trim()) {
      alert("Please enter a batch name!");
      return;
    }
    if (!batchYear.trim()) {
      alert("Please enter a batch year!");
      return;
    }
    if (!key.trim()) {
      alert("Please enter a batch secret key!");
      return;
    }

    const batchData = {
      batchName,
      course,
      courseCode,
      batchYear,
      key,
    };

    console.log("Sending Data to Server:", batchData); // ডাটা যাচ্ছে কিনা চেক করার জন্য

    try {
      const response = await fetch("https://mahfuj-sir.vercel.app/batches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(batchData),
      });

      const data = await response.json();
      console.log("Server Response:", data); // সার্ভার থেকে রেসপন্স চেক

      if (response.ok) {
        alert("Batch added successfully!");

        // স্টেট রিসেট
        setBatchName("");
        setCourse("");
        setCourseCode("");
        setBatchYear("");
        setBatchKey("");
      } else {
        alert("Error adding batch: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add batch");
    }
  };

  return (
    <div className="lg:w-1/2 w-4/5 mx-auto bg-white my-24 shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Course and Batch Information
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
      >
        {/* Batch Name */}
        <label htmlFor="batchName" className="text-gray-700 font-semibold">
          Batch Name
        </label>
        <input
          type="text"
          id="batchName"
          placeholder="Enter batch name (e.g. ECE 2020)"
          value={batchName}
          onChange={(e) => setBatchName(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Course Name */}
        <label htmlFor="course" className="text-gray-700 font-semibold">
          Course Name
        </label>
        <input
          type="text"
          id="course"
          placeholder="Enter course title (e.g. Digital Signal Processing)"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Course Code */}
        <label htmlFor="courseCode" className="text-gray-700 font-semibold">
          Course Code
        </label>
        <input
          type="text"
          id="courseCode"
          placeholder="Enter course code (e.g. ECE 207)"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Batch Secret Key */}
        <label htmlFor="batchKey" className="text-gray-700 font-semibold">
          Batch Secret Key
        </label>
        <input
          type="text"
          id="batchKey"
          placeholder="Enter a secret key for this batch"
          value={key}
          onChange={(e) => setBatchKey(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Batch Year */}
        <label htmlFor="batchYear" className="text-gray-700 font-semibold">
          Batch Year
        </label>
        <input
          type="number"
          id="batchYear"
          placeholder="Enter batch year"
          value={batchYear}
          onChange={(e) => setBatchYear(e.target.value)}
          min="2020"
          max="2050"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBatchItem;
