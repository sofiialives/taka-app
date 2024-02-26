import { useTranslation } from "react-i18next";
import { EmailBtn, TextContainer, TextEmailStyled } from "./Email.styled";
import EmailList from "./List/EmailList";

const TextEmail = () => {
  const { t } = useTranslation();
  return (
    <section className="section">
      <div className="container">
        <TextContainer>
          <TextEmailStyled>{t("contacts.notifySuccess")}</TextEmailStyled>
          <EmailList />
        </TextContainer>
        <EmailBtn to="/">{t("header.home")}</EmailBtn>
      </div>
    </section>
  );
};

export default TextEmail;
