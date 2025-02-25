import { useEffect, useState } from "react";
import img from "../../assets/careLab.jpg";
import sir from "../../assets/sir.jpg";
import Researcher from "./Researcher/Researcher";

const CareLab = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("https://mahfuj-sir.vercel.app/researchers")
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
      });
  }, []);

  const categories = ["MSC", "BSC", "Alumni"];

  return (
    <div>
      <div className="mx-2">
        <img
          className="lg:h-[400px] h-[200px] lg:mt-0 mt-16 w-full"
          src={img}
          alt="Student Corner"
        />
      </div>

      <div className="flex flex-col mx-8 mt-4 md:flex-row bg-gray-100 p-4 md:p-12 rounded-lg shadow-lg">
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            src={sir}
            alt="Vice-Chancellor"
            className="lg:h-[300px] lg:w-[300px] bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300"
          />
        </div>

        <div className="md:w-2/3 mt-6 md:mt-0 md:ml-8">
          <h2 className="text-lg md:text-xl font-bold bg-blue-600 text-white p-2 rounded-md text-center md:text-left">
            <h2>Message from Supervisor</h2>
          </h2>
          <p className="mt-4 text-gray-700 text-justify">
            Welcome to the
            <span className="font-bold">
              "Center for Antenna Research and Electromagnetics (CARE) Lab"{" "}
            </span>
            . Our research focuses on patch antennas, photonics, and machine
            learning applications in antennas for next-generation communication.
            We explore AI-driven optimizations, photonics-based antennas, and
            advanced electromagnetic simulations to enhance antenna performance.
            Our goal is to push the boundaries of 5G, 6G, and intelligent
            antenna design. We invite passionate researchers to collaborate and
            innovate with us.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold">[John Smith] </h3>
            <div className="flex flex-col md:flex-row mt-2">
              <p>Antenna Researcher | Expert in Patch Antennas, Photonics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="bg-blue-700 text-white text-lg font-bold text-center py-2 rounded">
                {category} Team
              </h2>
              <div className="grid grid-cols-2 mx-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers
                  .filter((member) => member.category === category)
                  .map((member) => (
                    <Researcher key={member._id} member={member} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareLab;
