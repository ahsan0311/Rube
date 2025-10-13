import React from 'react'

import CourseDetail from '../../components/CourseDetail'
import AboutDetails from '../../components/about/AboutCard'


const About = () => {

  const aboutContent = [
    {
      title: "ABOUT RUBY COMMERCIAL CENTRE",
      description:
        "Ruby Commercial Center is one of the leading computer education institutions in Karachi, catering to the educational and career development needs of thousands of students annually. Established in 1982, our institution aspires to be a center of excellence in computer sciences and technology. An effective agent of change and a model for others to follow, we have been catering to the needs of aspiring and experienced IT professionals for over four decades. We offer a wide range of customized training courses, suitable for individuals, small businesses and large organizations. Our courses include Graphic Designing, MS Office, Web Development, E-Commerce Platforms like Daraz, WordPress, Shopify, Computer Typing, Digital Marketing, and many more. With well-equipped computer labs available for use when classes are not in session, we ensure that our students have access to all the resources they need to succeed.",
    },
    {
      title: "OUR VISION",
      description:
        "Our vision is to be a leading institute that transforms lives through education, preparing individuals for the challenges of the future. We aim to inspire growth, foster creativity, and shape a community of skilled professionals who contribute positively to society.",
    },
    {
      title: "OUR MISSION",
      description:
        "Our mission is to empower individuals by providing them with quality education and practical skills that will help them thrive in an ever-evolving digital world. We are committed to guiding our students towards success by focusing on innovation, integrity, and excellence.",
    },
    {
      title: "CAREER OPPORTUNITIES",
      description:
        "At our institute, we believe in not just imparting knowledge but also opening doors to real-world opportunities. Our career support services help students find the right career paths, offering guidance on internships, job placements, and skill development. We are dedicated to helping our students achieve their professional goals and make a successful transition from education to the workforce.",
    },
    {
      title: "KNOW YOUR STRENGTH",
      description:
        "Everyone has unique skills and abilities. At our institute, we help you identify your strengths, enabling you to focus on your talents and pursue a career that aligns with your passions. By enhancing your skills and building your confidence, we prepare you for success in a competitive world.",
    },
    {
      title: "FACULTY",
      description:
        "Our faculty members are highly skilled professionals with vast experience in their respective fields. They are committed to providing high-quality education and support to our students. With a passion for teaching and a dedication to student success, our faculty ensures that each learner receives personalized attention to help them achieve their full potential.",
    },
  ];
  return (
    <>
    <section className='mt-[100px]'>
      <div className='text-center'>
        <h1 className='text-4xl text-blue-500 font-bold'>ABOUT US</h1>
      </div>
      <div className="p-8">
      {aboutContent.map((section, index) => (
          <AboutDetails
            key={index}
            title={section.title}
            description={section.description}
          />
        ))}
    </div>
    </section>
    </>
  )
}

export default About