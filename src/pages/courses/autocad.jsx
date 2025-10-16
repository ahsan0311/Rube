import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";

const AutoCard = () => {
  const autoCadCourseBenefits = [
    {
      title: "Professional CAD Drafting Skills",
      description:
        "Learn 2D and 3D drawing techniques using AutoCAD — the most widely used design and drafting software.",
    },
    {
      title: "Hands-On Project Practice",
      description:
        "Work on real-world architectural, civil, and mechanical drawing projects to strengthen practical skills.",
    },
    {
      title: "Industry-Focused Training",
      description:
        "Gain skills used by architects, engineers, and designers in construction, manufacturing, and interior design.",
    },
    {
      title: "Career Opportunities",
      description:
        "Become job-ready for CAD operator, architectural draftsman, or design assistant roles in the technical field.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/autocad.png",
          "https://rubycommercialcentre.com/images/autocad.png",
          "https://rubycommercialcentre.com/images/autocad.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="AutoCAD Design Course"
        mainHeading="Master 2D & 3D AutoCAD Design"
        subHeading="Learn professional drafting and design using AutoCAD for architecture, civil, and mechanical projects — from basic to advanced level."
        automationTopics={[
          "Introduction to AutoCAD Interface & Tools",
          "2D Drafting – Lines, Shapes, and Dimensions",
          "Layers, Blocks & Object Modifications",
          "3D Modeling & Visualization Techniques",
          "Printing, Plotting & Project Execution",
        ]}
        courseDetails={[
          { label: "Duration", value: "3 Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={autoCadCourseBenefits}
        iconImages={[
          "https://rubycommercialcentre.com/images/2d.png",
          "https://rubycommercialcentre.com/images/3d.png",
          "https://rubycommercialcentre.com/images/architecture.png",
          "https://rubycommercialcentre.com/images/engineering.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/autocad.mp4"
      />
    </>
  );
};

export default AutoCard;
