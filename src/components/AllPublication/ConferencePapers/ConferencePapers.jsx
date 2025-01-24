const ConferencePapers = ({ conference }) => {
  const { author, supervisor, title, place, publicationDate, link } =
    conference;

  return (
    <div>
      <li className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
        <p>
          {author},<span className="font-bold text-lg">{supervisor},</span>
          {title}, {place}, {publicationDate}
        </p>

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
