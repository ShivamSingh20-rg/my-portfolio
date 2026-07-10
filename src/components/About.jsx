"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const writeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
        else entry.target.classList.remove("active");
      },
      { threshold: 0.1 }
    );
    if (writeRef.current) observer.observe(writeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="About" className="min-h-screen md:h-screen overflow-hidden py-12 md:py-0 flex flex-col justify-center">
      <div className="flex gap-[9px] justify-center items-center mb-10">
        <i className="bx bx-user text-[45px]"></i>
        <h1 className="text-3xl font-bold">About <span className="text-[#0ef]">Me</span></h1>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0 px-5">
       <div className="flex justify-center">
  <img
    src="/Gemini_Generated_Image_ig0lgeig0lgeig0l.png"
    alt="Shivam"
    className="rounded-[18px] w-[220px] h-[220px] md:w-[280px] md:h-[280px] md:ml-[50px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out cursor-pointer hover:scale-110 hover:shadow-[0_0_40px_rgba(0,239,255,0.6)]"
  />
</div>

        <div className="animate-text-fade flex flex-col w-full md:w-[45%] gap-[25px] text-center md:text-left" ref={writeRef}>
          <div className="text-[18px]">
            <h2 className="text-2xl font-bold">I'm Shivam Singh</h2>
            <h5 className="font-normal text-slate-300">Full Stack Developer !</h5>
          </div>
          <p className="text-[14px] leading-relaxed text-slate-200">
            Hello! I'm Shivam and I am a B.Tech Computer science (IoT) student at IPS Academy - I have a great love of software development. My journey in programming started by learning the basics of C++ and Data Structures & Algorithms (DSA). This stringent training provided me with a solid foundation for the logic building that I now use in all the code I write.
          </p>
          <p className="text-[14px] leading-relaxed text-slate-200">
            Frontend Expertise & Design As this currently, I am a specialist in building responsiveness and interactivity of frontend interfaces in React, JavaScript, Html5, and CSS. I have a good aesthetic for design and readily can help develop UIs for software, websites. My suitability of items include Tailwind CSS for quick styling and integration of Rest APIs for dynamic functionalities to my applications.
          </p>
          <p className="text-[14px] leading-relaxed text-slate-200">
            Future Full Stack Goals I am currently trying to broaden my horizons in order to become a complete Full Stack Developer. I am keenly learning backend technologies such as Node.js, Express.js and Next.js, Database management. My objective is to connect my frontend expertise skills with a strong backend logic to develop complete and end-to-end web solutions.
          </p>
          <div className="text-base font-medium">
            <span className="text-[#0ef]">Email : </span> eshivamsingh20@gmail.com
          </div>
          <div className="text-base font-medium">
            <span className="text-[#0ef]">Place : </span> Madhya Pradesh , India
          </div>
        </div>
      </div>
    </section>
  );
}