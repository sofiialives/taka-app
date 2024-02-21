import { useTranslation } from "react-i18next";
import { MissionPreText, MissionText } from "./TextSection.styled";

const MissionList = () => {
  const { t } = useTranslation();
  const missions = [
    { title: `${t("mission.values")}`, text: `${t("mission.valuesText")}` },
    { title: `${t("mission.trust")}`, text: `${t("mission.trustText")}` },
    {
      title: `${t("mission.potentional")}`,
      text: `${t("mission.potentialText")}`,
    },
  ];
  return (
    <ul>
      {missions.map((mission, index) => (
        <li key={index}>
          <MissionPreText>{mission.title}</MissionPreText>
          <MissionText>{mission.text}</MissionText>
        </li>
      ))}
    </ul>
  );
};

export default MissionList;
