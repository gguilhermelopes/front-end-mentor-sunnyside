"use client";

import useMobile from "@/hooks/useMobile";
import InfoFeaturesCard from "./components/infoFeaturesCard";
import InfoImg from "./components/infoImgCard";
import InfoSectionCard from "./components/infoSectionCard";
import Testimonials from "./components/testimonials";

const Main = () => {
  const isMobile = useMobile("(max-width:768px)");
  return (
    <main className="max-w-[1440px]">
      <section className="grid md:grid-cols-2">
        {isMobile && <InfoImg image="transform" />}
        <InfoSectionCard
          title="Transform your brand"
          description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          position="left"
          primaryColor="hsl(51, 100%, 49%)"
        />
        {!isMobile && (
          <>
            <InfoImg image="transform" />
            <InfoImg image="stand-out" />
          </>
        )}
        {isMobile && <InfoImg image="stand-out" />}

        <InfoSectionCard
          title="Stand out to the right audience"
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          position="right"
          primaryColor="hsl(7, 99%, 70%)"
        />
        <InfoFeaturesCard
          title="Graphic Design"
          description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          image="graphic-design"
          primaryColor="hsl(167, 40%, 24%)"
        />
        <InfoFeaturesCard
          title="Photography"
          description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          image="photography"
          primaryColor="hsl(198, 62%, 26%)"
        />
      </section>
      <section className="p-10 lg:p-40 flex flex-col items-center">
        <Testimonials />
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-4 h-[500px]">
        <InfoImg image="gallery-milkbottles" />
        <InfoImg image="gallery-orange" />
        <InfoImg image="gallery-cone" />
        <InfoImg image="gallery-sugarcubes" />
      </section>
    </main>
  );
};

export default Main;
