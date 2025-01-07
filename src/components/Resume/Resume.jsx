import img from "../../assets/resume.jpg";
import Achievements from "./Achievements/Achievements";
import Education from "./Education/Education";
import Professional from "./Professional/Professional";
import Profiles from "./Profile/Profile";
import Publication from "./Publication/Publication";
import ResearchInterest from "./ResearchInterest/ResearchInterest";
const Resume = () => {
  return (
    <div>
      <div>
        <img className="h-[400px] w-full" src={img} alt="" />
      </div>

      <div className="mx-12 mt-4 mb-16">
        <Education></Education>
        <Professional></Professional>
        <ResearchInterest></ResearchInterest>
        <Achievements></Achievements>
        <Profiles></Profiles>
        <Publication></Publication>
      </div>
    </div>
  );
};

export default Resume;
