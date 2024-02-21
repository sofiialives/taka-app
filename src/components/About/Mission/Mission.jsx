import { MissionContainer } from "./Mission.styled";
import PhotoSection from "./PhotoSection/PhotoSection";
import TextSection from "./TextSection/TextSection";

const Mission = () => {
  return (
    <section className="section">
      <MissionContainer className="container">
        <TextSection />
        <PhotoSection />
      </MissionContainer>
    </section>
  );
};

export default Mission;
