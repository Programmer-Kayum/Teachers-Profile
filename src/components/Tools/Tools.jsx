import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    year: "",
    pdf: null,
  });

  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    fetchPdfs();
  }, []);

  const fetchPdfs = async () => {
    const { data } = await axios.get("http://localhost:5000/pdfs");
    setPdfs(data);
  };

  const handleChange = (e) => {
    if (e.target.name === "pdf") {
      setFormData({ ...formData, pdf: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("class", formData.class);
    data.append("year", formData.year);
    data.append("pdf", formData.pdf);

    await axios.post("http://localhost:5000/upload", data);
    fetchPdfs();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">PDF Upload</h1>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-md w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="class"
          placeholder="Class"
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded-md"
          required
        />
        <input
          type="file"
          name="pdf"
          accept="application/pdf"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Upload PDF
        </button>
      </form>

      {/* Uploaded PDFs List */}
      <h2 className="text-2xl font-semibold mt-6">Uploaded PDFs</h2>
      <div className="mt-4 w-full max-w-lg">
        {pdfs.map((pdf) => (
          <div
            key={pdf._id}
            className="bg-white p-4 shadow-md rounded-md mb-2 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{pdf.courseName}</p>
              <p className="text-sm text-gray-600">
                {pdf.courseCode} | {pdf.batch}
              </p>
            </div>
            <a
              href={`http://localhost:5000/${pdf.filePath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
