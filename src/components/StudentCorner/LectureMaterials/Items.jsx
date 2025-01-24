import { Link } from "react-router-dom";

const Items = ({ batch }) => {
  return (
    <div className="flex gap-4 mx-20">
      <div className=" p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <Link to={"/pdf"}>
          <h2 className="text-lg font-semibold text-gray-700">{batch.pdf}</h2>
        </Link>
      </div>
      <div className=" p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">
          {batch.Assignment}
        </h2>
      </div>
      <div className=" p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">{batch.ctMark}</h2>
      </div>
      <div className=" p-2 bg-gray-50 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">{batch.midMark}</h2>
      </div>
    </div>
  );
};

export default Items;
