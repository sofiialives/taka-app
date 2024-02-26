import first from "../../assets/images/firstclient.png";
import second from "assets/images/secondclient.png";
import third from "assets/images/thirdclient.png";
import fourth from "assets/images/fourthclient.png";
import fifth from "assets/images/fifthclient.png";
import sixth from "assets/images/sixthclient.png";
import seventh from "assets/images/seventhclient.png";
import eighth from "assets/images/eighthclient.png";
import ninth from "assets/images/ninthclient.png";
import tenth from "assets/images/tenthclient.png";
import { useTranslation } from "react-i18next";
import {
  FirstList,
  ImageWidth,
  ImageWidthFirst,
  ImageWidthSecond,
  RestList,
} from "./Clients.styled";
import Bar from "../Bar/Bar";

const ClientsList = () => {
  const { t } = useTranslation();
  const clients = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
  ];

  const firstClients = clients.slice(0, 4);
  const restClients = clients.slice(4);

  return (
    <Bar title={t("clients.clients")}>
      <FirstList>
        {firstClients.map((item, index) => (
          <ImageWidth key={index}>
            <ImageWidthFirst src={item} alt={`client-${index}`} />
          </ImageWidth>
        ))}
      </FirstList>
      <RestList>
        {restClients.map((item, index) => (
          <li key={index}>
            <ImageWidthSecond src={item} alt={`client-${index + 4}`} />
          </li>
        ))}
      </RestList>
    </Bar>
  );
};

export default ClientsList;
