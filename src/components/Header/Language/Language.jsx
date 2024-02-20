import { useTranslation } from "react-i18next";
import { LangList, LangBtn } from "./Language.styled";

const Language = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "EN" },
    { code: "ua", name: "UA" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <LangList>
      {languages.map((item, index) => (
        <li key={index}>
          <LangBtn onClick={() => changeLanguage(item.code)}>
            {item.name}
          </LangBtn>
        </li>
      ))}
    </LangList>
  );
};

export default Language;
