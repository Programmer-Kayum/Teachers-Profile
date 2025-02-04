import { useState } from "react";

const AddBatchItem = () => {
  const [batchName, setBatchName] = useState(""); // ব্যাচ বছরের স্টেট
  const [course, setCourse] = useState(""); // কোর্সের স্টেট
  const [batchYear, setBatchYear] = useState(""); // ব্যাচ সেশনের স্টেট

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (batchName.trim() === "") {
      alert("Please enter a batch name!");
      return;
    }
    if (batchYear.trim() === "") {
      alert("Please enter a batch year!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/batches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          batchName,
          course,
          batchYear,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("New Batch Added:", data);
        alert("Batch added successfully!");
        setBatchName("");
        setCourse("");
        setBatchYear("");
      } else {
        alert("Error adding batch: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add batch");
    }
  };

  return (
    <div className="w-3/4 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        {/* Batch Name */}
        <input
          type="text"
          placeholder="Enter batch name (e.g., 2020)"
          value={batchName}
          onChange={(e) => setBatchName(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Course Name */}
        <input
          type="text"
          placeholder="Enter course name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Batch Year */}
        <input
          type="number"
          placeholder="Enter batch year"
          value={batchYear}
          onChange={(e) => setBatchYear(e.target.value)}
          min="2020" // minimum year constraint
          max="2050" // maximum year constraint
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
