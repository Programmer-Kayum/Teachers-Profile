import img from "../../assets/home.jpg";
import CareerObjective from "./CareerObjective/CareerObjective";
import ProfileSection from "./ProfileSection/ProfileSection";

const Home = () => {
  return (
    <div>
      <div>
        <img
          className=" lg:h-[400px] h-[200px] lg:mt-0 mt-16 w-full"
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
