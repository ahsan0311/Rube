import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";

const ThreeDMax = () => {
  const threeDMaxCourseBenefits = [
    {
      title: "Professional 3D Modeling Skills",
      description:
        "Learn to create high-quality 3D models for architecture, interiors, and products using Autodesk 3Ds Max.",
    },
    {
      title: "Rendering & Visualization",
      description:
        "Master realistic lighting, materials, and rendering using V-Ray and Arnold for professional-level visualization.",
    },
    {
      title: "Animation & Walkthroughs",
      description:
        "Develop skills to animate objects, cameras, and create architectural walkthroughs for client presentations.",
    },
    {
      title: "Career Opportunities",
      description:
        "Prepare for roles in 3D visualization, interior design, architecture, gaming, and animation studios.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/3dmax.png",
          "https://rubycommercialcentre.com/images/3dmax.png",
          "https://rubycommercialcentre.com/images/3dmax.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="3Ds Max Course"
        mainHeading="Master 3D Modeling & Rendering with 3Ds Max"
        subHeading="Learn professional 3D modeling, texturing, lighting, rendering, and animation techniques using Autodesk 3Ds Max — ideal for architects, designers, and visual artists."
        automationTopics={[
          "Introduction to 3Ds Max Interface & Tools",
          "3D Modeling – Architecture & Interior Design Projects",
          "Texturing, Lighting & Material Creation",
          "Rendering with V-Ray & Arnold Renderer",
          "Animation, Camera Setup & Walkthrough Creation",
        ]}
        courseDetails={[
          { label: "Duration", value: "3 Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={threeDMaxCourseBenefits}
        iconImages={[
          "https://rubycommercialcentre.com/images/3dmodeling.png",
          "https://rubycommercialcentre.com/images/rendering.png",
          "https://rubycommercialcentre.com/images/animation.png",
          "https://rubycommercialcentre.com/images/lighting.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/3dmax.mp4"
      />
    </>
  );
};

export default ThreeDMax;
