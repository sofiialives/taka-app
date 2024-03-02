import first from "assets/images/exfirst.png";
import second from "assets/images/exsecond.png";
import third from "assets/images/exthird.png";
import fourth from "assets/images/exfourth.png";
import fifth from "assets/images/exfifth.png";
import sixth from "assets/images/exsixth.png";
import { ExList } from "./Exibition.styled";

const ExibitionList = () => {
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

export default ExibitionList;
