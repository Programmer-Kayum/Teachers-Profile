import { FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import signUp from "../../assets/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser, SignByGoogle } = useContext(AuthContext);

  // Handle Normal Email & Password Sign-In
  const handleSignIn = (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("Logged in:", result.user);
        alert("Successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
        setError(error.message);
      });
  };

  // Handle Google Sign-In
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
        <div className="md:flex w-1/2 justify-center">
          <img src={signUp} alt="Sign In Illustration" className="lg:h-80" />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-2/5">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Please Sign In
          </h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleSignIn} className="space-y-4">
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
                placeholder="Your email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Your password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-600"
                  aria-label="Toggle Password Visibility"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg border border-gray-300 mt-4 transition duration-300 
              hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 hover:text-white"
            >
              Sign In
            </button>
          </form>

          {/* Social Login Section */}
          <div className="flex flex-col items-center mt-6">
            <p className="text-gray-600">Or</p>
            <p className="text-gray-600">Sign In with</p>

            <button
              onClick={handleGoogleSignIn}
              className="flex items-center shadow-lg gap-3 px-6 py-2 rounded-full border border-gray-300 mt-4 transition duration-300 
              bg-white hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 hover:text-white"
            >
              <FaGoogle className="text-red-600 text-xl" />
              <span className="font-medium">Continue with Google</span>
            </button>
          </div>

          {/* Footer */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-red-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
