import { NavLink, Outlet, useLocation } from "react-router-dom";
import HeaderNav from "../../components/Header/Header";
import Icon from "../../components/Icon";
import Language from "../../components/Header/Language/Language";
import {
  FooterContainer,
  FooterStyled,
  HeaderContainer,
  HeaderStyled,
} from "./Layout.styled";
import FooterList from "../../components/Footer/Lists/FooterList";
import Logo from "../../components/Footer/Logo";
import Connection from "../../components/Footer/Connection/Connection";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setHideHeader(
        location.pathname.startsWith("/about/") && window.innerWidth < 1440
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);
  return (
    <>
      <HeaderStyled hide={hideHeader}>
        <HeaderContainer className="container">
          <NavLink to="/">
            <Icon className="logo-icon" id="logo" />
          </NavLink>
          <HeaderNav />
          <Language />
        </HeaderContainer>
      </HeaderStyled>
      <main>
        <Outlet />
      </main>
      <FooterStyled>
        <FooterContainer className="footer-container">
          <FooterList />
          <Logo />
          <Connection />
        </FooterContainer>
      </FooterStyled>
    </>
  );
};

export default Layout;
