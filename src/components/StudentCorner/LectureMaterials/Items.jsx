import { Link } from "react-router-dom";

const Items = ({ batch }) => {
  const {
    batchYear,
    pdf = "No PDF",
    Assignment = "No Assignment",
    ctMark = "No CT Marks",
    midMark = "No Mid Marks",
  } = batch;

  return (
    <div className="flex gap-4 mx-20">
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <Link to={`/pdfs/${batchYear}`}>
          <h2 className="text-lg font-semibold text-blue-600 hover:underline">
            {pdf}
          </h2>
        </Link>
      </div>
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">{Assignment}</h2>
      </div>
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">{ctMark}</h2>
      </div>
      <div className="p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">{midMark}</h2>
      </div>
    </div>
  );
};

export default Items;
