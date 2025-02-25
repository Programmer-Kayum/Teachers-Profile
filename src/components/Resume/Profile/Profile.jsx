import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import {
  FaGraduationCap,
  FaDatabase,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Profiles = () => {
  return (
    <div>
      <div>
        <SectionTitle heading={"SOCIAL NETWORK"}></SectionTitle>
      </div>
      <div className="p-6 bg-gray-50">
        <ul className="list-decimal space-y-4">
          <li>
            <p className="font-bold text-lg">Google Scholar Profile</p>
            <p className="text-blue-600">
              <a
                href="https://scholar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline flex items-center space-x-2"
              >
                <FaGraduationCap />
                <span>Google Scholar</span>
              </a>
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">ResearchGate Profile</p>
            <p className="text-blue-600">
              <a
                href="https://www.researchgate.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline flex items-center space-x-2"
              >
                <FaDatabase />
                <span>ResearchGate</span>
              </a>
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">LinkedIn Profile</p>
            <p className="text-blue-600">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline flex items-center space-x-2"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">GitHub Profile</p>
            <p className="text-blue-600">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline flex items-center space-x-2"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profiles;
