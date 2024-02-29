import { useTranslation } from "react-i18next";
import { AdvantagyContainer, AdvantagyTitle } from "./Advantagy.styled";
import ImageList from "./ImageList";
import AdvantagyListComponent from "./AdvantagyListComponent";

const AdvantagyDesk = () => {
  const { t } = useTranslation();
  return (
    <section className="section">
      <div className="container">
        <AdvantagyTitle className="animated-text">{t("home.advantagy")}</AdvantagyTitle>
        <AdvantagyContainer>
          <ImageList />
          <AdvantagyListComponent />
        </AdvantagyContainer>
      </div>
    </section>
  );
};

export default AdvantagyDesk;
