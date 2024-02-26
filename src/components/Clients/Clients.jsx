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
  ContactSection,
  NavLinkStyled,
} from "../Contacts/ContactForm/ContactForm.styled";
import Icon from "../Icon";
import {
  ClientsText,
  FirstList,
  ImageWidth,
  ImageWidthSecond,
  RestList,
} from "./Clients.styled";

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
  const resClients = clients.slice(4);
  return (
    <ContactSection className="section">
      <div className="container">
        <NavLinkStyled to="/">
          <Icon id="logo" className="logo-icon" />
        </NavLinkStyled>
        <ClientsText>{t("clients.clients")}</ClientsText>
        <FirstList>
          {firstClients.map((item, index) => (
            <ImageWidth key={index}>
              <img src={item} alt="client" />
            </ImageWidth>
          ))}
        </FirstList>
        <RestList>
          {resClients.map((item, index) => (
            <li key={index}>
              <ImageWidthSecond src={item} alt="client" />
            </li>
          ))}
        </RestList>
      </div>
    </ContactSection>
  );
};

export default ClientsList;
