export default function Footer() {
  const quickLinks = ["Home", "About", "Skills", "Projects"];

  const socials = [
    { icon: "bx bxl-github", href: "https://github.com/ShivamSingh20-rg", label: "GitHub" },
    { icon: "bx bxl-linkedin-square", href: "https://www.linkedin.com/in/shivam-singh-gaharwar-ab2488390/", label: "LinkedIn" },
    { icon: "bx bxl-twitter", href: "https://twitter.com/", label: "Twitter" },
    { icon: "bx bxl-instagram", href: "https://www.instagram.com/sh1vam__20/", label: "Instagram" },
  ];

  return (
    <footer id="Contact" className="relative w-full bg-[#020c2e] pt-16 pb-6 overflow-hidden">
      {/* top glow divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[240px] bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr_1.2fr] gap-12 md:gap-8">
          {/* Brand / intro */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Shivam Singh Gaharwar
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-400 max-w-xs mx-auto md:mx-0">
              Thank you for visiting my portfolio. Have an idea or a role in mind? Let&apos;s build something great together.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-slate-300 text-lg
                             transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300 hover:-translate-y-0.5"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h3 className="text-[13px] font-semibold tracking-[0.18em] text-cyan-400 uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col items-center md:items-start gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="group inline-flex items-center gap-2 text-[15px] text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-400"
                  >
                    <i className="bx bx-chevron-right text-cyan-400 text-base transition-transform duration-300 group-hover:translate-x-1"></i>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="text-center md:text-left">
            <h3 className="text-[13px] font-semibold tracking-[0.18em] text-cyan-400 uppercase mb-5">
              Contact Info
            </h3>
            <ul className="flex flex-col items-center md:items-start gap-4">
              <li className="flex items-center gap-3 text-[15px] text-slate-300">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-cyan-400 shrink-0">
                  <i className="bx bx-phone text-lg"></i>
                </span>
                <a href="tel:+918602246177" className="no-underline text-slate-300 hover:text-cyan-300 transition-colors">
                  +91 86022 46177
                </a>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-slate-300">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-cyan-400 shrink-0">
                  <i className="bx bx-envelope text-lg"></i>
                </span>
                <a href="mailto:eshivamsingh20@gmail.com" className="no-underline text-slate-300 hover:text-cyan-300 transition-colors break-all">
                  eshivamsingh20@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-slate-300">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-cyan-400 shrink-0">
                  <i className="bx bx-globe text-lg"></i>
                </span>
                Madhya Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} All Rights Reserved | Designed By Shivam Singh Gaharwar
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-[13px] text-slate-300 no-underline border border-white/10 rounded-full px-4 py-2
                       transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300"
          >
            Back to top
            <i className="bx bx-up-arrow-alt text-base"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}