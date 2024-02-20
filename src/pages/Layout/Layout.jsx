import { NavLink, Outlet } from "react-router-dom";
import HeaderNav from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Icon from "../../components/Icon";
import Language from "../../components/Header/Language/Language";
import { HeaderContainer, HeaderStyled } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <HeaderStyled>
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
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
