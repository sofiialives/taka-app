import HeroSection from "components/About/HeroSection/HeroSection";
import StackSection from "components/About/StackSection/StackSection";
import GallerySection from "components/About/GallerySection/GallerySection";
import Mission from "components/About/Mission/Mission";
import Exhibition from "components/About/Exhibition/Exhibition";

const AboutPage = () => {
  return (
    <section>
      <HeroSection />
      <StackSection />
      <GallerySection />
      <Mission />
      <Exhibition />
    </section>
  );
};

export default AboutPage;
