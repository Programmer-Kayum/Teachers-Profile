import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Professional = () => {
  return (
    <div>
      <SectionTitle heading={"PROFESSIONAL EXPERIENCES"}></SectionTitle>
      <div className="p-6 bg-gray-50">
        <ul className="space-y-4 list-decimal">
          <li>
            <p className="font-bold text-lg">
              Assistant Professor, Dept. of XYZ
            </p>
            <p className="text-gray-700">ABC University, City, Country</p>
            <p className="text-gray-500">January 01, 2023 to Present</p>
          </li>
          <li>
            <p className="font-bold text-lg">Lecturer, Dept. of XYZ</p>
            <p className="text-gray-700">
              DEF Institute of Technology, City, Country
            </p>
            <p className="text-gray-500">June 15, 2021 to December 31, 2022</p>
          </li>
          <li>
            <p className="font-bold text-lg">Lecturer, Dept. of XYZ</p>
            <p className="text-gray-700">GHI University, City, Country</p>
            <p className="text-gray-500">March 01, 2020 to June 14, 2021</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Professional;
