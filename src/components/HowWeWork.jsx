import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCompass, FaCubes, FaPuzzlePiece, FaRocket } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Discover",
    desc: "We start by understanding your business inside and out: your goals, bottlenecks, and what success actually looks like. Our team brings real business management consulting services into play from day one.",
    icon: <FaCompass className="text-blue-600 " />,
  },
  {
    id: "02",
    title: "Build",
    desc: "Our design and development teams bring your solution to life, tailoring every line of code and interface to your business. We combine dynamic software solutions, agile software solutions, and strong UX.",
    icon: <FaCubes className="text-blue-600 " />,
  },
  {
    id: "03",
    title: "Strategize",
    desc: "We define the tech roadmap, whether cloud architecture, AI systems, or dashboard integrations, built around your workflows. This is where business analysis, digital transformation and AI in business management come to life.",
    icon: <FaPuzzlePiece className="text-blue-600 " />,
  },
  {
    id: "04",
    title: "Launch",
    desc: "We deploy your solution with precision, ensuring a smooth transition and providing ongoing support. Our team ensures your new system integrates seamlessly with your existing operations.",
    icon: <FaRocket className="text-blue-600 " />,
  },
];

const Timeline = () => {
  const timelineRef = useRef([]);
  const circleRef = useRef([]);
  const contentRef = useRef([]);
  const iconRef = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Animate timeline items with alternating directions
    timelineRef.current.forEach((el, index) => {
      if (!el) return;

      // Set initial positions for animation
      const content = contentRef.current[index];
      const icon = iconRef.current[index];

      if (content && icon) {
        if (index % 2 === 0) {
          // Even index: content from right, icon from left
          gsap.set(content, { x: 100, autoAlpha: 0 });
          gsap.set(icon, { x: -100, autoAlpha: 0 });
        } else {
          // Odd index: content from left, icon from right
          gsap.set(content, { x: -100, autoAlpha: 0 });
          gsap.set(icon, { x: 100, autoAlpha: 0 });
        }
      }

      // Animate the entire section
      gsap.to(el, {
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate content and icons with delays
      if (content && icon) {
        gsap.to(content, {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(icon, {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Animate circles and line sections
    circleRef.current.forEach((el, index) => {
      if (!el) return;

      const section = sectionRefs.current[index];
      if (!section) return;

      // Animate circle
      gsap.fromTo(
        el,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.3,
        }
      );

      // Animate line section for this circle
      if (index > 0) {
        const lineSection = document.getElementById(`line-section-${index}`);
        if (lineSection) {
          gsap.fromTo(
            lineSection,
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }
    });

    // Animate the initial line section
    if (sectionRefs.current[0]) {
      const firstLineSection = document.getElementById("line-section-0");
      if (firstLineSection) {
        gsap.fromTo(
          firstLineSection,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionRefs.current[0],
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }
  }, []);

  return (
    <div className="py-20 ">
      <div className="max-w-7xl mx-auto px-6  ">
        {" "}
        <h2 className="text-5xl font-bold text-center text-blue-800 mb-6">
          {" "}
          How We Work
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 text-xl">
          {" "}
          Our process is designed to deliver exceptional results through
          collaboration and innovation
        </p>
        <div className="relative overflow-hidden  
     ">
          <div
            className="
    absolute left-1/2 top-0 h-full w-1.5 -translate-x-1/2 
    transform origin-top overflow-hidden
    max-[853px]:left-[29px] max-[853px]:translate-x-0
    
    

  "
          >
            {steps.map((_, idx) => (
              <div
                key={idx}
                id={`line-section-${idx}`}
                className="absolute w-full bg-black"
                style={{
                  top: `${idx * 25}%`,
                  height: "25%",
                  transformOrigin: "top",
                }}
              />
            ))}
          </div>

          {steps.map((step, idx) => (
            <div
              key={step.id}
              ref={(el) => {
                timelineRef.current[idx] = el;
                sectionRefs.current[idx] = el;
              }}
              className={`
      relative mt-20 mb-20 flex justify-between w-full
      ${
        idx % 2 === 0
          ? "flex-row items-stretch"
          : "flex-row-reverse items-stretch"
      }
      max-[853px]:flex-row max-[853px]:items-start
    `}
            >
              {/* Content Box */}
              <div
                ref={(el) => (contentRef.current[idx] = el)}
                className="
        w-6/12 px-10 py-8 rounded-xl 
        max-[853px]:w-full max-[853px]:text-left max-[853px]:px-8 max-[853px]:py-6 
        max-[853px]:ml-16  max-[853px]:mt-[-95px] 
        max-[435px]:ml-8
        
       


      "
              >
                <h3 className="text-4xl font-bold text-blue-800 max-[853px]:text-4xl max-[553px]:!text-2xl ">
                  {step.title}
                </h3>
                <p className="text-gray-700 mt-4 text-xl leading-relaxed max-[553px]:text-base  max-[435px]:w-[300px] max-[404px]:w-[260px]">
                  {step.desc}
                </p>
              </div>

              {/* Number Circle */}
              <div
                ref={(el) => (circleRef.current[idx] = el)}
                className="
        absolute left-1/2 -top-20 -translate-x-1/2
        flex items-center justify-center
        w-28 h-28 rounded-full bg-black text-white text-3xl font-extrabold
        z-20 border-4 border-white shadow-xl
        max-[853px]:left-[30px] max-[853px]:translate-x-0 
        max-[853px]:w-14 max-[853px]:h-14 max-[853px]:text-base
        
      "
              >
                {step.id}
              </div>

              {/* Icon */}
              <div
                ref={(el) => (iconRef.current[idx] = el)}
                className="
    w-4/12 mt-10 flex justify-center items-start
    max-[853px]:w-auto max-[853px]:ml-auto max-[853px]:mr-6
    max-[853px]:justify-end max-[853px]:mt-[-70px] 
    max-[553px]:w-[20px] max-[553px]:ml-auto max-[553px]:mr-3
    max-[553px]:justify-end max-[553px]:mt-[-70px]
    max-[435px]:ml-[-300px]
  "
              >
                <div
                  className="
     !text-8xl
    max-[853px]:!text-6xl
    max-[553px]:!text-4xl
    text-blue-600
    "
                >
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
