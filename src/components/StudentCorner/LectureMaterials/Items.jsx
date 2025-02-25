import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Items = ({ batch }) => {
  const { batchYear, courseCode, key } = batch;
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileAccess = (type) => {
    const userKey = prompt("Please enter the batch key:");

    if (userKey === key) {
      alert("Access granted!");
      navigate(`/${type}/${batchYear}/${courseCode}`);
    } else {
      setError("Invalid key. You do not have access.");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-20">
      {error && <p className="text-red-500">{error}</p>}
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <button onClick={() => handleFileAccess("pdfs")}>
          <h2 className="text-sm sm:text-lg font-semibold text-blue-600 hover:underline">
            {batch.pdf}
          </h2>
        </button>
      </div>
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <button onClick={() => handleFileAccess("result")}>
          <h2 className="text-sm sm:text-lg font-semibold text-gray-700">
            {batch.result}
          </h2>
        </button>
      </div>
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <button onClick={() => handleFileAccess("assignment")}>
          <h2 className="text-sm sm:text-lg font-semibold text-gray-700">
            {batch.assignment}
          </h2>
        </button>
      </div>
    </div>
  );
};

export default Items;
