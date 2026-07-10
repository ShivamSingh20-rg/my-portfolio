"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Mern Stack Developer","Web Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen md:h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-start pt-[100px] md:pt-0 gap-10 md:gap-[100px] px-5 md:px-0"
    >
      <div className="flex flex-col gap-9 w-full md:w-[60%] md:pl-[14%] text-center md:text-left items-center md:items-start text-[25px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-[43px] font-bold leading-tight">
            Hi,
          </h1>
          <h1 className="text-3xl md:text-[43px] font-bold leading-tight">
            I'm Shivam Singh
          </h1>
          <h3 className="font-bold text-xl md:text-[30px]">
            I Am <span ref={el} className="text-[#0ef]"></span>
          </h3>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="h-[45px]">
            {/* Switched button text to text-black so it is readable on the bright neon background */}
            <button className="w-40 h-full rounded-[30px] bg-[#0ef] text-black border-none hover:shadow-[0_0_17px_cyan] transition-all duration-300">
              <a
                href="#About"
                className="text-white  text-[17px] font-bold no-underline flex items-center justify-center gap-1 w-full h-full"
              >
                About Me{" "}
                <i className="bx bx-down-arrow-alt bg-white text-black rounded-full p-[2px]"></i>
              </a>
            </button>
          </div>

          <div className="flex gap-[15px] mt-[20px]">
            {[
              {
                icon: "bxl-instagram",
                url: "https://www.instagram.com/sh1vam__20/",
              },
              {
                icon: "bxl-github",
                url: "https://github.com/ShivamSingh20-rg",
              },
              {
                icon: "bxl-linkedin",
                url: "https://www.linkedin.com/in/shivam-singh-gaharwar-ab2488390/",
              },
              { icon: "bxl-discord", url: "#" },
              { icon: "bxl-twitter", url: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border-2 border-cyan-400 text-cyan-300 p-2 transition-all duration-300 hover:text-black hover:bg-[#0ef]"
              >
                {/* Fixed template string: this outputs "bx bxl-instagram" perfectly */}
                <i className={`bx ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-auto flex justify-center pr-23 ">
        <img
          src="/Gemini_Generated_Image_ig0lgeig0lgeig0l.png"
          alt="Shivam"
          className="w-[70%] md:w-[55%] rounded-full shadow-[0_0_80px_cyan]"
        />
      </div>
    </section>
  );
}
