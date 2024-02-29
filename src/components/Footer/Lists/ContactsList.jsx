import { useTranslation } from "react-i18next";
import { FooterLinks } from "./Lists.styled";

const ContactsList = () => {
  const { t } = useTranslation();

  const array = [
    {
      link: "https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D0%BA%D0%B0+%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D1%8C%D0%BE%D0%B2%D0%B0,+10,+%D0%9A%D0%B8%D1%97%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0",
      address: `${t("footer.address")}`,
    },
    {
      link: "mailto:1919titan@gmail.com",
      address: "1919titan@gmail.com",
    },
    {
      link: "tel:380993190493",
      address: "+38 099 319 04 93",
    },
  ];
  return (
    <ul>
      {array.map((item, index) => (
        <li key={index} style={{ width: "240px" }}>
          <FooterLinks
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.address}
          </FooterLinks>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
