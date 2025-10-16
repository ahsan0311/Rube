import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";
import AboutDetails from "../../components/about/AboutCard";

const WordPress = () => {
  const wordpressCourseBenefits = [
    {
      title: "No Coding Required",
      description:
        "Easily create professional websites using WordPress without any programming knowledge.",
    },
    {
      title: "Website Customization",
      description:
        "Learn to design and customize websites using themes, plugins, and page builders like Elementor.",
    },
    {
      title: "Real-World Projects",
      description:
        "Build blogs, business sites, and eCommerce stores with real hosting and live domain experience.",
    },
    {
      title: "Freelancing & Career Growth",
      description:
        "Start your freelancing journey or work as a WordPress developer for global clients.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/wordpress.png",
          "https://rubycommercialcentre.com/images/wordpress.png",
          "https://rubycommercialcentre.com/images/wordpress.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="WordPress Development Course"
        mainHeading="Master WordPress Website Development"
        subHeading="Learn to create, customize, and launch fully functional websites using WordPress, plugins, Elementor, and live hosting setup — perfect for beginners and freelancers."
        automationTopics={[
          "Introduction to WordPress & Dashboard Overview",
          "Theme Installation & Customization",
          "Using Plugins & Page Builders (Elementor)",
          "Creating Blogs, Business & eCommerce Sites",
          "Hosting, Domain & Live Website Deployment",
        ]}
        courseDetails={[
          { label: "Duration", value: "2 Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={wordpressCourseBenefits}
        iconImages={[
          "https://rubycommercialcentre.com/images/plugin.png",
          "https://rubycommercialcentre.com/images/websitedevelopment.png",
          "https://rubycommercialcentre.com/images/hosting.png",
          "https://rubycommercialcentre.com/images/liveweb.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/wordpress.mp4"
      />
    </>
  );
};

export default WordPress;
