import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const ResearchInterest = () => {
  return (
    <div className="my-4">
      <SectionTitle heading={"RESEARCH INTEREST"}></SectionTitle>
      <ul className="list-decimal space-y-4 ml-8 text-lg">
        <li>
          <p className="font-bold text-lg">
            Artificial Intelligence in Communication Systems
          </p>
        </li>
        <li>
          <p className="font-bold text-lg">
            Quantum Computing for Data Security
          </p>
        </li>
        <li>
          <p className="font-bold text-lg">
            Internet of Things (IoT) in Smart Cities
          </p>
        </li>
        <li>
          <p className="font-bold text-lg">
            Renewable Energy Integration in Power Grids
          </p>
        </li>
        <li>
          <p className="font-bold text-lg">
            Autonomous Vehicle Communication Systems
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ResearchInterest;
