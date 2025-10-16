import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";
import AboutDetails from "../../components/about/AboutCard";

const WebDesign = () => {
  const webDesignCourseBenefits = [
    {
      title: "Hands-On Learning",
      description:
        "Work on real-world web design projects using HTML, CSS, and JavaScript to build responsive websites.",
    },
    {
      title: "Beginner to Advanced Skills",
      description:
        "Start from the basics and progress to creating interactive and mobile-friendly websites with modern design trends.",
    },
    {
      title: "Industry-Relevant Tools",
      description:
        "Learn Bootstrap, responsive layouts, and web animation techniques used by professional designers.",
    },
    {
      title: "Career Opportunities",
      description:
        "Get ready for a career as a web designer or front-end developer in the growing tech industry.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/webdesign.png",
          "https://rubycommercialcentre.com/images/webdesign.png",
          "https://rubycommercialcentre.com/images/webdesign.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="Web Design Course"
        mainHeading="Master Professional Web Design"
        subHeading="Learn to design and build beautiful, responsive, and user-friendly websites using HTML, CSS, JavaScript, and Bootstrap."
        automationTopics={[
          "Introduction to Web Design & UI/UX Concepts",
          "HTML5 – Structure & Semantic Elements",
          "CSS3 – Styling & Responsive Layouts",
          "JavaScript – Interactivity & Animations",
          "Bootstrap Framework & Project Building",
        ]}
        courseDetails={[
          { label: "Duration", value: "4.Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={webDesignCourseBenefits}
        iconImages={[
          "https://rubycommercialcentre.com/images/html5.png",
          "https://rubycommercialcentre.com/images/css3.png",
          "https://rubycommercialcentre.com/images/javascript.png",
          "https://rubycommercialcentre.com/images/booot.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/web%20designing.mp4"
      />
    </>
  );
};

export default WebDesign;
