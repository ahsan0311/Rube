import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";

const DigitalMarketing = () => {
  const digitalMarketingBenefits = [
    {
      title: "Industry-Relevant Skills",
      description:
        "Learn SEO, social media marketing, email campaigns, Google Business, and web creation to excel in digital marketing.",
    },
    {
      title: "Beginner Friendly",
      description:
        "No prior experience needed. Start with basics and advance to professional digital marketing strategies.",
    },
    {
      title: "Hands-On Projects",
      description:
        "Work on real-world projects and campaigns to build a strong portfolio.",
    },
    {
      title: "Career Opportunities",
      description:
        "Prepare for roles in marketing agencies, startups, and corporate marketing teams.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/digitalmarketing.png",
          "https://rubycommercialcentre.com/images/digitalmarketing.png",
          "https://rubycommercialcentre.com/images/digitalmarketing.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="Digital Marketing"
        mainHeading="Master Digital Marketing"
        subHeading="Become job-ready with comprehensive training in SEO, social media marketing, email marketing, Google Business, and web creation."
        imageSrc="https://www.bing.com/th/id/OIP.uVGBpGnk0lIO_aba6e2ZdQHaEK?w=314&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.3&pid=3.1&rm=2"
        automationTopics={[
          "SEO Fundamentals",
          "Social Media Marketing",
          "Email Marketing Strategies",
          "Google Business Profile Management",
          "Web Creation Basics",
        ]}
        iconImages={[
          "https://rubycommercialcentre.com/images/brand.png",
          "https://rubycommercialcentre.com/images/seo.png",
          "https://rubycommercialcentre.com/images/socialmedia.png",
          "https://rubycommercialcentre.com/images/googlebusiness.png",
          "https://rubycommercialcentre.com/images/emailmarketing.png",
          "https://rubycommercialcentre.com/images/webcreation..png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/digitalmarketing.mp4"
        courseDetails={[
          { label: "Duration", value: "6 Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={digitalMarketingBenefits}
      />
    </>
  );
};

export default DigitalMarketing;
