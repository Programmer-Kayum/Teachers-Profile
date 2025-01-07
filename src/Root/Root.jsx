import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const Root = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      {/* Fixed Navbar */}
      <div className="h-full bg-base-800 shadow-lg md:col-span-1">
        {/* Show Navbar fixed for larger screens, full-width on mobile */}
        <div className="fixed w-full md:w-1/4 h-full">
          <NavBar />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="h-full lg:ml-10  overflow-auto md:col-span-3 md:ml-1/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
