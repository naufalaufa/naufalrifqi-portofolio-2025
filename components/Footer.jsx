"use client";
import { dataFooter } from "@/utils/data";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const translation = translations[lang].footer;

  return (
    <footer className="bg-black border-t border-white/10 py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-bold text-lg text-white tracking-widest">
            NAUFAL<span className="text-blue-400">.</span>
          </p>
          <p className="text-white/35 text-xs mt-2">{translation.portfolioLabel}</p>
          <p className="text-white/25 text-xs mt-8">{translation.copyright}</p>
        </div>

        <div className="md:text-right">
          <p className="font-bold text-sm text-white mb-2">{translation.connectTitle}</p>
          <p className="text-white/35 text-xs mb-6 max-w-[220px] md:ml-auto">
            {translation.connectDesc}
          </p>
          <div className="flex gap-4 md:justify-end">
            {dataFooter.map((footerItem) => (
              <Link
                target="_blank"
                key={footerItem.id}
                href={footerItem.link}
                aria-label={footerItem.title}
                className="text-white/40 hover:text-white transition-colors duration-300"
              >
                <footerItem.icon size={22} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
