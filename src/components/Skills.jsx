"use client";
import { useEffect, useRef } from "react";

export default function Skills() {
  const gridRef = useRef(null);

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

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".skilcard");
      cards.forEach((card) => observer.observe(card));
    }
    return () => observer.disconnect();
  }, []);

  const skillData = [
    { name: "C", img: "https://img.icons8.com/?size=96&id=40670&format=png" },
    { name: "C++", img: "https://img.icons8.com/?size=96&id=40669&format=png" },
    { name: "HTML", img: "https://img.icons8.com/?size=96&id=20909&format=png" },
    { name: "CSS3", img: "https://img.icons8.com/?size=96&id=21278&format=png" },
    { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", img: "https://img.icons8.com/?size=96&id=108784&format=png" },
    { name: "TypeScript", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9b1LuHC5pSz1dVnRCTQA9mPIq_PXE9PF-hn-nXGVyw&s=10" },
    { name: "React.Js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://img.icons8.com/?size=128&id=yUdJlcKanVbh&format=png" },
    { name: "Node.js", img: "https://img.icons8.com/?size=96&id=54087&format=png" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", img: "https://img.icons8.com/?size=96&id=38561&format=png" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "SQL", img: "https://img.icons8.com/?size=96&id=13406&format=png" },
    { name: "Java", img: "https://img.icons8.com/?size=96&id=13679&format=png" },
    { name: "Docker", img: "https://img.icons8.com/?size=96&id=22813&format=png" },
    { name: "CI/CD", img: "https://img.icons8.com/?size=128&id=63198&format=png" },
    { name: "Git", img: "https://img.icons8.com/?size=96&id=20906&format=png" },
    { name: "GitHub", img: "https://img.icons8.com/?size=128&id=3tC9EQumUAuq&format=png" }
  ];

  return (
    <section id="Skills" className="min-h-screen py-10 flex flex-col">
      <div className="flex gap-3 justify-center items-center mt-4 mb-12">
        <div className="text-[49px]"><i className="bx bx-laptop"></i></div>
        <h1 className="text-3xl font-bold">Skills & <span className="text-[#0ef]">Abilities</span></h1>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 max-w-[1000px] mx-auto px-5 justify-items-center"
      >
        {skillData.map((skill, index) => (
          <div
            className="skilcard animate-text-fade bg-transparent p-4 w-full max-w-[190px] h-[100px] rounded-xl flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-[6px] shadow-[1px_1px_15px_#012290f7,1px_1px_30px_#0053b8f7]"
            key={index}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <img src={skill.img} alt={skill.name} className="w-12 h-12 object-contain mb-2" />
              <h1 className="text-sm font-medium leading-tight">{skill.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}