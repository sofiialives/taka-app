import { useTranslation } from "react-i18next";
import ContactsList from "./ContactsList";
import NavList from "./NavList";
import { FooterListStyled, FooterTitle } from "./Lists.styled";

const FooterList = () => {
  const { t } = useTranslation();
  const navigation = [
    { title: `${t("header.contacts")}`, array: <ContactsList /> },
    { title: `${t("header.nav")}`, array: <NavList /> },
  ];
  return (
    <FooterListStyled>
      {navigation.map((item, index) => (
        <li key={index}>
          <FooterTitle>{item.title}</FooterTitle>
          {item.array}
        </li>
      ))}
    </FooterListStyled>
  );
};

export default FooterList;
