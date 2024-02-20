import { useTranslation } from "react-i18next";
import { HeaderNavLink } from "./Header.styled.js";
import { NavListStyled, NavStyled } from "./Header.styled";

const HeaderNav = () => {
  const { t } = useTranslation();

  const navigation = [
    { route: "/", component: `${t("header.home")}` },
    { route: "/about", component: `${t("header.about")}` },
    { route: "/gallery", component: `${t("header.gallery")}` },
    { route: "/clients", component: `${t("header.clients")}` },
    { route: "/contacts", component: `${t("header.contacts")}` },
  ];

  return (
    <NavStyled>
      <NavListStyled>
        {navigation.map((item, index) => (
          <li key={index}>
            <HeaderNavLink to={item.route}>{item.component}</HeaderNavLink>
          </li>
        ))}
      </NavListStyled>
    </NavStyled>
  );
};

export default HeaderNav;
