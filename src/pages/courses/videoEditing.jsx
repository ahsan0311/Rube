import MsOfficeAutomation from "../../components/MsOfficeAutomation";
import CustomCarousel from "../../components/Carouse";
import AboutDetails from "../../components/about/AboutCard";

const VideoEditing = () => {
  const videoEditingCourseBenefits = [
    {
      title: "Practical Video Editing Skills",
      description:
        "Learn to edit videos professionally using industry-standard tools like Adobe Premiere Pro and After Effects.",
    },
    {
      title: "Motion Graphics & Visual Effects",
      description:
        "Create engaging animations, transitions, and effects that make your videos stand out.",
    },
    {
      title: "Creative Storytelling",
      description:
        "Master the art of visual storytelling, from raw footage to a complete cinematic project.",
    },
    {
      title: "Freelancing & Career Growth",
      description:
        "Start a freelance career or work with media houses, production studios, and digital agencies.",
    },
  ];

  return (
    <>
      <CustomCarousel
        images={[
          "https://rubycommercialcentre.com/images/videoediting.png",
          "https://rubycommercialcentre.com/images/videoediting.png",
          "https://rubycommercialcentre.com/images/videoediting.png",
        ]}
      />

      <MsOfficeAutomation
        showMainLogo={false}
        heading="INQUIRY FORM"
        buttonText="SUBMIT NOW"
        courseTitle="Video Editing & Motion Graphics"
        mainHeading="Master Professional Video Editing"
        subHeading="Learn to edit, enhance, and produce stunning videos using Adobe Premiere Pro, After Effects, Photoshop, and Canva — ideal for YouTube, marketing, and media professionals."
        automationTopics={[
          "Introduction to Video Editing & Tools Overview",
          "Editing in Adobe Premiere Pro",
          "Adding Effects & Transitions",
          "Motion Graphics in After Effects",
          "Color Grading, Audio Mixing & Final Export",
        ]}
        courseDetails={[
          { label: "Duration", value: "4.Months" },
          { label: "Projects/Assignments", value: "Yes" },
          { label: "Days", value: "Monday to Friday" },
          { label: "Certificate", value: "Yes (Paid)" },
        ]}
        benefitsData={videoEditingCourseBenefits}
        iconImages={[
          "https://rubycommercialcentre.com/images/aftereffect.png",
          "https://rubycommercialcentre.com/images/premier%20pro.png",
          "https://rubycommercialcentre.com/images/photoshop.png",
          "https://rubycommercialcentre.com/images/canva.png",
        ]}
        videoUrl="https://rubycommercialcentre.com/images/videoediting.mp4"
      />
    </>
  );
};

export default VideoEditing;
