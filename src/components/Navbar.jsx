import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../style/tabs.css";

const tabData = [
  {
    content: [
      { title: "Ms Office", path: "/ms-office" },
      { title: "Ms Office & Graphic", path: "/ms-office-graphic" },
      { title: "Graphic", path: "/graphic" },
      {
        title: "Digital Marketing (Smart Pro)",
        path: "/digital-marketing-smartpro",
      },
      { title: "Daraz", path: "/daraz" },
      { title: "Shopify", path: "/shopify" },
      { title: "Web Designing", path: "/web-designing" },
      { title: "Web Development", path: "/web-development" },
      { title: "WordPress", path: "/wordpress" },
      { title: "Video Editing", path: "/video-editing" },
      { title: "Computer Typing", path: "/computer-typing" },
      { title: "English Language", path: "/english-language" },
      { title: "AutoCAD", path: "/autocad" },
      { title: "3D Max", path: "/3d-max" },
      { title: "MERN Stack", path: "/mern-stack" },
    ],
  },
];

import { createPortal } from "react-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const location = useLocation();
  const activePage = location.pathname;
  const currentServiceTab = tabData[activeServiceTab];
  // const currentIndustryTab = industriesTabData[activeIndustryTab];
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [openServiceIndex, setOpenServiceIndex] = useState(null);
  const [isPackagesVisible, setIsPackagesVisible] = useState(false);
  const [isMobilePackagesOpen, setIsMobilePackagesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const productsTriggerRef = useRef(null);

  const toggleDropdown = () => {
    setIsServicesVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav-hd");
      if (window.scrollY > 10) {
        nav?.classList.add("active");
      } else {
        nav?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsServicesVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target) &&
        productsTriggerRef.current &&
        !productsTriggerRef.current.contains(event.target)
      ) {
        setIsIndustriesVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 ">
      <div className="mx-auto p-2 flex items-center justify-around gap-20 px-10 nav-hd">
        <div className="flex  items-center h-[60px] ">
          <img
            src="https://rubycommercialcentre.com/images/logoicon.png"
            alt="Logo"
            className="w-[80px]  object-contain"
          />
        </div>

        <div className="nav-desktop font-bold items-center  justify-between w-[550px] max-[1000px]:w-[500px] h-[60px] relative">
          <Link
            to="/"
            className="text-blue-700  text-[18px]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-blue-700  text-[18px]"
          >
            About
          </Link>

          <div className="relative" ref={triggerRef} onClick={toggleDropdown}>
            <div className="text-blue-700   flex items-center text-[18px] cursor-pointer">
              Courses
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            {isServicesVisible && (
              <div
                ref={dropdownRef}
                className="services-dropdown absolute top-full left-0 mt-0 bg-white shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="tabs-container">
                  <div className="tab-content">
                    {currentServiceTab.content.map((section, idx) => (
                      <div className="tab-section" key={idx}>
                        <h3>
                          <Link
                            to={section.path}
                            className="dropdown-link text-blue-500 max-[1315px]:text-2xl"
                            onClick={() => setIsServicesVisible(false)}
                          >
                            {section.title}
                          </Link>
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/Career"
            className="text-blue-700  text-[18px]"
          >
            Career
          </Link>

          <Link
            to="/contact"
            className="text-blue-700  text-[18px]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="nav-mobile">
          <button className=" mt-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={24} color="black" />
            ) : (
              <Menu size={24} color="black" />
            )}
          </button>
        </div>
      </div>

      {isOpen &&
  createPortal(
    <div className="fixed inset-0 z-[9999] bg-[#ff9704] text-black w-[300px] h-full shadow-lg right-0 overflow-y-auto">

            <div className="flex justify-between items-center p-4  border-b border-gray-700">
              <img
                src="https://rubycommercialcentre.com/images/logoicon.png"
                alt="Logo"
                className="w-[80px]"
              />
              <button className="btn-3" onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="text-xl">
              <Link
                to="/"
                className="block py-2 px-4 border-b border-gray-700 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 px-4 border-b  border-gray-700 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer border-b border-gray-700"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span className="px-4">Courses</span>
                  <span className="px-4">
                    {isMobileServicesOpen ? "×" : "+"}
                  </span>
                </div>

                {isMobileServicesOpen && (
                  <div className="bg-[#ff9704] px-4">
                    {tabData[0].content.map((service, idx) => (
                      <Link
                        key={idx}
                        to={service.path}
                        className="block py-2 border-b border-gray-700 hover:text-blue-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/Career"
                className="block py-2 px-4 border-b border-gray-700 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>

              <Link
                to="/contact"
                className="block py-2 px-4 border-b border-gray-700 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
}
