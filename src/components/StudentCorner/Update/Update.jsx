import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams(); // Correctly extract 'id' from URL params
  const [batchName, setBatchName] = useState("");
  const [course, setCourse] = useState("");
  const [batchYear, setBatchYear] = useState("");

  // Fetch batch data when the component mounts or when 'id' changes
  useEffect(() => {
    const fetchBatchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/batches/${id}`);
        const data = await response.json();

        if (response.ok && data) {
          setBatchName(data.batchName);
          setCourse(data.course);
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

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedBatch = { batchName, course, batchYear };

    // Update the batch data
    fetch(`http://localhost:5000/batches/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBatch),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated successfully");
        } else {
          alert("Update failed");
        }
      })
      .catch((error) => {
        console.error("Error updating batch:", error);
        alert("Failed to update batch");
      });
  };

  return (
    <div>
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
    </div>
  );
};

export default Update;
