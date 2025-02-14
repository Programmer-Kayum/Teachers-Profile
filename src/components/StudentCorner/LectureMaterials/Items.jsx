import { Link } from "react-router-dom";

const Items = ({ batch }) => {
  return (
    <div className="flex gap-4 mx-20">
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <Link to={`/pdfs/${batch.batchYear}`}>
          <h2 className="text-lg font-semibold text-blue-600 hover:underline">
            {batch.pdf}
          </h2>
        </Link>
      </div>
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <Link to={`/assignment/${batch.batchYear}`}>
          <h2 className="text-lg font-semibold text-gray-700">
            {batch.assignment}
          </h2>
        </Link>
      </div>
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <Link to={`/result/${batch.batchYear}`}>
          <h2 className="text-lg font-semibold text-gray-700">
            {batch.result}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Items;
