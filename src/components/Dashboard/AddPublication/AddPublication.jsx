import { Link } from "react-router-dom";
import publication from "../../../assets/publication.png";

const AddPublication = () => {
  const handlePublicationSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const paper = form.paper.value;
    const category = form.category.value;
    const link = form.link.value;

    // Correctly format the data to send in the POST request
    const publicationData = {
      paper,
      category,
      link,
    };

    fetch("https://mahfuj-sir.vercel.app/publication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(publicationData), // Send the correct data
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside post response", data);
        if (data.insertedId) {
          alert("Publication added successfully");
          form.reset(); // Reset the form after successful submission
        }
      })
      .catch((error) => {
        console.error("Error submitting publication:", error);
      });
  };

  return (
    <div>
      {/* Headline */}
      <h2 className="text-center text-2xl font-bold text-gray-700 mt-8 mb-4">
        Add a New Publication
      </h2>

      <div className="flex justify-center mt-8 items-center lg:mb-10">
        <form
          onSubmit={handlePublicationSubmit}
          className="p-6 bg-white border rounded-lg shadow-md w-full mx-5"
        >
          <div className=" space-y-4">
            {/* Author */}
            <div>
              <label
                htmlFor="Paper"
                className="block text-gray-600 font-medium mb-1"
              >
                Paper
              </label>
              <input
                type="text"
                id="paper"
                name="paper"
                className="w-full py-5 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter paper details"
                required
              />
            </div>

            <div className="flex gap-4">
              {/* Category */}
              <div className="w-2/5">
                <label
                  htmlFor="category"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Journal">journal</option>
                  <option value="Conference">conference</option>
                </select>
              </div>

              {/* Link */}
              <div className="w-3/5">
                <label
                  htmlFor="link"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Link
                </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter publication link"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPublication;
