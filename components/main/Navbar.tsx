

import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
           N.VIPIN PRASAD
          </span>
        </a>

        <div className="w-[700px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="https://leetcode.com/vipinprasad/" className="cursor-pointer">
             LeetCode 
            </a>
            <a href="https://github.com/vipin10100001" className="cursor-pointer">
            GitHub 
            </a>
            <a href="https://drive.google.com/file/d/1UwaRG1Px6WTDRgvwCTv7MKDkaoHdPfcY/view?usp=sharing">
            Resume
            </a>
            <a href="https://www.geeksforgeeks.org/user/nvipinp8drq/" className="cursor-pointer">
            GeeksforGeeks Profile
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
