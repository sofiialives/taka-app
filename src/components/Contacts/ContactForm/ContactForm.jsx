import { useTranslation } from "react-i18next";
import Icon from "../../Icon";
import {
  ContactContainer,
  ContactSection,
  ContactTextQustion,
  FormTitle,
  NavLinkStyled,
} from "./ContactForm.styled";
import FormContact from "./Form/Form";
import EmailList from "../../SuccessEmail/List/EmailList";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <ContactSection className="section">
      <ContactContainer className="container">
        <NavLinkStyled to="/">
          <Icon id="logo" className="logo-icon" />
        </NavLinkStyled>
        <div>
          <FormTitle>{t("contacts.message")}</FormTitle>
          <ContactTextQustion>{t("contacts.question")}</ContactTextQustion>
          <FormContact />
        </div>
        <EmailList />
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactForm;
