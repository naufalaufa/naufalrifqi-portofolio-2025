"use client";
import { AboutImage } from "@/utils/data";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const About = () => {
  const { lang } = useLanguage();
  const translation = translations[lang].about;

  return (
    <section
      id="about"
      className="bg-gradient-to-bl from-black via-gray-950 to-blue-950 text-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-blue-400 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            {translation.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
            {translation.heading}{" "}
            <span className="text-blue-400">{translation.headingHighlight}</span>
          </h2>
          <div className="space-y-4 text-white/65 text-base leading-relaxed">
            <p>
              Hi, I&apos;m{" "}
              <span className="text-white font-semibold mr-1">Mochamad Naufal Aufa Rifqi</span>
              {translation.p1_after_name}
            </p>
            <p>
              <span className="text-blue-400 font-semibold">{translation.p2_role}</span>{" "}
              {translation.p2_after_role}
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/Mochamad-Naufal-Aufa-Tech-Resume-2-Years.pdf"
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {translation.resume}
            </a>
          </div>
        </div>

        <div className="columns-2 gap-4">
          {AboutImage.map((image) => (
            <div
              key={image.id}
              className="mb-4 overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                alt="Naufal"
                src={image.image}
                width={300}
                height={400}
                className="w-full h-auto hover:scale-105 transition-transform duration-500 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
