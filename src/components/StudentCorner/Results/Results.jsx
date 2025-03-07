import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import pdfImg from "../../../assets/pdfBanner.webp";
import ResultPdf from "./ResultPdf";

const Results = () => {
  const [resultPdfs, setResultPdfs] = useState([]);
  const navigate = useNavigate();
  const { batchYear, courseCode } = useParams(); // Get batchYear from the URL
  useEffect(() => {
    fetch(`https://mahfuj-sir.vercel.app/results/${batchYear}/${courseCode}`)
      .then((res) => res.json())
      .then((data) => {
        setResultPdfs(data);
      })
      .catch((error) => {
        console.error("Error fetching PDFs:", error);
      });
  }, [batchYear, courseCode]);
  return (
    <div className="mx-4 lg:mx-8">
      {/* Banner Image */}
      <figure className="w-full my-2 ">
        <img
          src={pdfImg} // Change this to your actual image path
          alt="Course Banner"
          className="w-full lg:h-96 lg:mt-0 mt-20 object-cover rounded-lg shadow-md"
        />
      </figure>

      {/* Dynamic heading */}
      <SectionTitle heading={`Batch: ${batchYear} - (${courseCode})`} />

      <div className=" p-6 my-4  bg-white shadow-lg rounded-lg">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition"
        >
          ← Back
        </button>

        {/* PDFs List */}

        {Array.isArray(resultPdfs) && resultPdfs.length > 0 ? (
          resultPdfs.map((resultPdf) => (
            <ResultPdf key={resultPdf._id} resultPdf={resultPdf} />
          ))
        ) : (
          <p className="text-red-500 text-center font-semibold">
            No PDFs available now !!
          </p>
        )}
      </div>
    </div>
  );
};

export default Results;
