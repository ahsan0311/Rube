import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";
import AboutDetails from "../../components/about/AboutCard";

const WebDevelopment = () => {
  const webDevelopmentCourseBenefits = [
    {
      title: "Full-Stack Learning",
      description:
        "Master both front-end and back-end web development using HTML, CSS, JavaScript, PHP, Laravel, and MySQL.",
    },
    {
      title: "Real-World Projects",
      description:
        "Work on practical projects such as business websites, CMS systems, and eCommerce platforms.",
    },
    {
      title: "Modern Tools & Frameworks",
      description:
        "Learn Bootstrap for responsive design and Laravel for building secure and dynamic web applications.",
    },
    {
      title: "Career Opportunities",
      description:
        "Prepare for in-demand roles such as Web Developer, Full-Stack Developer, or Freelance Web Programmer.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/webdev.png",
          "https://rubycommercialcentre.com/images/webdev.png",
          "https://rubycommercialcentre.com/images/webdev.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="Web Development Course"
        mainHeading="Master Full-Stack Web Development"
        subHeading="Learn to design, develop, and deploy dynamic websites using HTML, CSS, JavaScript, PHP, Laravel, and MySQL — from beginner to advanced level."
        automationTopics={[
          "Front-End Development (HTML5, CSS3, JavaScript)",
          "Responsive Design with Bootstrap",
          "Back-End Development using PHP",
          "Database Management with MySQL",
          "Laravel Framework & Dynamic Projects",
        ]}
        courseDetails={[
          { label: "Duration", value: "6 Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={webDevelopmentCourseBenefits}
        iconImages={[
          "https://rubycommercialcentre.com/images/html5.png",
          "https://rubycommercialcentre.com/images/css3.png",
          "https://rubycommercialcentre.com/images/javascript.png",
          "https://rubycommercialcentre.com/images/php.png",
          "https://rubycommercialcentre.com/images/laravel.png",
          "https://rubycommercialcentre.com/images/mysql.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/web%20development1.mp4"
      />
    </>
  );
};

export default WebDevelopment;
