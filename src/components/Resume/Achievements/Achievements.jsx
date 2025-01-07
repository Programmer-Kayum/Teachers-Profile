import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Achievements = () => {
  return (
    <div>
      <SectionTitle heading={" Awards and SCHOLARSHIPS"}></SectionTitle>
      <div className="p-6 bg-gray-50">
        <ul className="list-decimal  space-y-4">
          <li>
            <p className="font-bold text-lg">
              Bangabandhu Gold Medal Award, 2023
            </p>
            <p className="text-gray-700">
              Funded by: Agrani Bank, University of Rajshahi, Bangladesh.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Prime Minister Gold Medal Award, 2018
            </p>
            <p className="text-gray-700">
              Funded by: University Grants Commission (UGC), Bangladesh.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">UGC Merit Scholarship, 2018</p>
            <p className="text-gray-700">
              Funded by: University Grants Commission (UGC), Bangladesh.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              Dean’s List Award (Both B.Sc. (each academic year) and M.Sc.)
            </p>
            <p className="text-gray-700">
              Funded by: Faculty of Engineering, Rajshahi University,
              Bangladesh.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              University Merit Scholarship (several times)
            </p>
            <p className="text-gray-700">
              Funded by: Rajshahi University, Bangladesh.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">
              NST Research Fellowship during M.Sc. (Engg.) Thesis
            </p>
            <p className="text-gray-700">
              Funded by: Ministry of Science and Technology, People’s Republic
              of Bangladesh.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
