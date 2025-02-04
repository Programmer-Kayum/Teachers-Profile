import img from "../../assets/studentCorners.jpg";
// import Courses from "./Courses/Courses";
import LectureMaterials from "./LectureMaterials/LectureMaterials";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const StudentCorner = () => {
  const [batches, setBatches] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/batches")
      .then((res) => res.json())
      .then((data) => {
        // Sort the data based on batchYear in descending order
        const sortedData = data.sort((a, b) => a.batchYear - b.batchYear);
        setBatches(sortedData); // Set the sorted data
      });
  }, []);

  const handleDelete = (_id) => {
    console.log("delete", _id);

    fetch(`http://localhost:5000/batches/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          alert("Successfully deleted");
          const remaining = batches.filter((user) => user._id !== _id);
          setBatches(remaining);
        }
      });
  };

  return (
    <div>
      <img src={img} alt="Student Corner" />
      <div className="mx-8 mb-20">
        <NoticeBoard />
        {/* <Courses></Courses> */}

        {/* Correctly map over the batches array */}
        <div>
          <div className="mt-4">
            <SectionTitle heading={"LECTURE MATERIALS AND MARKS"} />
          </div>

          <div className="my-2">
            {batches.map((batch) => (
              <LectureMaterials
                key={batch.id}
                onDelete={handleDelete}
                batch={batch}
              ></LectureMaterials>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCorner;
