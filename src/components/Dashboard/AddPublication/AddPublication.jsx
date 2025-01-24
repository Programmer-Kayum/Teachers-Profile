import { Link } from "react-router-dom";

const AddPublication = () => {
  const handlePublicationSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const author = form.author.value;
    const supervisor = form.supervisor.value;
    const category = form.category.value;
    const title = form.title.value;
    const place = form.place.value;
    const date = form.date.value;
    const link = form.link.value;

    console.log(author, supervisor, category, title, place, date, link);

    // Correctly format the data to send in the POST request
    const publicationData = {
      author,
      supervisor,
      category,
      title,
      place,
      date,
      link,
    };

    fetch("http://localhost:5000/publication", {
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
      <div className="relative bg-gray-100 mx-4 mb-4 rounded-lg shadow-lg overflow-hidden">
        {/* Banner Image */}
        <img
          src="https://via.placeholder.com/1200x400" // Replace this with your image URL
          alt="Uploaded Section"
          className="w-full h-64 object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            Publication Uploaded Section
          </h2>
          <p className="text-sm md:text-lg mt-2">
            Manage all your uploaded publications here.
          </p>
          <Link to={"/publication"}>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 text-sm md:text-md font-bold rounded-md transition duration-300">
              SEE ALL
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center lg:mb-10">
        <form
          onSubmit={handlePublicationSubmit}
          className="p-6 bg-white border rounded-lg shadow-md w-full mx-5"
        >
          <div className="space-y-4">
            {/* Author */}
            <div>
              <label
                htmlFor="author"
                className="block text-gray-600 font-medium mb-1"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter author name"
                required
              />
            </div>
            <div className="flex gap-4">
              {/* Supervisor */}
              <div className="w-1/2">
                <label
                  htmlFor="supervisor"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Supervisor
                </label>
                <input
                  type="text"
                  id="supervisor"
                  name="supervisor"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter supervisor name"
                  required
                />
              </div>
              {/* Category */}
              <div className="w-1/2">
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
            </div>
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-gray-600 font-medium mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter publication title"
                required
              />
            </div>
            <div className="flex gap-4">
              {/* Place */}
              <div className="w-1/2">
                <label
                  htmlFor="place"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Place
                </label>
                <input
                  type="text"
                  id="place"
                  name="place"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter place of publication"
                  required
                />
              </div>
              {/* Publication Date */}
              <div className="w-1/2">
                <label
                  htmlFor="date"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Publication Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            {/* Link */}
            <div>
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
