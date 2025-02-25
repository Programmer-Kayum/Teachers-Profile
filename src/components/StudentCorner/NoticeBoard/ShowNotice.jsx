import { useState } from "react";
import { jsPDF } from "jspdf";
import { formatDate } from "./utils";

const ShowNotice = ({ notice }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { title, courseName, content, createdAt } = notice;

  // Function to generate the PDF
  const generatePDF = () => {
    try {
      setIsGenerating(true);
      const doc = new jsPDF();

      // University Header (Top)
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text(
        "Hajee Mohammad Danesh Science and Technology University",
        105,
        20,
        { align: "center" }
      );

      // Department
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`Department of ${courseName}`, 105, 30, { align: "center" });

      // Notice Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("NOTICE", 105, 40, { align: "center" });

      // Horizontal Line
      doc.setLineWidth(0.5);
      doc.line(20, 45, 190, 45);

      // Move content to center of the page
      let contentY = 90;

      // Subject
      doc.setFontSize(12);
      doc.text("Subject:", 40, contentY);
      doc.setFont("helvetica", "normal");
      const titleLines = doc.splitTextToSize(title, 130);
      doc.text(titleLines, 60, contentY);

      contentY += titleLines.length * 7 + 10; // Move down

      // Content
      const contentLines = doc.splitTextToSize(content, 150);
      doc.text(contentLines, 40, contentY);

      contentY += contentLines.length * 7 + 20; // Move down

      // Posted Date
      doc.setFontSize(10);
      doc.text(`Posted on: ${formatDate(createdAt)}`, 105, 270, {
        align: "center",
      });

      // Save the PDF
      doc.save(`notice-${formatDate(createdAt)}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mt-5  mx-auto">
      <div className="px-2 mb-6 border flex justify-between mx-4 rounded-lg shadow-md bg-white">
        {/* Subject and Content */}
        <div className="text-center mt-6">
          <h4 className="font-bold text-lg mb-2"> {title}</h4>
        </div>
        {/* Date */}
        <div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Posted on: {formatDate(createdAt)}
          </p>
        </div>
        {/* Download Button */}
        <div className="flex justify-center my-6">
          <button
            onClick={generatePDF}
            disabled={isGenerating}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4  rounded-lg transition duration-300"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Generating...
              </span>
            ) : (
              "Download as PDF"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowNotice;
