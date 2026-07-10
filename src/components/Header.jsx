"use client";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-100 flex h-[62px] w-full items-center justify-between md:justify-around bg-[#0e0646] px-6 text-white">
      <div className="text-lg font-bold transition-colors duration-300 hover:text-[#0ef] cursor-pointer">
    {"{ Shivam's Portfolio }"}
      </div>

      {/* Navigation Links Menu */}
      <nav
        id="nav-menu"
        className={`${
          isActive ? "flex" : "hidden"
        } md:flex absolute md:relative top-[62px] md:top-0 left-0 w-full md:w-auto flex-col md:flex-row items-center bg-[#0e0646] md:bg-transparent text-center py-5 md:py-0 font-semibold border-b-2 border-[#0ef] md:border-none animate-[fadeUp_0.5s_ease-out_forwards]`}
      >
        {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link === "Home" ? "Home" : link}`}
            onClick={() => setIsActive(false)}
            className="block w-full md:w-auto p-[14px] text-white transition-colors duration-300 hover:text-[#0ef] font-bold text-[14px] md:text-base"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Responsive Hamburger Toggle Menu */}
      <div
        className="flex md:hidden flex-col gap-[6px] p-[10px] cursor-pointer group"
        onClick={() => setIsActive(!isActive)}
      >
        <span className={`w-30 h-[3px] bg-white rounded-full transition-all duration-300 ${isActive ? "translate-y-[9px] rotate-45" : ""}`}></span>
        <span className={`w-30 h-[3px] bg-white rounded-full transition-all duration-300 ${isActive ? "opacity-0" : ""}`}></span>
        <span className={`w-30 h-[3px] bg-white rounded-full transition-all duration-300 ${isActive ? "translate-y-[-9px] -rotate-45" : ""}`}></span>
      </div>
    </header>
  );
}