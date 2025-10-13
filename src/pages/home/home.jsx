import React, { useEffect, useRef } from "react";
import {
  FaMicrosoft,
  FaPaintBrush,
  FaBullhorn,
  FaShopify,
  FaStore,
  FaWordpress,
  FaLaptopCode,
  FaVideo,
  FaKeyboard,
  FaLanguage,
  FaCode,
} from "react-icons/fa";
import Card from "../../components/Card";
import TextContent from "../../components/TextContent";
import NoMoreSilos from "../../components/NoMoreSilos";
import WhoWeBuildFor from "../../components/WhoWeBuildFor";
import HowWeWork from "../../components/HowWeWork";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import CoursesGrid from "../../components/CoursesGrid";
import SocialValues from "../../components/SocialValues";
import Testimonials from "../../components/Testimonials";
import TutorialSection from "../../components/TutorialSection";
import CoreValuesSection from "../../components/CoreValues";
import CourseDetail from "../../components/CourseDetail";
import BrochureBook from "../../components/BrochureBook";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      });
    }
  }, []);

  const courses = [
    {
      title: "MS Office",
      description:
        "Learn MS Office to simplify documentation and professional tasks.",
      icon: <FaMicrosoft color="white" size={50} />,
      path: "/ms-office",
      btnText: "Explore Course",
    },
    {
      title: "Graphic Designing",
      description:
        "Master creative tools to design professional posters, banners, and logos.",
      icon: <FaPaintBrush color="white" size={50} />,
      path: "/graphic",
      btnText: "Explore Course",
    },
    {
      title: "Digital Marketing",
      description:
        "Learn online marketing strategies to grow your or your clients' businesses.",
      icon: <FaBullhorn color="white" size={50} />,
      path: "/digital-marketing-smartpro",
      btnText: "Explore Course",
    },
    {
      title: "Shopify",
      description:
        "Understand Shopify and start your own dropshipping or eCommerce store.",
      icon: <FaShopify color="white" size={50} />,
      path: "/shopify",
      btnText: "Explore Course",
    },
    {
      title: "Daraz",
      description:
        "Learn how to set up your online store on Daraz and boost your sales.",
      icon: <FaStore color="white" size={50} />,
      path: "/daraz",
      btnText: "Explore Course",
    },
    {
      title: "WordPress",
      description:
        "Build stunning websites and blogs with ease using WordPress.",
      icon: <FaWordpress color="white" size={50} />,
      path: "/wordpress",
      btnText: "Explore Course",
    },
    {
      title: "Web Designing",
      description:
        "Learn to create modern, responsive, and user-friendly websites.",
      icon: <FaLaptopCode color="white" size={50} />,
      path: "/web-designing",
      btnText: "Explore Course",
    },
    {
      title: "Video Editing",
      description:
        "Master video editing tools to create professional-grade videos.",
      icon: <FaVideo color="white" size={50} />,
      path: "/video-editing",
      btnText: "Explore Course",
    },
    {
      title: "Ms Office & Graphics",
      description: "Master creative tools of MS Office & Graphic Designing.",
      icon: <FaPaintBrush color="white" size={50} />,
      path: "/ms-office-graphic",
      btnText: "Explore Course",
    },
    {
      title: "Web Development",
      description:
        "Design dynamic websites and launch your own online store with ease.",
      icon: <FaCode color="white" size={50} />,
      path: "/web-development",
      btnText: "Explore Course",
    },
    {
      title: "Computer Typing",
      description:
        "Master fast and accurate typing for office tasks and online work.",
      icon: <FaKeyboard color="white" size={50} />,
      path: "/computer-typing",
      btnText: "Explore Course",
    },
    {
      title: "English Language",
      description:
        "Gain confidence in spoken and written English for global success.",
      icon: <FaLanguage color="white" size={50} />,
      path: "/english-language",
      btnText: "Explore Course",
    },
  ];

  const courseData = {
    title: "Advanced Diploma In Information Technology (ADIT)",
    description:
      "It is a comprehensive course aimed at preparing students for their professional roles in the IT sector. It has two comprehensive modules. Each module lasts for six months.",
    features: [
      "Office Automation",
      "Web Designing and Development",
      "Adobe Visual Studio, HTML5, CSS3",
      "JavaScript, React JS, JQuery",
      "PHP with MySQL, CMS WordPress, Python",
      "Freelance training for online earning",
    ],
  };

  const brochureImages = [
    "https://media.istockphoto.com/id/505061074/photo/stack-of-magazines.webp?b=1&s=612x612&w=0&k=20&c=IyvlGFpCY3R4XvCNNPfouXg2LsU8_OPK95de-rYwq7U=",
    "https://media.istockphoto.com/id/505061074/photo/stack-of-magazines.webp?b=1&s=612x612&w=0&k=20&c=IyvlGFpCY3R4XvCNNPfouXg2LsU8_OPK95de-rYwq7U=",
    "https://media.istockphoto.com/id/505061074/photo/stack-of-magazines.webp?b=1&s=612x612&w=0&k=20&c=IyvlGFpCY3R4XvCNNPfouXg2LsU8_OPK95de-rYwq7U=",
    "https://media.istockphoto.com/id/505061074/photo/stack-of-magazines.webp?b=1&s=612x612&w=0&k=20&c=IyvlGFpCY3R4XvCNNPfouXg2LsU8_OPK95de-rYwq7U=",

  ];
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-[100vh] z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
            poster="data:image/gif,AAAA"
          >
            <source
              src="https://rubycommercialcentre.com/images/videomain.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
        <div className="absolute bottom-[-40px] left-0 w-full h-[200px] z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-white via-white/90 to-transparent"></div>
        </div>
      </div>

      <section>
        <TextContent
          heading="Welcome To Ruby Commercial Centre"
          description="Ruby Commercial is your one-stop solution to learn all about the Information Technology Courses. Ruby Commercial is one of the most well-known Computer Training Institute In Karachi serving Karachiites for over 30 years."
          subheading="Computer Courses In Karachi, Pakistan"
        />
      </section>

      <div className="flex justify-center items-center flex-wrap gap-6 py-10">
        {courses.map((course, i) => (
          <Card
            key={i}
            title={course.title}
            description={course.description}
            icon={course.icon}
            btnText={course.btnText}
            path={course.path}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-10 mb-10">
        <CoursesGrid />
        <CoreValuesSection />
        <SocialValues />
        <Testimonials />
      </div>

      <div>
      <BrochureBook images={brochureImages} />
    </div>
      <TutorialSection />

       <div className="p-8">
      <CourseDetail
        title={courseData.title}
        description={courseData.description}
        features={courseData.features}
      />
    </div>
    
    </>
  );
};

export default Home;
