import { useTranslation } from "react-i18next";
import { HeaderNavLink } from "./Header.styled.js";
import { NavListStyled, NavStyled } from "./Header.styled.js";
import Scroll from "../Scroll/Scroll.jsx";
import { useMediaQuery } from "react-responsive";

const HeaderNav = ({ hideScroll }) => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const navigation = [
    { route: "/", component: `${t("header.home")}` },
    { route: "/about", component: `${t("header.about")}` },
    { route: "/reviews", component: `${t("header.reviews")}` },
    { route: "/clients", component: `${t("header.clients")}` },
    { route: "/contacts", component: `${t("header.contacts")}` },
  ];

  return (
    <NavStyled>
      {isDesktop ? (
        <NavListStyled>
          {navigation.map((item, index) => (
            <li key={index}>
              <HeaderNavLink to={item.route}>{item.component}</HeaderNavLink>
            </li>
          ))}
        </NavListStyled>
      ) : (
        !hideScroll && <Scroll array={navigation} header={true} />
      )}
    </NavStyled>
  );
};

export default HeaderNav;
