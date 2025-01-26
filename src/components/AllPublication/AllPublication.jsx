import { useEffect, useState } from "react";
import img from "../../assets/publication.png";
import ConferencePapers from "./ConferencePapers/ConferencePapers";
import JournalPapers from "./JournalPapers/JournalPapers";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AllPublication = () => {
  const [publication, setPublication] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/publication")
      .then((res) => res.json())
      .then((data) => {
        setPublication(data);
      });
  }, []);

  const conferences = publication.filter(
    (item) => item.category === "Conference"
  );
  const journals = publication.filter((item) => item.category === "Journal");

  return (
    <div>
      <div className="">
        <img className="h-[400px] w-full" src={img} alt="" />
      </div>

      <div className="mx-10 mt-4 mb-16 ">
        <SectionTitle heading={"Journal Papers "}></SectionTitle>
        <ul className="space-y-4 list-decimal ml-2 my-4">
          {journals.map((journal) => (
            <JournalPapers journal={journal} key={journal._id}></JournalPapers>
          ))}
        </ul>
      </div>

      <div className="mx-10 mt-4 mb-16 ">
        <SectionTitle heading={"Conference Papers"}></SectionTitle>
        <ul className="space-y-4 list-decimal ml-2 my-4">
          {conferences.map((conference) => (
            <ConferencePapers
              conference={conference}
              key={conference._id}
            ></ConferencePapers>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllPublication;
