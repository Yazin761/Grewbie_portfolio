import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `Flagship products from Grewbie Technologies —
    AI sales demo automation and marketing
    services built to scale your business.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex min-h-screen flex-col bg-zinc-950">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-zinc-100"}
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <a
            key={project.id}
            id="project"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 -z-10 hidden clip-path duration-200 md:block md:group-hover:bg-white"
            />

            {/* title */}
            <div className="flex justify-between px-10 text-zinc-200 transition-all duration-500 md:group-hover:px-12 md:group-hover:text-zinc-950">
              <h2 className="lg:text-[26px] text-[22px] leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="size-5 transition-colors md:size-6 md:group-hover:text-zinc-950" />
            </div>
            {/* divider */}
            <div className="h-0.5 w-full bg-white/20" />
            {/* framework */}
            <div className="flex px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-zinc-400 transition-colors duration-500 md:group-hover:text-zinc-950"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            {/* mobile preview image */}
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img
                src={project.bgImage}
                alt=""
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={`${project.name} — ${project.description.slice(0, 80)}…`}
                loading="lazy"
                decoding="async"
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </a>
        ))}
        {/* desktop Flaoting preview image */}
        <div
          ref={previewRef}
          className="pointer-events-none fixed -top-2/6 left-0 z-50 hidden w-[960px] overflow-hidden rounded-sm border-8 border-zinc-800 opacity-0 md:block"
        >
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt={`${projects[currentIndex].name} product preview`}
              loading="lazy"
              decoding="async"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
