import img from "../../assets/studentCorners.jpg";
import Courses from "./Courses/Courses";
import NoticeBoard from "./NoticeBoard/NoticeBoard";

const StudentCorner = () => {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <NoticeBoard></NoticeBoard>
        <Courses></Courses>
      </div>
    </div>
  );
};

export default StudentCorner;
