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
    <section id="About" className="min-h-screen py-20 flex flex-col justify-center">
      {/* Section Header */}
      <div className="flex gap-3 justify-center items-center mb-16">
        <i className="bx bx-user text-[42px] text-cyan-400"></i>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          About <span className="text-gradient text-cyan-400">Me</span>
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        
        {/* Image Section - Left Side */}
        <div className="flex-shrink-0 relative group flex justify-center w-full lg:w-[40%] lg:sticky lg:top-32">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
          
          <img
            src="/Gemini_Generated_Image_ig0lgeig0lgeig0l.png"
            alt="Shivam"
            className="relative z-10 rounded-[2rem] w-[260px] h-[260px] md:w-[350px] md:h-[350px] object-cover border border-white/10 bg-zinc-900/50 shadow-2xl shadow-black/40 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Narrative Text Content - Right Side */}
        <div className="animate-text-fade flex flex-col gap-8 w-full lg:w-[60%]" ref={writeRef}>
          
          {/* Intro */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">I'm Shivam Singh</h2>
            <h5 className="font-medium text-cyan-400 mb-4 text-lg">Full Stack Software Developer</h5>
            <p className="text-[15px] leading-relaxed text-zinc-400">
               I am a B.Tech Computer Science (IoT) student at IPS Academy with a comprehensive passion for software development and a proven track record of building complete, production-ready web applications. My journey in programming is grounded in strong fundamentals—beginning with C++ and rigorous Data Structures & Algorithms training—which have cultivated the logical problem-solving mindset that drives every line of code I write today.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2">Full Stack Competency</h3>
            <p className="text-[15px] leading-relaxed text-zinc-400">
            As a full-stack developer proficient in the MERN stack and Next.js, I architect robust backend systems alongside responsive, aesthetically refined user interfaces. I combine solid backend architecture and database design with frontend expertise in React, JavaScript, Tailwind CSS, and seamless REST API integration. This technical precision enables me to deliver complete, scalable, and data-driven end-to-end web solutions that are both highly functional and visually engaging.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2">Devops Knowledge</h3>
            <p className="text-[15px] leading-relaxed text-zinc-400">
                 Beyond standard feature development, I focus heavily on DevOps infrastructure and modern System Design concepts. I possess the technical foundation required to optimize web applications and engineer them for high scalability under heavy traffic whenever a project demands it. My technical toolkit includes setting up automated CI/CD pipelines, containerizing  with Docker, and managing strategic cloud deployments. I build with a strong focus on resource efficiency and fast load times, ensuring I have the skills to deliver fully optimized, highly responsive, and architected-to-scale web solutions.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2">Future learning</h3>
            <p className="text-[15px] leading-relaxed text-zinc-400">
           Looking ahead, I am committed to staying at the absolute forefront of industry innovation. I am currently deep-diving into Generative AI ecosystems, mastering LLM integration, and exploring the practical applications of the OpenAI API. To build the next generation of intelligent systems, I am actively learning Retrieval-Augmented Generation (RAG) frameworks and working with Vector Databases to transform standard full-stack web platforms into dynamic, AI-driven solutions.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-6 mt-2 pt-6 border-t border-white/10">
            <div className="text-[15px] font-medium text-zinc-300 flex items-center gap-2">
              <i className="bx bx-envelope text-xl text-cyan-400"></i>
              <span>eshivamsingh20@gmail.com</span>
            </div>
            <div className="text-[15px] font-medium text-zinc-300 flex items-center gap-2">
              <i className="bx bx-map text-xl text-cyan-400"></i>
              <span>Madhya Pradesh, India</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}






  