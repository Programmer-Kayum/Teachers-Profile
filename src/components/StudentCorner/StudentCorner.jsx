import img from "../../assets/studentCorners.jpg";
// import Courses from "./Courses/Courses";
import LectureMaterials from "./LectureMaterials/LectureMaterials";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import useMenu from "../../Hook/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const StudentCorner = () => {
  // const batches = useMenu();
  const [batches, setBatches] = useState([]);
  useEffect(() => {
    fetch("batches.json")
      .then((res) => res.json())
      .then((data) => {
        setBatches(data);
      });
  }, []);

  const handleEdit = (id) => {
    console.log("Edit clicked for batch ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for batch ID:", id);
  };

  return (
    <div>
      <img src={img} alt="Student Corner" />
      <div className="mx-8">
        <NoticeBoard />
        {/* <Courses></Courses> */}

        {/* Correctly map over the batches array */}
        <div>
          <div className="my-4">
            <SectionTitle
              heading={"LECTURE MATERIALS AND MARKS"}
            ></SectionTitle>
          </div>

          <div className="my-2">
            {batches.map((batch) => (
              <LectureMaterials
                key={batch.id}
                onEdit={handleEdit}
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
