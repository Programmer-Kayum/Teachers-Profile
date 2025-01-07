import img from "../../assets/publication.png";
import ConferencePapers from "./ConferencePapers/ConferencePapers";
import JournalPapers from "./JournalPapers/JournalPapers";

const AllPublication = () => {
  return (
    <div>
      <div className="">
        <img className="h-[400px] w-full" src={img} alt="" />
      </div>
      <div className="mx-12 mt-4 mb-16 ">
        <JournalPapers></JournalPapers>
        <ConferencePapers></ConferencePapers>
      </div>
    </div>
  );
};

export default AllPublication;
