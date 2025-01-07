import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const ResearchInterest = () => {
  return (
    <div className="my-4">
      <SectionTitle heading={"RESEARCH INTEREST"}></SectionTitle>
      <ul className="list-decimal  space-y-4 ml-8 text-lg ">
        <li>
          <p className="font-bold text-lg">Ultra-wideband (UWB) antennas</p>
        </li>
        <li>
          <p className="font-bold text-lg">Implantable antennas</p>
        </li>
        <li>
          <p className="font-bold text-lg">5G/mm-Wave antennas</p>
        </li>
        <li>
          <p className="font-bold text-lg">SATCOM antennas</p>
        </li>
        <li>
          <p className="font-bold text-lg">
            Body-centric wireless communications
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ResearchInterest;
