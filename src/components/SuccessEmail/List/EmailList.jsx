import { useTranslation } from "react-i18next";
import { EmailListStyled, EmailText, EmailTitle } from "./List.styled";

const EmailList = () => {
  const { t } = useTranslation();
  const contacts = [
    {
      title: `${t("contacts.visit")}`,
      text: `${t("footer.address")}`,
      secondText: `${t("contacts.phone")}: +38 099 319 04 93`,
    },
    {
      title: `${t("contacts.connect")}`,
      text: `${t("contacts.connectText")}`,
      secondText: "Email: 1919titan@gmail.com",
    },
  ];
  return (
    <EmailListStyled>
      {contacts.map((contact, index) => (
        <li key={index}>
          <EmailTitle>{contact.title}</EmailTitle>
          <EmailText>{contact.text}</EmailText>
          <EmailText>{contact.secondText}</EmailText>
        </li>
      ))}
    </EmailListStyled>
  );
};

export default EmailList;
