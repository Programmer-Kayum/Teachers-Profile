const AddExamResult = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const examName = form.examName.value;
    const examCategory = form.examCategory.value;
    const batch = form.batch.value;
    const level = form.level.value;
    const semester = form.semester.value;
    const pdf = form.pdf.files[0];

    console.log({ examName, examCategory, batch, level, semester, pdf });
  };
  return (
    <div className="mx-4">
      {/* Section  */}
      <div>
        <div className="flex  justify-center items-center py-8  bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="w-1/2 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
              Upload Exam Details
            </h2>

            {/* Exam Name */}
            <div className="mb-4">
              <label
                htmlFor="examName"
                className="block text-gray-600 font-medium mb-2"
              >
                Exam Name
              </label>
              <select
                id="examName"
                name="examName"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled selected>
                  Select Exam Name
                </option>
                <option>Midterm</option>
                <option>Final</option>
                <option>Quiz</option>
                <option>Assignment</option>
              </select>
            </div>

            {/* Exam Category */}
            <div className="mb-4">
              <label
                htmlFor="examCategory"
                className="block text-gray-600 font-medium mb-2"
              >
                Exam Category
              </label>
              <select
                id="examCategory"
                name="examCategory"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled selected>
                  Select Category
                </option>
                <option>Theory</option>
                <option>Lab</option>
                <option>Practical</option>
              </select>
            </div>

            {/* Batch */}
            <div className="mb-4">
              <label
                htmlFor="batch"
                className="block text-gray-600 font-medium mb-2"
              >
                Batch
              </label>
              <select
                id="batch"
                name="batch"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled selected>
                  Select Batch
                </option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
              </select>
            </div>

            {/* Level */}
            <div className="mb-4">
              <label
                htmlFor="level"
                className="block text-gray-600 font-medium mb-2"
              >
                Level
              </label>
              <select
                id="level"
                name="level"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled selected>
                  Select Level
                </option>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
                <option>Level 4</option>
              </select>
            </div>

            {/* Semester */}
            <div className="mb-4">
              <label
                htmlFor="semester"
                className="block text-gray-600 font-medium mb-2"
              >
                Semester
              </label>
              <select
                id="semester"
                name="semester"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled selected>
                  Select Semester
                </option>
                <option>Semester 1</option>
                <option>Semester 2</option>
              </select>
            </div>

            {/* PDF Upload */}
            <div className="mb-6">
              <label
                htmlFor="pdf"
                className="block text-gray-600 font-medium mb-2"
              >
                Upload PDF
              </label>
              <input
                type="file"
                id="pdf"
                name="pdf"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept=".pdf"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExamResult;
