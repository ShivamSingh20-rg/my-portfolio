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
 <section 
      id="About" 
      className="relative min-h-screen w-full flex flex-col justify-center py-20 md:py-13 box-border clear-both z-10"
    >

      <div className="flex gap-[9px] justify-center items-center mb-10 pt-8 md:pt-0 px-4">
        <i className="bx bx-user text-[36px] md:text-[45px]"></i>
        <h1 className="text-2xl md:text-3xl font-bold">About <span className="text-[#0ef]">Me</span></h1>
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
            <h2 className="text-2xl font-bold">I'm Shivam <span className="text-cyan-400">Singh</span></h2>
            <h5 className="font-normal text-slate-300">Full Stack Developer !</h5>
          </div>
          <p className="text-[16px] leading-relaxed text-slate-200">
          Hello! I’m Shivam , a Computer Science Engineering student at IPS Academy, Indore, with a deep passion for building high-performance software. My engineering foundation is built on strong problem-solving skills and a deep understanding of Data Structures and Algorithms (DSA), allowing me to write highly optimized and efficient code. Having mastered the MERN stack (MongoDB, Express.js, React, Node.js), I excel at bridging the gap between elegant client-side interfaces and robust server architectures. By intelligently blending core algorithmic logic with modern AI-assisted development tools, I significantly accelerate engineering cycles, optimize system efficiency, and debug complex backend systems with ease.
          </p>
          <p className="text-[16px] leading-relaxed text-slate-200">
           Beyond standard feature development, I focus heavily on DevOps infrastructure and modern System Design concepts. I possess the technical foundation required to optimize web applications and engineer them for high scalability under heavy traffic whenever a project demands it. My technical toolkit includes setting up automated CI/CD pipelines, containerizing  with Docker, and managing strategic cloud deployments. I build with a strong focus on resource efficiency and fast load times, ensuring I have the skills to deliver fully optimized, highly responsive, and architected-to-scale web solutions.
          </p>
          <p className="text-[16px] leading-relaxed text-slate-200">
            Looking ahead, I am committed to staying at the absolute forefront of industry innovation. I am currently deep-diving into Generative AI ecosystems, mastering LLM integration, and exploring the practical applications of the OpenAI API. To build the next generation of intelligent systems, I am actively learning Retrieval-Augmented Generation (RAG) frameworks and working with Vector Databases to transform standard full-stack web platforms into dynamic, AI-driven solutions.
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