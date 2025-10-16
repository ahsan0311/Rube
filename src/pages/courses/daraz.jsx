import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";
import AboutDetails from "../../components/about/AboutCard";

const Daraz = () => {
  const darazCourseBenefits = [
    {
      title: "Complete Seller Training",
      description:
        "Learn how to set up and manage your Daraz seller account effectively.",
    },
    {
      title: "Product Listing & Design",
      description:
        "Master product listing, attractive product design, and optimization techniques for better sales.",
    },
    {
      title: "Digital Marketing for Sellers",
      description:
        "Boost your sales using social media marketing, SEO, and advertising strategies on Daraz.",
    },
    {
      title: "Career & Business Growth",
      description:
        "Grow your online business and open opportunities for entrepreneurship and e-commerce careers.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/daraz.png",
          "https://rubycommercialcentre.com/images/daraz.png",
          "https://rubycommercialcentre.com/images/daraz.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="Daraz Seller Training"
        mainHeading="Master Daraz Online Business"
        subHeading="Become job-ready with comprehensive training on Daraz seller account setup, product listing, digital marketing, and sales optimization."
        automationTopics={[
          "Daraz Seller Account Setup",
          "Product Listing & Optimization",
          "Effective Product Design",
          "Social Media Marketing for Sales",
          "Order Management & Customer Service",
        ]}
        courseDetails={[
          { label: "Duration", value: "2.Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={darazCourseBenefits}
        imageSrc="https://rubycommercialcentre.com/images/daraz.png"
        videoUrl="https://rubycommercialcentre.com/images/dARAZ%20DEVELOPMENT.mp4"
        iconImages={[
          "https://rubycommercialcentre.com/images/selleraccount.png",
          "https://rubycommercialcentre.com/images/productdesign.png",
        ]}
      />
    </>
  );
};

export default Daraz;
