import { useTranslation } from "react-i18next";
import { FooterNavLinks } from "./Lists.styled";

const NavList = () => {
  const { t } = useTranslation();

  const navigation = [
    { to: "/", text: `${t("header.home")}` },
    { to: "/about", text: `${t("header.about")}` },
    { to: "/reviews", text: `${t("header.reviews")}` },
    { to: "/clients", text: `${t("header.clients")}` },
    { to: "/contacts", text: `${t("header.contacts")}` },
  ];

  return (
    <ul>
      {navigation.map((item, index) => (
        <li key={index}>
          <FooterNavLinks to={item.to}>{item.text}</FooterNavLinks>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
