"use client";
import { dataCarrerJouney, dataEducationJourney } from "@/utils/data";
import { MdOutlineDateRange, MdOutlineWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const TimelineItem = ({ title, subtitle, date, isLast }) => (
  <div className="relative pl-9 pb-8">
    {!isLast && (
      <div className="absolute left-3 top-4 bottom-0 w-px bg-gradient-to-b from-blue-600/60 to-transparent" />
    )}
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-950 border-2 border-blue-500 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-blue-400" />
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 hover:bg-white/8 transition-all duration-300">
      <h3 className="font-bold text-white text-sm leading-snug">{title}</h3>
      <p className="text-blue-400 text-xs mt-1">{subtitle}</p>
      <div className="flex items-center gap-1.5 mt-3 text-white/35 text-xs">
        <MdOutlineDateRange size={13} />
        <span>{date}</span>
      </div>
    </div>
  </div>
);

const CarrerJourney = () => {
  const { lang } = useLanguage();
  const translation = translations[lang].career;

  return (
    <section className="bg-gradient-to-r from-black to-blue-950 text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 text-xs font-mono tracking-[0.3em] uppercase mb-4">
          {translation.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          {translation.heading} <span className="text-blue-400">{translation.headingHighlight}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600/15 border border-blue-500/30 p-2.5 rounded-xl">
                <MdOutlineWork size={18} className="text-blue-400" />
              </div>
              <h3 className="font-bold text-lg">{translation.workTitle}</h3>
            </div>
            {dataCarrerJouney.map((journey, index) => (
              <TimelineItem
                key={journey.id}
                title={journey.company}
                subtitle={journey.position}
                date={journey.date}
                isLast={index === dataCarrerJouney.length - 1}
              />
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600/15 border border-blue-500/30 p-2.5 rounded-xl">
                <RiGraduationCapFill size={18} className="text-blue-400" />
              </div>
              <h3 className="font-bold text-lg">{translation.eduTitle}</h3>
            </div>
            {dataEducationJourney.map((education, index) => (
              <TimelineItem
                key={education.id}
                title={education.education}
                subtitle={education.role}
                date={education.date}
                isLast={index === dataEducationJourney.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarrerJourney;
