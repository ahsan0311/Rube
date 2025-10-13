import React from "react";

export default function Contact() {
  return (
    <section className="
    relative 
    bg-gradient-to-b from-white to-[#0a0a0a]
    max-[770px]:bg-[linear-gradient(to_bottom,_white_50%,_#0a0a0a_40%)]
  ">
     <div className="max-w-[1800px] mx-auto">
         <div className="relative  flex flex-col  mx-auto lg:flex-row  max-[1000px]:mt-[50px] max-[840px]:mt-[-100px]">
        <div className="flex-1 ">
          <div className="bg-black text-white border-none rounded-[60px]  p-20 py-14 w-[96%] mx-auto max-[770px]:text-center">
            <h2 className="text-5xl max-[1200px]:text-4xl max-[980px]:text-2xl font-bold leading-snug max-[770px]:text-4xl">
              Not sure what you need yet? <br /> That’s okay.
            </h2>
            <p className="mt-4 text-gray-300 text-lg max-[1035px]:text-[13px] max-[980px]:text-[10px] max-[770px]:text-2xl">
              Tell us where you’re stuck, and{" "}
              <span className="font-semibold">
                we’ll help you figure it out.
              </span>
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>

          {/* Bottom Black Box */}
          <div className=" relative z-40 max-[770px]:bg-black  text-white max-[960px]:px-[8px] max-[1200px]:px-[30px] px-29 py-12 w-full 
          max-[770px]:flex max-[770px]:flex-col max-[770px]:items-center max-[770px]:justify-center 
          max-[770px]:mt-[300px]
         
          ">
            <h2 className="text-6xl max-[1200px]:text-4xl font-bold text-blue-500 ">
              Get In Touch <br /> With Us Today!
            </h2>
            <p className="mt-4 text-lg font-bold text-gray-300 w-[40%] max-[770px]:w-full max-[770px]:text-center leading-relaxed">
              We’d love to hear from you and discuss how we can help your
              business grow. Feel free to reach out for any inquiries, ideas, or
              collaborations. We are here to support you in your brand journey!
            </p>
            <div className="mt-6">
              <img
                src="https://diggitglobal.com/assets/images/vector_5.png"
                alt="circuit design"
                className="w-[450px] max-[1200px]:w-[370px] max-[1033px]:w-[350px] max-[982px]:w-[310px]"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-[100px] 
  max-[1300px]:right-0 max-[1300px]:-translate-x-[10px] 
  flex justify-center items-center z-30 
  max-[770px]:static max-[770px]:flex-col max-[770px]:translate-x-0 max-[770px]:translate-y-0 max-[770px]:mt-[-831px] max-[770px]:z-50
 max-[770px]:right-auto  max-[572px]:mt-[-861px] max-[433px]:mt-[-890px] max-[425px]:mt-[-820px]"
        >
          {/* Robot */}
          <img
            src="https://diggitglobal.com/assets/images/vector_4.png"
            alt="Robot"
            className="absolute -top-32 right-1/2 translate-x-1/2 z-40 w-[450px] 
    max-[770px]:static max-[770px]:translate-x-0 max-[770px]:top-auto max-[770px]:w-[420px] max-[770px]:mb-6 max-[425px]:w-[320px]"
          />

          {/* Form */}
          <div
            className="bg-white rounded-4xl shadow-2xl w-[650px] 
    max-[1133px]:w-[550px] max-[938px]:w-[450px] 
    max-[770px]:w-[97%] max-[770px]:px-4 
    p-10 pt-14 relative z-30 mt-[183px] max-[770px]:mt-0 max-[770px]:mt-[160px] max-[572px]:mt-[180px] max-[432px]:mt-[200px] max-[425px]:mt-[230px]"
          >
            <h3 className="text-2xl font-bold text-center mb-8 max-[1000px]:text-xl">
              Contact Us
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              />
              <input
                type="text"
                placeholder="Organization"
                className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full rounded-2xl bg-gray-100 px-6 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              ></textarea>

              <button
                className="w-full bg-blue-700 text-white py-4 rounded-full font-semibold hover:bg-blue-800 transition 
        max-[1000px]:py-3 max-[1000px]:text-sm"
              >
                Get free consultation
              </button>
            </form>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
}
