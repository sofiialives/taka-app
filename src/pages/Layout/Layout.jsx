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
import { useMediaQuery } from "react-responsive";

const Layout = () => {
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [hideScroll, setHideScroll] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 1439px)",
  });

  useEffect(() => {
    if (location.pathname === "/about/" && isMobile) {
      setHideHeader(true);
    }

    if (isDesktop && location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }

    if (!isDesktop) {
      setIsHome(true);
    }

    if (location.pathname === "/") {
      setHideScroll(true);
    } else {
      setHideScroll(false);
    }
  }, [isDesktop, isMobile, location.pathname, hideScroll]);
  return (
    <>
      <HeaderStyled hide={hideHeader} isHome={isHome}>
        <HeaderContainer className="container">
          <NavLink to="/">
            <Icon className="logo-icon" id="logo" />
          </NavLink>
          <HeaderNav hideScroll={hideScroll} />
          <Language isHome={isHome}/>
        </HeaderContainer>
      </HeaderStyled>
      <main>
        <Outlet />
      </main>
      <FooterStyled isHome={hideScroll}>
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
