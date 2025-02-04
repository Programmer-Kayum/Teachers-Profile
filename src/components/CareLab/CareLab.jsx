import { useEffect, useState } from "react";
import img from "../../assets/careLab.jpg";
import sir from "../../assets/sir.jpg";
import Researcher from "./Researcher/Researcher";
const CareLab = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/researchers")
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
      });
  }, []);

  return (
    <div>
      <div className="mx-2">
        <img
          className="  lg:h-[400px] h-[200px] lg:mt-0 mt-16 w-full"
          src={img}
          alt="Student Corner"
        />
      </div>

      <div className="flex flex-col mx-8 mt-4 md:flex-row bg-gray-100 p-4 md:p-12 rounded-lg shadow-lg ">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            src={sir} // Replace with actual image path
            alt="Vice-Chancellor"
            className="lg:h-[300px] lg:w-[300px] bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 mt-6 md:mt-0 md:ml-8">
          <h2 className="text-lg md:text-xl  font-bold bg-blue-600 text-white p-2 rounded-md text-center md:text-left">
            <h2>Message from Supervisor</h2>
          </h2>
          <p className="mt-4 text-gray-700 text-justify">
            Welcome to the{" "}
            <span className="font-bold">
              "Center for Antenna Research and Electromagnetics (CARE) Lab"
            </span>
            . Our research focuses on patch antennas, photonics, and machine
            learning applications in antennas for next-generation communication.
            We explore AI-driven optimizations, photonics-based antennas, and
            advanced electromagnetic simulations to enhance antenna performance.
            Our goal is to push the boundaries of 5G, 6G, and intelligent
            antenna design. We invite passionate researchers to collaborate and
            innovate with us.
            {/* Add the full message here */}
          </p>

          {/* Profile Links */}
          <div className="mt-6">
            <h3 className="font-semibold">[Mahfujur Rahman] </h3>
            <div className="flex flex-col md:flex-row mt-2 ">
              <p>Antenna Researcher | Expert in Patch Antennas, Photonics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-10">
        <h2 className="text-2xl font-bold bg-orange-500 py-2 mx-5 rounded-t-lg text-center mb-2">
          Research Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Researcher key={member.email} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareLab;
