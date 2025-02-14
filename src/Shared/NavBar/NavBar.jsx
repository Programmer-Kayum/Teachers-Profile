import { NavLink } from "react-router-dom";
import sir from "../../assets/sir.jpg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Successfully logged out");
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
      });
  };

  const navOption = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive
                ? "text-yellow-500 font-semibold"
                : "hover:text-yellow-500"
            }`
          }
          aria-label="Home"
        >
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive
                ? "text-yellow-500 font-semibold"
                : "hover:text-yellow-500"
            }`
          }
          aria-label="RESUME"
        >
          RESUME
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/publication"
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive
                ? "text-yellow-500 font-semibold"
                : "hover:text-yellow-500"
            }`
          }
          aria-label="PUBLICATIONS"
        >
          PUBLICATIONS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/studentCorner"
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive
                ? "text-yellow-500 font-semibold"
                : "hover:text-yellow-500"
            }`
          }
          aria-label="STUDENT'S CORNER"
        >
          STUDENT'S CORNER
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tools"
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive
                ? "text-yellow-500 font-semibold"
                : "hover:text-yellow-500"
            }`
          }
          aria-label="TOOLS & UTILITIES"
        >
          TOOLS & UTILITIES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/careLab"
          className={({ isActive }) =>
            `transition-colors duration-300 ${
              isActive
                ? "text-yellow-500 font-semibold"
                : "hover:text-yellow-500"
            }`
          }
          aria-label="careLab"
        >
          CARE LAB
        </NavLink>
      </li>

      {/* Dashboard only for specific email */}
      {(user?.email === "kayum.ece.hstu@gmail.com" ||
        user?.email === "mahfujurrahmanruice@gmail.com") && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-yellow-500 font-semibold"
                  : "hover:text-yellow-500"
              }`
            }
            aria-label="Dashboard"
          >
            DASHBOARD
          </NavLink>
        </li>
      )}

      {/* Conditional Rendering for Auth */}
      {user ? (
        <li>
          <button
            onClick={handleLogout}
            className="transition-colors duration-300 hover:text-yellow-500 relative"
          >
            LOG OUT
            {user?.email && (
              <span className="absolute -bottom-3 left-1/5 transform -translate-x-1/2 text-xs text-orange-500">
                {user.email}
              </span>
            )}
          </button>
        </li>
      ) : (
        <>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "hover:text-yellow-500"
                }`
              }
              aria-label="signin"
            >
              SIGN IN
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-teal-950 lg:rounded-md text-white font-bold  lg:h-screen text-2xl w-full ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-10 w-16 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 lg:hidden  px-2">
            <h1>Mahfujur Rahman</h1>
          </div>
          <div className="hidden h-full   lg:block">
            <div className="lg:mt-16 mx-4 font-bold text-4xl">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-36 h-36 rounded-full ring ring-offset-2">
                  <img className="w-32 h-32" src={sir} />
                </div>
              </div>
              <h1 className="ml-6 pt-2">
                Mahfujur <br />
                <span className="ml-28 text-orange-600"> Rahman</span>
              </h1>
            </div>
            <ul className="lg:mt-8">
              {/* Navbar menu content here */}
              <div className="space-y-4 mt-10 ml-12 my-2">{navOption}</div>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side  ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-teal-950 text-white space-y-4 font-bold p-8 min-h-full w-60 p-4">
          {/* Sidebar content here */}
          {navOption}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
