import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

export default function Education() {
  return (
    <div>
      <div>
        <SectionTitle heading={"EDUCATION"}></SectionTitle>
      </div>
      <div className="p-6 bg-gray-50">
        <ul className="space-y-4 list-decimal">
          <li>
            <p className="lg:font-bold font-semibold text-lg">
              M.Sc. Engg. in Electronics and Communication Engineering, 2022
            </p>
            <p className="text-gray-700">XYZ University, City, Country</p>
          </li>
          <li>
            <p className="lg:font-bold font-semibold text-lg">
              B.Sc. Engg. in Electronics and Communication Engineering, 2020
            </p>
            <p className="text-gray-700">XYZ University, City, Country</p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Higher Secondary Certificate (HSC), 2016
            </p>
            <p className="text-gray-700">ABC College, City, Country</p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Secondary School Certificate (SSC), 2014
            </p>
            <p className="text-gray-700">DEF High School, City, Country</p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Secondary School Certificatejhffhtjfgj (SSC), 2014
            </p>
            <p className="text-gray-700">DEF High School, City, Country</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
