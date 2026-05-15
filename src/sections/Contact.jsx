import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { contactEmail, phone, socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Got a question, how or project Idea?
    WE’D love to hear from you and discus further!`;
  const items = [
    "Just imagine we code",
    "Just imagine we code",
    "Just imagine we code",
    "Just imagine we code",
    "Just imagine we code",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex min-h-screen flex-col justify-between bg-zinc-950"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          id="contact-heading"
          text={text}
          textColor={"text-zinc-100"}
          withScrollTrigger={true}
        />
        <div className="mb-10 flex px-10 font-light uppercase text-zinc-100 lg:text-[26px] text-[22px] leading-none">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="my-2 h-px w-full bg-white/15" />
              <p className="text-lg tracking-wider lowercase md:text-xl lg:text-2xl">
                yogeshwaran@grewbie.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="my-2 h-px w-full bg-white/15" />
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-lg lowercase transition-colors duration-200 hover:text-zinc-200 md:text-xl lg:text-2xl"
              >
                {phone}
              </a>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="my-2 h-px w-full bg-white/15" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs uppercase leading-loose tracking-wides transition-colors duration-200 hover:text-zinc-200 md:text-sm"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="bg-transparent text-zinc-100" />
    </section>
  );
};

export default Contact;
