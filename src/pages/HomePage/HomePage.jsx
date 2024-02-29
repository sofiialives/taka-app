/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Start from "components/Home/StartMobile/Start";
import SecondSection from "components/Home/Second/SecondSection";
import ThirdSection from "components/Home/Third/ThirdSection";
import FourthSection from "components/Home/Fourth/Fourth";
import Advantagy from "components/Home/Advantagy/Advantagy";
import Section from "./Section";
import AdvantagyDesk from "../../components/Home/AdvantagyDesktop/Advantagy";

const HomePage = () => {
  const navigate = useNavigate();
  const [animationStarted, setAnimationStarted] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const animationTimeout = useRef(null);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const handleButtonClick = () => {
    setAnimationStarted(true);

    if (!isDesktop) {
      animateSections(0);
    }
  };

  const sectionsData = [
    {
      key: "start",
      content: isDesktop ? null : (
        <Start handleButtonClick={handleButtonClick} />
      ),
    },
    {
      key: "section2",
      content: <SecondSection />,
    },
    {
      key: "section3",
      content: <ThirdSection />,
    },
    { key: "section4", content: <FourthSection /> },
    {
      key: "section5",
      content: isDesktop ? <AdvantagyDesk /> : <Advantagy />,
    },
  ];

  const animateSections = useCallback(async (index) => {
    setCurrentSectionIndex(index);
    if (index < sectionsData.length - 1) {
      await new Promise((resolve) =>
        setTimeout(resolve, index === 0 ? 0 : 2500)
      );
      const nextIndex = index + 1;
      animateSections(nextIndex);
    } else {
      await new Promise((resolve) => setTimeout(resolve, 6600));
      setCurrentSectionIndex((prevIndex) => prevIndex + 1);
      navigate("/about");
    }
  });

  useEffect(() => {
    if (isDesktop && !animationStarted) {
      animateSections(currentSectionIndex);

      return () => {
        clearTimeout(animationTimeout.current);
      };
    }
  }, [
    isDesktop,
    animationStarted,
    currentSectionIndex,
    sectionsData.length,
    navigate,
    animateSections,
  ]);

  return (
    <AnimatePresence initial={false} custom={currentSectionIndex} wait>
      <Section
        key={sectionsData[currentSectionIndex]?.key}
        content={sectionsData[currentSectionIndex]?.content}
        isVisible={true}
      />
    </AnimatePresence>
  );
};

export default HomePage;
