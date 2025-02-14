import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const Root = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      {/* Navbar for large devices and Header for small devices */}
      <div className="h-full bg-base-800 shadow-lg md:col-span-1">
        {/* Navbar will be fixed on large devices, for small devices, it's shown as header */}
        <div className="w-full h-full md:w-1/4 md:h-full">
          {/* For small devices: Navbar will be shown at the top */}
          <div className="block md:hidden fixed top-0 left-0 w-full z-50">
            <NavBar />
          </div>
          {/* For large devices: Navbar stays as sidebar */}
          <div className="hidden md:block fixed top-0 mx-auto ml-8 h-full">
            <NavBar />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="h-full  overflow-auto md:col-span-3 md:ml-1/4 md:pl-4">
        {/* Content will scroll with the rest of the page */}
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
