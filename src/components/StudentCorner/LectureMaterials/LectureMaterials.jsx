import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import CourseIteam from "./CourseIteam";

const LectureMaterials = ({ batch, onDelete, course }) => {
  return (
    <div className="lg:my-8 my-4 mx-4 lg:mx-14">
      <div className="text-center ">
        <div className="collapse collapse-arrow bg-base-200 group">
          <input type="checkbox" />
          <div className="collapse-title text-2xl bg-blue-500  font-bold flex justify-between items-center">
            {/* Title: Batch Name */}
            <h2 className="lg:flex-1 text-lg md:text-xl lg:text-2xl">
              {batch.batchName}
            </h2>
          </div>
          <div className="collapse-content ">
            {/* Section Title for Course */}
            <SectionTitle
              heading={`${batch.course} (${batch.courseCode})`}
            ></SectionTitle>

            {/* Course Item */}
            <CourseIteam
              batch={batch}
              course={course}
              onDelete={onDelete}
            ></CourseIteam>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureMaterials;
