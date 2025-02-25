import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import signUp from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://mahfuj-sir.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleInputChange = (event) => {
    const form = event.target.form;
    const email = form.email.value;
    const studentId = form.stu_id.value;

    const authorized = students.some(
      (student) => student.email === email && student.student_id === studentId
    );
    setIsAuthorized(authorized);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.confirmPassword.value;
    const studentId = form.stu_id.value;

    if (password !== password2) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!isAuthorized) {
      alert("You are not assigned.");
      return;
    }

    try {
      // Sign up with Firebase
      await createUser(email, password);

      // Send data to your backend for saving
      const response = await fetch("https://mahfuj-sir.vercel.app/new-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, studentId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      alert("Successfully Signed Up");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="my-2 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
        <div className="md:flex w-1/2 justify-center">
          <img src={signUp} alt="Sign Up Illustration" className="lg:h-80" />
        </div>

        <div className="w-full md:w-2/5">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Type your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="stu_id"
                className="block text-sm font-medium text-gray-700"
              >
                Student ID
              </label>
              <input
                type="text"
                id="stu_id"
                name="stu_id"
                required
                placeholder="Your student ID"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="password1"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password1"
                  name="password"
                  required
                  placeholder="Your password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-600"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="password2"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password2"
                name="confirmPassword"
                required
                placeholder="Confirm password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={!isAuthorized}
              className={`w-full px-6 py-2 rounded-lg border border-gray-300 mt-4 transition duration-300 ${
                isAuthorized
                  ? "bg-orange-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 hover:text-white"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?
            <Link to="/signIn" className="text-red-500 font-semibold">
              {" "}
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
