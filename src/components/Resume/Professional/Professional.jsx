import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Professional = () => {
  return (
    <div>
      <SectionTitle heading={" PROFESSIONAL EXPERIENCES"}></SectionTitle>
      <div className="p-6 bg-gray-50">
        <ul className="space-y-4 list-decimal">
          <li>
            <p className="font-bold text-lg">Lecturer, Dept. of ECE</p>
            <p className="text-gray-700">
              Hajee Mohammad Danesh Science and Technology University (HSTU),
              Dinajpur-5200, Bangladesh
            </p>
            <p className="text-gray-500">November 16, 2022 to Present</p>
          </li>
          <li>
            <p className="font-bold text-lg">Lecturer, Dept. of CSE</p>
            <p className="text-gray-700">
              University of Information Technology & Sciences (UITS),
              Dhaka-1212, Bangladesh
            </p>
            <p className="text-gray-500">April 10, 2022 to November 15, 2022</p>
          </li>
          <li>
            <p className="font-bold text-lg">Lecturer, Dept. of CSE</p>
            <p className="text-gray-700">
              Central University of Science & Technology (CUST), Dhaka-1216,
              Bangladesh
            </p>
            <p className="text-gray-500">March 20, 2022 to April 09, 2022</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Professional;
