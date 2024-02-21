import { useTranslation } from "react-i18next";
import { MissionText, MissionTitle } from "./TextSection.styled";
import MissionList from "./MissionList";

const TextSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <MissionTitle>{t("mission.mission")}</MissionTitle>
      <MissionText>{t("mission.missionText")}</MissionText>
      <MissionList />
    </div>
  );
};

export default TextSection;
