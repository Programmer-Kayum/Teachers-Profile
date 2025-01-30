import axios from "axios";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

import ClassPdf from "./ClassPdf";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Courses = () => {
  const [classPdfs, setClassPdfs] = useState([]);

  const { batchYear } = useParams(); // Accessing the batchNo from URL

  useEffect(() => {
    // Fetching PDFs based on batchNo
    fetch(`http://localhost:5000/pdfs/${batchYear}`)
      .then((res) => res.json())
      .then((data) => {
        setClassPdfs(data); // Store the fetched PDFs in the state
      })
      .catch((error) => {
        console.error("Error fetching PDFs:", error);
      });
  }, [batchYear]); // Re-fetch whenever batchNo changes

  return (
    <div className="mx-8">
      <SectionTitle heading={""}></SectionTitle>

      <div>
        {classPdfs.map((classPdf) => (
          <ClassPdf key={classPdf._id} classPdf={classPdf} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
