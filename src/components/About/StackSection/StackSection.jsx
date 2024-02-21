import woman from "assets/images/woman.png";
import StackList from "./StackList";
import { StackDiv, StackImg } from "./Stack.styled";

const StackSection = () => {
  return (
    <section className="section">
      <StackDiv className="container">
        <StackList />
        <StackImg src={woman} alt="woman" />
      </StackDiv>
    </section>
  );
};

export default StackSection;
