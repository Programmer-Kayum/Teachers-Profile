import img from "../../assets/home.jpg";
import CareerObjective from "./CareerObjective/CareerObjective";
import ProfileSection from "./ProfileSection/ProfileSection";

const Home = () => {
  return (
    <div>
      <div>
        <img
          className=" lg:h-[500px] mt-16 lg:mt-0 h-[300px] w-full"
          src={img}
          alt=""
        />
      </div>
      <div>
        <ProfileSection></ProfileSection>
        <CareerObjective></CareerObjective>
      </div>
    </div>
  );
};

export default Home;
