import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import CourseIteam from "./CourseIteam";

const LectureMaterials = ({ batch, onDelete, course }) => {
  return (
    <div className="my-2">
      <div className="text-center space-y-4">
        <div className="collapse collapse-arrow bg-base-200 group">
          {/* Add 'group' class to the parent div */}
          <input type="checkbox" />
          <div className="collapse-title mx-4 text-2xl bg-orange-400 font-bold flex justify-between items-center">
            <h2 className="flex-1">{batch.batchName}</h2>
          </div>
          <div className="collapse-content">
            {/* Display batch course and related information */}
            <SectionTitle heading={batch.course}></SectionTitle>
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
