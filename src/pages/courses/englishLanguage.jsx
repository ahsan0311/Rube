import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";

const EnglishLanguage = () => {
  const englishCourseBenefits = [
    {
      title: "Improve Communication Skills",
      description:
        "Develop strong speaking, listening, reading, and writing skills for effective communication.",
    },
    {
      title: "Grammar & Vocabulary Mastery",
      description:
        "Learn essential grammar rules and expand your vocabulary for accurate and confident expression.",
    },
    {
      title: "Fluency & Pronunciation",
      description:
        "Practice real-life conversations and pronunciation drills to speak naturally and fluently.",
    },
    {
      title: "Career & Study Opportunities",
      description:
        "Enhance your confidence for interviews, public speaking, and international study or job opportunities.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/english.png",
          "https://rubycommercialcentre.com/images/english.png",
          "https://rubycommercialcentre.com/images/english.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="English Language Course"
        mainHeading="Master Spoken & Written English"
        subHeading="Learn to speak, read, and write English fluently and confidently. Build grammar, pronunciation, and communication skills for personal and professional growth."
        automationTopics={[
          "Grammar & Vocabulary Development",
          "Listening & Speaking Practice",
          "Reading Comprehension",
          "Writing Skills & Sentence Structure",
          "Pronunciation & Conversation Practice",
        ]}
        courseDetails={[
          { label: "Duration", value: "6 Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={englishCourseBenefits}
        iconImages={[
          "https://rubycommercialcentre.com/images/readingbook.png",
          "https://rubycommercialcentre.com/images/listing.png",
          "https://rubycommercialcentre.com/images/grammer.png",
          "https://rubycommercialcentre.com/images/audio.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/englishlanguage.mp4"
      />
    </>
  );
};

export default EnglishLanguage;
