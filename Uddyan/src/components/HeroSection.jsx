import React, { useState } from "react";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#007FFF] px-6 py-4 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png" // replace with your logo path
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="text-[#FFD700] md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

          {/* Menu Section */}
          <ul
            className={`flex-col md:flex-row md:flex md:space-x-8 text-[#FFD700] font-semibold text-lg absolute md:static bg-[#007FFF] md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in-out md:translate-y-0 p-4 md:p-0 shadow-md md:shadow-none z-20 ${
              isOpen ? "top-16 flex" : "top-[-500px] hidden md:flex"
            }`}
          >
            <li className="hover:text-white cursor-pointer transition-colors">Home</li>
            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Courses</li>
            <li className="hover:text-white cursor-pointer transition-colors">Gallery</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#FFFFF0] py-16 md:py-24 font-family:Montserrat">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
          {/* Left Content */}
          <div className="flex-1 text-left mb-10 md:mb-0 md:pr-10">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FFD700] mb-4">UDDYAN</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
              DIY AND STEM LAB
            </h2>
            <p className="italic text-xl md:text-2xl text-[#FFD700] mb-6">
              “FLY HIGH WITH YOUR IMAGINATION & CREATIVITY”
            </p>
            <p className="text-gray-800 text-lg md:text-xl mb-6 leading-relaxed">
              Welcome to our state-of-the-art UDDYAN DIY & STEM laboratory. Uddyan
              is purely working on concept of <span className="font-bold">HANDS ON</span> experiments.
            </p>
            <button className="bg-[#007FFF] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#005FCC] transition-colors">
              Learn more
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://media.istockphoto.com/id/516366236/photo/small-indian-girl-and-boy-doing-science-experiment.jpg?s=1024x1024&w=is&k=20&c=Uon3nUFex0-DZ7PsEdgSTAKgIVqAK-NiljxqoxzEDMU=" 
              alt="STEM Lab"
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
