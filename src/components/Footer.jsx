import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ff9704] text-white px-8 md:px-16 py-4 w-full">
      <div className="max-w-[1300px] mx-auto">
        <img
          src="https://rubycommercialcentre.com/images/logoicon.png"
          alt="DIGGIT Logo"
          className="w-[80px]"
        />
      </div>

      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-between gap-12  ">
        <div className="flex-2 ">
          <h2 className="text-4xl font-bold text-blue-500">ABOUT US</h2>
          <p className="mt-6 text-base max-w-md leading-7 font-medium">
            Ruby Commercial Center is one of the leading computer education
            institutions in Karachi, catering to the educational and career
            development needs of thousands of students annually. Established in
            1982
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-4xl font-bold text-blue-500">QUICK LINKS</h2>
          <ul className="mt-6 text-base leading-7 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/carriers">Carriers</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex-2 ">
          <h2 className="text-4xl font-bold text-blue-500">CONTACT</h2>
          <p className="mt-6 text-base max-w-md leading-7 font-medium">
            MEHMOODABAD #2, KARACHI-75460 <br /> Email: INFO@RUBYCOMMERCIALCENTRE.COM <br />
            Phone: 0344-3006723
          </p>
        </div>

        
      </div>

      <div className="max-w-[1300px] mx-auto text-white text-sm ">
      
       


        <div className="flex flex-col md:flex-row justify-between items-center  gap-3 mt-6">
          

          <div>
            <h3>
              © 2025All rights reserved./Ruby Commercial Centre
            </h3>
          </div>

          <div className="flex gap-3  max-[768px]:mb-[10px]">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              <FaLinkedinIn />
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              <FaTwitter />
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
