import img from "../../assets/home.jpg";
import CareerObjective from "./CareerObjective/CareerObjective";
import ProfileSection from "./ProfileSection/ProfileSection";

const Home = () => {
  return (
    <div>
      <div>
        <img className=" h-[400px] w-full" src={img} alt="" />
      </div>
      <div>
        <ProfileSection></ProfileSection>
        <CareerObjective></CareerObjective>
      </div>
    </div>
  );
};

export default Home;
