import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";

const ComputerTyping = () => {
  const typingCourseBenefits = [
    {
      title: "Improve Typing Speed & Accuracy",
      description:
        "Learn professional touch typing techniques to increase your speed and accuracy on the keyboard.",
    },
    {
      title: "Enhance Office Productivity",
      description:
        "Boost your efficiency in data entry, document creation, and general computer use for office work.",
    },
    {
      title: "Bilingual Typing Skills",
      description:
        "Practice and master both English and Urdu typing using modern software tools.",
    },
    {
      title: "Career & Freelancing Opportunities",
      description:
        "Typing skills open doors to clerical jobs, data entry work, and online freelancing opportunities.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/typing.png",
          "https://rubycommercialcentre.com/images/typing.png",
          "https://rubycommercialcentre.com/images/typing.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="Computer Typing Course"
        mainHeading="Master Professional Computer Typing"
        subHeading="Learn English and Urdu typing with speed and accuracy. Improve your computer efficiency and prepare for office, clerical, and freelancing work."
        automationTopics={[
          "Introduction to Keyboard Layout & Basics",
          "Touch Typing Techniques",
          "English Typing Speed Practice",
          "Urdu Typing (InPage & Unicode)",
          "Typing Tests & Accuracy Improvement",
        ]}
        courseDetails={[
          { label: "Duration", value: "3.Months" },
          { label: "Projects/Assignments", value: "No" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "No" },
        ]}
        benefitsData={typingCourseBenefits}
        iconImages={[
          "https://rubycommercialcentre.com/images/typing%20(2).png",
          "https://rubycommercialcentre.com/images/typingicon.png",
          "https://rubycommercialcentre.com/images/practice.png",
          "https://rubycommercialcentre.com/images/technique.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/computer%20typing.mp4"
      />
    </>
  );
};

export default ComputerTyping;
