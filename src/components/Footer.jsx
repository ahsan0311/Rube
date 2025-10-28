import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const icons = [
    { icon: <FaFacebookF />, link: "https://facebook.com/" },
    { icon: <FaInstagram />, link: "https://instagram.com/" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com/" },
    { icon: <FaYoutube />, link: "https://youtube.com/" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com/@rubycommercialcentre" },
    { icon: <FaTwitter />, link: "https://twitter.com/" },
    { icon: <FaPinterestP />, link: "https://pinterest.com/" },
  ];

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
              <Link to="/Career">Career</Link>
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

         <div className="flex gap-3 max-[768px]:mb-[10px]">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center justify-center text-white text-lg hover:scale-105 hover:text-red-500 transition cursor-pointer"
        >
          {item.icon}
        </a>
      ))}
    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
