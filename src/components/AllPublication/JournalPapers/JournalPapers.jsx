import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const JournalPapers = () => {
  return (
    <div>
      <SectionTitle heading={"Journal Papers"}></SectionTitle>
      <div>
        <ul className="space-y-4 list-decimal ml-2 my-4">
          <li>
            <p className="font-bold text-lg">
              Fahim Shahriyar Abir, Rubina Parveen, Md Samiul Islam, Md.
              Abubakar Siddik, Mahfujur Rahman*, "An antenna with
              second-iteration fractal patch and parallel-plane grounds for
              UWB/X/Ku/K band applications," Telematics and Informatics Reports,
              Elsevier (Q2, CS:1.9, Scopus Indexed), vol. 16, no. 100174, pp.
              1-9, November 2024.
            </p>
            <p className="text-gray-700 font-bold text-orange-500">
              <a href=""> Read more...</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JournalPapers;
