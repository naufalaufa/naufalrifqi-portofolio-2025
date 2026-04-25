"use client";
import { dataRoleDivision } from "@/utils/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { FaChevronDown } from "react-icons/fa";

const Main = () => {
  const { lang } = useLanguage();
  const translation = translations[lang].hero;

  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-950 to-blue-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(29,78,216,0.15),transparent)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-blue-400 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase mb-8">
          {translation.badge}
        </p>
        <h1 className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6">
          Mochamad Naufal
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Aufa Rifqi
          </span>
        </h1>
        <p className="text-white/40 text-xs sm:text-sm font-mono mb-10 tracking-wide">
          {translation.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {dataRoleDivision.map((role) => (
            <span
              key={role.id}
              className="text-xs sm:text-sm bg-white/5 border border-white/15 text-white/80 px-5 py-2 rounded-full backdrop-blur-sm hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white transition-all duration-300"
            >
              {role.title}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/70 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <FaChevronDown size={18} />
      </a>
    </section>
  );
};

export default Main;
