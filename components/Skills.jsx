"use client";
import { SkillsItem } from "@/utils/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const Skills = () => {
  const { lang } = useLanguage();
  const translation = translations[lang].skills;

  return (
    <section className="bg-gradient-to-br from-blue-950 via-gray-950 to-black text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 text-xs font-mono tracking-[0.3em] uppercase mb-4">
          {translation.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          {translation.heading} <span className="text-blue-400">{translation.headingHighlight}</span>
        </h2>

        {SkillsItem.map((skillGroup, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {Object.entries(skillGroup).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-white/8 transition-all duration-300"
              >
                <h3 className="text-xs font-bold mb-5 text-blue-400 tracking-[0.15em] uppercase">
                  {translation.categories[category] ?? category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => {
                    const Icon = item.icon;
                    return item.name ? (
                      <div
                        key={item.id}
                        className="flex items-center gap-1.5 bg-white/8 border border-white/10 hover:bg-blue-600/20 hover:border-blue-500/40 transition-all duration-200 px-3 py-1.5 rounded-lg text-xs font-medium text-white/80 hover:text-white cursor-default"
                      >
                        {Icon && <Icon size={13} className="shrink-0" />}
                        {item.name}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
