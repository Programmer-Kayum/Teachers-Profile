import { FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import signUp from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, SignByGoogle } = useContext(AuthContext);

  const handleSignUp = (events) => {
    events.preventDefault();
    setError(""); // Clear previous errors
    const form = events.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.confirmPassword.value;

    // Check if passwords match
    if (password !== password2) {
      setError("Passwords do not match.");
      return;
    }

    // Check password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Successfully Signed Up");
        setTimeout(() => {
          navigate("/signIn"); // Redirect to sign-in page
        }, 1000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage); // Show error message on UI
        console.log(errorMessage);
      });
  };
  const handleGoogleSignIn = () => {
    SignByGoogle()
      .then((result) => {
        console.log("Google Login Success:", result.user);
        alert("Signed in with Google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);
        setError(error.message);
      });
  };

  return (
    <div className="my-2 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
        {/* Left Illustration Section */}
        <div className=" md:flex w-1/2 justify-center">
          <img src={signUp} alt="Sign Up Illustration" className="lg:h-80" />
        </div>

        {/* Right Form Section */}
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
                placeholder="Your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
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
                placeholder="Your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
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
                placeholder="Confirm password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-500 px-6 py-2 rounded-lg border border-gray-300 mt-4 transition duration-300 
    hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 hover:text-white"
            >
              Sign Up
            </button>
          </form>
          <div className="flex flex-col items-center mt-6">
            <p className="text-gray-600">Or</p>
            <p className="text-gray-600">Sign Up with</p>

            <button
              onClick={handleGoogleSignIn}
              className="flex items-center shadow-lg gap-3 bg-white px-6 py-2 rounded-full border border-gray-300 mt-4 transition duration-300 
    hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 hover:text-white"
            >
              <FaGoogle className="text-red-600 text-xl" />
              <span className="font-medium">Continue with Google</span>
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?
            <Link to="/signIn" href="#" className="text-red-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
