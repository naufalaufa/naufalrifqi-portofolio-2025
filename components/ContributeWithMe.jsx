"use client";
import { MdArrowOutward } from "react-icons/md";
import naufalBlue from "../public/images/naufal-blue.jpg";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const ContributeWithMe = () => {
  const { lang } = useLanguage();
  const translation = translations[lang].contact;

  return (
    <section className="bg-gradient-to-br from-blue-950 via-gray-950 to-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 text-xs font-mono tracking-[0.3em] uppercase mb-4 text-center">
          {translation.label}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              {translation.heading}{" "}
              <span className="text-blue-400">{translation.headingHighlight}</span>{" "}
              {translation.headingSuffix}
            </h2>
            <p className="text-white/50 text-sm mb-10 leading-relaxed max-w-md">
              {translation.desc}
            </p>
            <a
              href="https://wa.me/6285156802452"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {translation.cta}
              <MdArrowOutward size={18} />
            </a>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
              <Image
                src={naufalBlue}
                alt="Mochamad Naufal Aufa Rifqi"
                width={380}
                height={380}
                className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-full object-cover object-top border-2 border-blue-500/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributeWithMe;
