"use client";
import { useEffect, useRef } from "react";

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
          else entry.target.classList.remove("active");
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".project-card");
      cards.forEach((card) => observer.observe(card));
    }
    return () => observer.disconnect();
  }, []);

  const projectData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application equipped with user authentication, a secure payment gateway integration, and a real-time dashboard.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind"],
      liveUrl: "https://mern-e-commerce-ashy.vercel.app/",
      githubUrl: "https://github.com/ShivamSingh20-rg/MERN-E_COMMERCE",
      image: "https://www.pngkey.com/png/detail/247-2475118_ecommerce-e-commerce-banner-png.png"
    },
    {
      title: "Hospital Management",
      description: "A healthcare platform designed to streamline patient registration, medical history tracking, doctor scheduling, and real-time appointment booking with automated email notification.",
      tech: ["React.js", "Mongodb", "Express.js", "Tailwind"],
      liveUrl: "https://mern-hospital-mangement.vercel.app/",
      githubUrl: "https://github.com/ShivamSingh20-rg/MERN-HOSPITAL-MANGEMENT",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGIahGIQTNS4BqoXQnM20tBX8i2t3NvaNX4rTmlfv3g&s=10"
    },
    {
      title: "Taskflow App",
      description: "A full-stack task manager featuring seamless CRUD operations, persistent MongoDB storage, and an intuitive UI to organize daily schedules and track task completion in real time.",
      tech: ["React.js", "Node.js", "Mongodb", "Tailwind"],
      liveUrl: "https://09-textapp.vercel.app/",
      githubUrl: "https://github.com/ShivamSingh20-rg/MERN-Tasklflow/tree/main",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR39P7oW9hX2cp4BCzzzP_vvdDLf6NtGdil4tIiAN-EYOQ08-C_XaQdVI&s"
    }
  ];

  return (
    <section id="Projects" ref={sectionRef} className="min-h-screen py-12 flex flex-col bg-transparent">
      {/* Section Header */}
      <div className="flex gap-3 justify-center items-center mt-4 mb-12">
        <div className="text-[42px] text-[#0ef]"><i className="bx bx-code-alt"></i></div>
        <h1 className="text-2xl font-bold text-white">My Live <span className="text-[#0ef]">Projects</span></h1>
      </div>

      {/* Projects Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[950px] mx-auto px-5 w-full justify-items-center">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card bg-slate-900/40 backdrop-blur-md border border-cyan-900/30 w-full max-w-[280px] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col shadow-[1px_1px_12px_#01229050,1px_1px_25px_#0053b830] hover:shadow-[0_0_20px_#0053b890]"
          >
            {/* Reduced height of the Image Banner */}
            <div className="w-full h-32 overflow-hidden relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
            </div>

            {/* Project Details Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-bold text-white mb-1.5 tracking-wide">{project.title}</h2>
              <p className="text-xs text-gray-400 font-normal leading-relaxed mb-3 flex-grow">
                {project.description}
              </p>

              {/* Tech Badges Stack */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((techName, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] font-medium bg-cyan-950/60 border border-cyan-500/20 text-[#0ef] px-2 py-0.5 rounded-full"
                  >
                    {techName}
                  </span>
                ))}
              </div>

              {/* Compact Action Links */}
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-800/60">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs flex items-center gap-1"
                >
                  <i className="bx bxl-github text-lg"></i> Code
                </a>
                
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0ef] text-slate-950 font-semibold px-3 py-1 rounded-md text-[11px] tracking-wide flex items-center gap-1 shadow-[0_0_8px_#0ef] hover:shadow-[0_0_15px_#0ef] transition-all duration-300 transform active:scale-95"
                >
                  Live Demo <i className="bx bx-link-external text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}