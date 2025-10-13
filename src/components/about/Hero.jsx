import React from 'react'

const Hero = () => {
  return (
   <div className="relative min-h-screen overflow-hidden ">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
    <img
  src="https://diggitglobal.com/assets/images/about_banner.png"
  alt="Background"
  className="w-full h-full object-cover object-[center_20%] rounded-b-[4rem] md:rounded-none"
/>

  </div>

 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70 to-transparent z-10"></div>

  {/* Bottom Gradient */}
  <div className="absolute bottom-[-40px] left-0 w-full h-[200px] z-10 pointer-events-none">
    <div className="w-full h-full bg-gradient-to-t from-white via-white/50 to-transparent"></div>
  </div>

  {/* Content */}
  <div className="relative z-10  min-h-screen flex items-center justify-center px-4 sm:px-6 text-white text-center">
  <div className="max-w-4xl mt-20">
    <h3 className="text-3xl md:text-2xl font-semibold">
      We Build Business Solutions That Become
    </h3>
    <h1 className="text-5xl text-[#01a9eb] md:text-6xl font-extrabold mb-6">
      The Backbone of Your<br />
      Team’s Success
    </h1>

    <p className=" text-white  mb-8">
      Diggit is a digital transformation company in Dubai helping businesses move faster, work smarter, and scale with less complexity.
      From AI systems to custom tools, we build business solutions that tick all the boxes and change how teams operate.
    </p>

   <div className="flex justify-center">
  <button className="bg-[#00317B] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full text-lg transition duration-300">
    Explore our services
  </button>
</div>

  </div>
</div>

</div>

  )
}

export default Hero