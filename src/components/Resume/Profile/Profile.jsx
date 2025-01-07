import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Profiles = () => {
  return (
    <div>
      <div>
        <SectionTitle heading={"SOCIAL NETWORK"}></SectionTitle>
      </div>
      <div className="p-6 bg-gray-50">
        <ul className="list-decimal  space-y-4">
          <li>
            <p className="font-bold text-lg">Google Scholar Profile</p>
            <p className="text-blue-600">
              URL:
              <a
                href="https://scholar.google.com/citations?user=GDMJGbcAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://scholar.google.com/citations?user=GDMJGbcAAAAJ&hl=en
              </a>
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">DBLP Profile</p>
            <p className="text-blue-600">
              URL:{" "}
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=57216972833"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://www.scopus.com/authid/detail.uri?authorId=57216972833
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profiles;
