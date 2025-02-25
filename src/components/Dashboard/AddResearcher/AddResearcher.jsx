import { useState } from "react";

const AddResearcher = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    category: "",
    batch: "",
    mobile: "",
    email: "",
    gender: "",
    image: null,
  });

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = "";

    if (formData.image && formData.image instanceof File) {
      setUploading(true);
      const imgbbFormData = new FormData();
      imgbbFormData.append("image", formData.image);
      try {
        const imgbbResponse = await fetch(image_hosting_api, {
          method: "POST",
          body: imgbbFormData,
        });
        const imgbbResult = await imgbbResponse.json();
        if (imgbbResult.success) {
          imageUrl = imgbbResult.data.url;
        } else {
          alert("Image upload failed. Please try again.");
          setUploading(false);
          return;
        }
      } catch (err) {
        console.error("Error uploading image:", err);
        alert("Image upload error");
        setUploading(false);
        return;
      }
    } else {
      alert("No image file selected");
      return;
    }

    const finalData = { ...formData, image: imageUrl };

    try {
      const response = await fetch(
        "https://mahfuj-sir.vercel.app/researchers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalData),
        }
      );

      if (response.ok) {
        alert("Researcher added successfully!");
        setFormData({
          name: "",
          title: "",
          category: "",
          batch: "",
          mobile: "",
          email: "",
          gender: "",
          image: null,
        });
      } else {
        alert("Failed to add researcher.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="lg:w-2/4 w-4/5 my-20 mx-auto shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Add Researcher</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        {[
          {
            label: "Name",
            name: "name",
            type: "text",
            placeholder: "Enter full name",
          },
          {
            label: "Title",
            name: "title",
            type: "text",
            placeholder: "Enter title (e.g., Professor, Lecturer)",
          },
          {
            label: "Batch",
            name: "batch",
            type: "text",
            placeholder: "Enter batch (e.g., 2020)",
          },
          {
            label: "Mobile",
            name: "mobile",
            type: "tel",
            placeholder: "Enter mobile number",
          },
          {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter email address",
          },
        ].map((field, index) => (
          <div key={index}>
            <label className="text-gray-700 font-semibold">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <label className="text-gray-700 font-semibold">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="MSC">MSC</option>
          <option value="BSC">BSC</option>
          <option value="AlumniStudent">Alumni Student</option>
        </select>

        <label className="text-gray-700 font-semibold">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label className="text-gray-700 font-semibold">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
        />

        {uploading && (
          <p className="text-blue-500 text-center">
            Uploading... {uploadProgress}%
          </p>
        )}

        <button
          type="submit"
          className={`px-4 py-2 ${
            uploading ? "bg-gray-500" : "bg-blue-500"
          } text-white rounded-lg hover:bg-blue-600 transition`}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddResearcher;
