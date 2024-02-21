import { useTranslation } from "react-i18next";
import { StackListStyled, StackTitle } from "./Stack.styled";

const StackList = () => {
  const { t } = useTranslation();
  const items = [
    {
      title: `${t("stack.who")}`,
      text: `${t("stack.whoText")}`,
    },
    {
      title: `${t("stack.what")}`,
      text: `${t("stack.whatText")}`,
    },
    {
      title: `${t("stack.technology")}`,
      text: `${t("stack.technologyText")}`,
    },
    {
      title: `${t("stack.quality")}`,
      text: `${t("stack.qualityText")}`,
    },
  ];
  return (
    <StackListStyled>
      {items.map((item, index) => (
        <li key={index}>
          <StackTitle>{item.title}</StackTitle>
          <p>{item.text}</p>
        </li>
      ))}
    </StackListStyled>
  );
};

export default StackList;
