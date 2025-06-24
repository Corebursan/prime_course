import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import bannerImg from "../assets/CourseImage.gif"
const Banner = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Course_Tracker"],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-black text-white px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="text-center md:text-left w-full md:w-1/2 space-y-5">
          <h2 className="text-lg md:text-xl text-purple-300 font-medium">
            Hi 👋
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome in 
          </h1>
          <h3 className="text-xl md:text-2xl">
            <span className="text-orange-400 font-semibold underline" ref={typedRef}></span>
          </h3>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 pt-4">
            {[
              { href: "https://github.com/RishavKumar8578", icon: "fa-github" },
              { href: "https://linkedin.com/in/rishav-kumar-4b15b6197", icon: "fa-linkedin-in" },
              { href: "https://youtube.com/@rishavkumar8564", icon: "fa-youtube" },
              { href: "https://www.instagram.com/vats_rishav_143/", icon: "fa-instagram" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-orange-500 rounded-full transition"
              >
                <i className={`fab ${item.icon} text-xl`}></i>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="#contacts"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-md transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content: Animated Circle */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-700 to-orange-500 shadow-2xl flex items-center justify-center text-4xl font-bold text-white">
            <img className="rounded-full border-white" src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
