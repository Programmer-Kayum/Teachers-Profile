import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Achievements = () => {
  return (
    <div>
      <SectionTitle heading={"AWARDS AND SCHOLARSHIPS"}></SectionTitle>
      <div className="p-6 bg-gray-50">
        <ul className="list-decimal space-y-4">
          <li>
            <p className="font-bold text-lg">
              Excellence in Research Award, 2023
            </p>
            <p className="text-gray-700">
              Funded by: XYZ Research Foundation, Country.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Outstanding Academic Achievement Award, 2021
            </p>
            <p className="text-gray-700">
              Funded by: ABC University, City, Country.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              National Science Scholarship, 2020
            </p>
            <p className="text-gray-700">
              Funded by: Ministry of Education, Country.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Best Paper Award, International Conference on Emerging
              Technologies, 2019
            </p>
            <p className="text-gray-700">Funded by: Global Tech Forum.</p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Graduate Research Fellowship, 2018
            </p>
            <p className="text-gray-700">
              Funded by: National Science Council, Country.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Innovation Grant for AI Research, 2017
            </p>
            <p className="text-gray-700">Funded by: Tech Innovators Fund.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
