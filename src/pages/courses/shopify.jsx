
import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";
import AboutDetails from "../../components/about/AboutCard";

const Shopify = () => {
  const shopifyCourseBenefits = [
    {
      title: "Complete Shopify Store Training",
      description:
        "Learn how to create, customize, and manage your Shopify eCommerce store from scratch.",
    },
    {
      title: "Dropshipping & Product Management",
      description:
        "Master dropshipping techniques, product sourcing, and listing optimization to maximize profits.",
    },
    {
      title: "Marketing & Traffic Growth",
      description:
        "Learn Facebook, Instagram, and Google Ads to drive targeted traffic and boost online sales.",
    },
    {
      title: "Entrepreneurship & Business Growth",
      description:
        "Build your own online business and scale it globally with Shopify’s powerful tools.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/shopify.png",
          "https://rubycommercialcentre.com/images/shopify.png",
          "https://rubycommercialcentre.com/images/shopify.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="Shopify eCommerce Training"
        mainHeading="Master Shopify eCommerce & Dropshipping"
        subHeading="Learn to create and manage your Shopify store, handle dropshipping, run marketing campaigns, and grow your online business successfully."
        automationTopics={[
          "Shopify Store Setup & Customization",
          "Product Research & Dropshipping Setup",
          "Product Design & Branding",
          "Facebook & Instagram Marketing",
          "Store Management & Order Fulfillment",
        ]}
        courseDetails={[
          { label: "Duration", value: "2 Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={shopifyCourseBenefits}
        iconImages={[
          "https://rubycommercialcentre.com/images/dropshipping.png",
          "https://rubycommercialcentre.com/images/storemanagement.png",
          "https://rubycommercialcentre.com/images/productdesign.png",
          "https://rubycommercialcentre.com/images/facebookmarketing.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/shopify.mp4"
      />
    </>
  );
};

export default Shopify;

