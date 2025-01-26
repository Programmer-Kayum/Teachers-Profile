const ConferencePapers = ({ conference }) => {
  console.log(conference.paper);

  const { paper, link } = conference;

  // Highlight name logic
  const highlightName = (text) => {
    const nameToBold = "Mahfujur Rahman";
    const regex = new RegExp(`(${nameToBold})`, "gi"); // Regular Expression
    return text.replace(regex, "<strong>$1</strong>");
  };

  return (
    <div>
      <li className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
        {/* Display paper details with bolded name */}
        <p
          dangerouslySetInnerHTML={{
            __html: highlightName(paper),
          }}
        />

        <p className="text-gray-700 font-bold text-orange-500">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Read more...
          </a>
        </p>
      </li>
    </div>
  );
};

export default ConferencePapers;
