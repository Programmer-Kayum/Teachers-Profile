import { FaExternalLinkAlt } from "react-icons/fa";

const JournalPapers = ({ journal }) => {
  const { paper, link } = journal;

  // Highlight name logic
  const highlightName = (text) => {
    const nameToBold = "Mahfujur Rahman*";
    const regex = new RegExp(`(${nameToBold})`, "gi"); // Regular Expression
    return text.replace(regex, "<strong>$1</strong>");
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-2 md:p-6 text-justify">
      <li className="p-4 bg-white shadow-md rounded-lg border text-justify border-gray-200 text-sm sm:text-base md:text-lg">
        {/* Display paper details with bolded name */}
        <p
          className="text-gray-800 text-justify"
          dangerouslySetInnerHTML={{
            __html: highlightName(paper),
          }}
        />

        <p className="text-gray-700 font-bold text-orange-500 mt-2 flex items-center gap-1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-orange-600 transition flex items-center gap-1"
          >
            <FaExternalLinkAlt className="text-sm" /> Read more
          </a>
        </p>
      </li>
    </div>
  );
};

export default JournalPapers;
