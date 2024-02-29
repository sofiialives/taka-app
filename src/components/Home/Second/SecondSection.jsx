import { useMediaQuery } from "react-responsive";
import Icon from "../../Icon";
import { SectionBackground } from "./SecondSection.styled";

const SecondSection = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  return (
    <SectionBackground>
      <div className="container">
        {isDesktop ? null : <Icon id="logo" className="logo-icon" />}
      </div>
    </SectionBackground>
  );
};

export default SecondSection;
