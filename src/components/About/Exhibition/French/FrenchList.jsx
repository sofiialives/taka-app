import { ExList } from "../Exibition.styled";
import first from "assets/images/firstfrench.png";
import second from "assets/images/secondfrench.png";
import third from "assets/images/thirdfrench.png";
import fourth from "assets/images/fourthfrench.png";
import fifth from "assets/images/fifthfrench.png";
import sixth from "assets/images/sixthfrench.png";

const FrenchList = () => {
  const exs = [first, second, third, fourth, fifth, sixth];
  return (
    <ExList>
      {exs.map((ex, index) => (
        <li key={index}>
          <img src={ex} alt="exibition" />
        </li>
      ))}
    </ExList>
  );
};

export default FrenchList;
