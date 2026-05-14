import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { BackgroundGradientAnimation } from "../components/ui/BackgroundGradientAnimation";

const Hero = () => {
  const text = `we help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <BackgroundGradientAnimation
          gradientBackgroundStart="#022c22"
          gradientBackgroundEnd="#064e3b"
          size="55%"
          blendingValue="hard-light"
          containerClassName="min-h-screen"
        />
      </div>
      <div className="relative z-10 pointer-events-none">
        <AnimatedHeaderSection
          subTitle={"Let's Evolve Together"}
          title={"GrewBie Tech"}
          text={text}
          textColor={"text-zinc-100"}
          showTitleUnderline={false}
        />
      </div>
    </section>
  );
};

export default Hero;
