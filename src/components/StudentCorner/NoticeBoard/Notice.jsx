import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const NoticeBoard = () => {
  const [notice, setNotice] = useState("");
  const [title, setTitle] = useState("");
  const [courseName, setCourseName] = useState("");
  const [batchName, setBatchName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (
      !title.trim() ||
      !courseName.trim() ||
      !batchName.trim() ||
      !notice.trim()
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://mahfuj-sir.vercel.app/notices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, courseName, batchName, content: notice }),
      });

      if (response.ok) {
        alert("Notice posted successfully!");
        setTitle("");
        setCourseName("");
        setBatchName("");
        setNotice("");
      } else {
        alert("Failed to post notice.");
      }
    } catch (error) {
      console.error("Error posting notice:", error);
      alert("An error occurred while posting the notice.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="mt-4  mb-12  relative px-4 md:px-8 lg:px-12 bg-gray-100 shadow-lg rounded-lg p-6">
      <SectionTitle heading={"NOTICE BOARD"}></SectionTitle>

      {/* Notice Title */}
      <div className="mt-8 ">
        <input
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
          type="text"
          placeholder="Notice Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Flex container for Course Name and Batch Name */}
      <div className="flex flex-col md:flex-row gap-4  mb-4">
        {/* Course Name */}
        <input
          className="w-full md:w-1/2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter Department Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />

        {/* Batch Name */}
        <input
          className="w-full md:w-1/2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Batch Name"
          value={batchName}
          onChange={(e) => setBatchName(e.target.value)}
        />
      </div>

      {/* Notice Content */}
      <textarea
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
        rows="4"
        placeholder="Write your notice here..."
        value={notice}
        onChange={(e) => setNotice(e.target.value)}
      ></textarea>

      {/* Submit Button */}
      <div className="flex justify-center mt-4">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-700 hover:text-gray-200"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          <FaPlus /> {isSubmitting ? "Posting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;
