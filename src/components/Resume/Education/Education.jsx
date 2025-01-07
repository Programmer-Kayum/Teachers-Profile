import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

export default function Education() {
  return (
    <div>
      <div>
        <SectionTitle heading={"EDUCATION"}></SectionTitle>
      </div>
      <div className="p-6 bg-gray-50">
        <ul className="space-y-4 list-decimal  space-y-4">
          <li>
            <p className="font-bold text-lg">
              M.Sc. Engg. in Information and Communication Engineering (ICE),
              2020
            </p>
            <p className="text-gray-700">
              University of Rajshahi, Rajshahi-6205, Bangladesh
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              B.Sc. Engg. in Information and Communication Engineering (ICE),
              2018
            </p>
            <p className="text-gray-700">
              University of Rajshahi, Rajshahi-6205, Bangladesh
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Higher Secondary School Certificate (HSC), 2013
            </p>
            <p className="text-gray-700">
              Dhaka Model College, Dhaka-1206, Bangladesh
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Secondary School Certificate (SSC), 2011
            </p>
            <p className="text-gray-700">
              Khalealampur D.S. Alim Madrasah, Chapainawabganj, Bangladesh
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
