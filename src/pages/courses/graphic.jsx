import React from "react";
import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";

const Graphic = () => {
  const graphicBenefits = [
    {
      title: "Creative Skill Development",
      description:
        "Learn industry-standard graphic design tools to bring your creative ideas to life.",
    },
    {
      title: "Beginner Friendly",
      description:
        "No prior design experience needed. Start with basics and move towards advanced graphic techniques.",
    },
    {
      title: "Practical Projects",
      description:
        "Work on real-world design projects to build a strong portfolio and gain hands-on experience.",
    },
    {
      title: "Career Growth",
      description:
        "Equip yourself for careers in graphic design, digital marketing, branding, and multimedia.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/graphicdesign.png",
          "https://rubycommercialcentre.com/images/graphicdesign.png",
          "https://rubycommercialcentre.com/images/graphicdesign.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="Graphic Design"
        mainHeading="Master Graphic Design"
        subHeading="Become job-ready with comprehensive training in Graphic Design tools including Photoshop, CorelDRAW, Illustrator, and InPage."
        imageSrc="https://computercollegiate.com.pk/wp-content/uploads/2025/05/Page-04-07-768x411.png"
        automationTopics={[
          "Introduction to Graphic Design",
          "Adobe Photoshop Fundamentals",
          "CorelDRAW Techniques",
          "Adobe Illustrator Basics",
          "Creative Layout & Typography",
        ]}
        iconImages={[
          "https://rubycommercialcentre.com/images/photoshop.png",
          "https://rubycommercialcentre.com/images/corel.png",
          "https://rubycommercialcentre.com/images/illustrator.png",
          "https://rubycommercialcentre.com/images/inpage.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/graphics.mp4"
        courseDetails={[
          { label: "Duration", value: "4 Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={graphicBenefits}
      />
    </>
  );
};

export default Graphic;
