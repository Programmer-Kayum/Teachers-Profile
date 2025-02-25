import img from "../../assets/resume.jpg";
import Achievements from "./Achievements/Achievements";
import Education from "./Education/Education";
import Professional from "./Professional/Professional";
import Profiles from "./Profile/Profile";
import ResearchInterest from "./ResearchInterest/ResearchInterest";
const Resume = () => {
  return (
    <div>
      <div>
        <img className="lg:h-[500px] w-full" src={img} alt="" />
      </div>

      <div className="lg:mx-12 mx-4 mt-4 mb-16">
        <Education></Education>
        <Professional></Professional>
        <ResearchInterest></ResearchInterest>
        <Achievements></Achievements>
        <Profiles></Profiles>
      </div>
    </div>
  );
};

export default Resume;
