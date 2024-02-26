import { ClientsText } from "./Bar.styled";
import {
  ContactSection,
  NavLinkStyled,
} from "../Contacts/ContactForm/ContactForm.styled";
import Icon from "../Icon";

const Bar = ({ title, children }) => {
  return (
    <ContactSection className="section">
      <div className="container">
        <NavLinkStyled to="/">
          <Icon id="logo" className="logo-icon" />
        </NavLinkStyled>
        <ClientsText>{title}</ClientsText>
        {children}
      </div>
    </ContactSection>
  );
};

export default Bar;
