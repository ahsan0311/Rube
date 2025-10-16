import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";
import AboutDetails from "../../components/about/AboutCard";

const Office_graphic = () => {
  const msOfficeGraphicsBenefits = [
    {
      title: "Comprehensive Skillset",
      description:
        "Master essential MS Office tools alongside graphic design software for versatile professional skills.",
    },
    {
      title: "Beginner Friendly",
      description:
        "No prior experience needed. Start from basics and grow to advanced MS Office and graphic skills.",
    },
    {
      title: "Creative & Technical Expertise",
      description:
        "Combine productivity with creativity by learning MS Office automation and graphic design techniques.",
    },
    {
      title: "Career Opportunities",
      description:
        "Open doors in administrative, design, marketing, and multimedia roles with this combined skillset.",
    },
  ];
  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/office&graphic.png",
          "https://rubycommercialcentre.com/images/office&graphic.png",
          "https://rubycommercialcentre.com/images/office&graphic.png",
        ]}
      />

      <MsOfficeAutomation
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="MS Office & Graphic"
        mainHeading="Master MS Office & Graphic"
        subHeading="Become job-ready with complete training in MS Office and Graphic Design tools including Word, Excel, PowerPoint, CorelDRAW, Photoshop, and InPage."
        showMainLogo={false}
        imageSrc="https://www.bing.com/th/id/OIP.uVGBpGnk0lIO_aba6e2ZdQHaEK?w=314&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.3&pid=3.1&rm=2"
        automationTopics={[
          "MS Word (Documents, Formatting, Mail Merge)",
          "MS Excel (Formulas, Charts, Data Analysis)",
          "MS PowerPoint (Animations, Slide Design)",
          "InPage (Urdu/Multilingual Publishing)",
          "CorelDRAW (Vector Graphics & Logo Design)",
          "Adobe Photoshop (Image Editing & Design)",
          "Email, Internet & Cloud Tools",
        ]}
        iconImages={[
          "https://rubycommercialcentre.com/images/word.png",
          "https://rubycommercialcentre.com/images/excel.png",
          "https://rubycommercialcentre.com/images/powerpoint.png",
          "https://rubycommercialcentre.com/images/inpage.png",
          "https://rubycommercialcentre.com/images/corel.png",
          "https://rubycommercialcentre.com/images/photoshop.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/ms%20office%20&%20graphics.mp4"
        courseDetails={[
          { label: "Duration", value: "6 Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={msOfficeGraphicsBenefits}
      />
    </>
  );
};

export default Office_graphic;
