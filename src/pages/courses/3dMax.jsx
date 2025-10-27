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
          "https://images.icon-icons.com/195/PNG/256/3ds_Max_23640.png",
          "https://e1.pngegg.com/pngimages/812/539/png-clipart-autodesk-icon-set-3dsmax512-1-nintendo-3ds-max-logo-thumbnail.png",
"data:image/jpeg;base64,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",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/3dmax.mp4"
      />
    </>
  );
};

export default ThreeDMax;
