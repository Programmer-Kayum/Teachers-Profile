import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams(); // URL থেকে 'id' বের করা
  const [batchName, setBatchName] = useState("");
  const [course, setCourse] = useState("");
  const [courseCode, setCourseCode] = useState(""); // ✅ নতুন state যোগ করা হলো
  const [batchYear, setBatchYear] = useState("");

  // যখন কম্পোনেন্ট লোড হবে, তখন ব্যাচের ডাটা ফেচ করবে
  useEffect(() => {
    const fetchBatchData = async () => {
      try {
        const response = await fetch(
          `https://mahfuj-sir.vercel.app/batches/${id}`
        );
        const data = await response.json();

        if (response.ok && data) {
          setBatchName(data.batchName);
          setCourse(data.course);
          setCourseCode(data.courseCode); // ✅ courseCode সেট করা হচ্ছে
          setBatchYear(data.batchYear);
        } else {
          console.error("Batch not found or error fetching data", data);
        }
      } catch (error) {
        console.error("Error fetching batch data:", error);
      }
    };

    if (id) {
      fetchBatchData();
    } else {
      console.error("Batch ID is not available in URL");
    }
  }, [id]);

  // ব্যাচ আপডেট করার ফাংশন
  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedBatch = { batchName, course, courseCode, batchYear };

    fetch(`https://mahfuj-sir.vercel.app/batches/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBatch),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update Response:", data); // Debugging লজ
        if (data) {
          alert("✅ Updated successfully!");
        } else {
          alert("❌ No changes detected. Please modify some fields.");
        }
      });
  };

  return (
    <div className="w-3/4 mx-auto">
      <form onSubmit={handleUpdate} className="flex flex-col gap-4 p-4">
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

        {/* Course Code */}
        <input
          type="text"
          placeholder="Enter course code"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Batch Year */}
        <input
          type="number"
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

export default Update;
