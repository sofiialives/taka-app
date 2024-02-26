import { useTranslation } from "react-i18next";
import { HeaderNavLink } from "./Header.styled.js";
import { NavListStyled, NavStyled } from "./Header.styled.js";
import { useEffect, useState } from "react";
import Scroll from "../Scroll/Scroll.jsx";

const HeaderNav = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <Scroll array={navigation} header={true} />
      )}
    </NavStyled>
  );
};

export default HeaderNav;
