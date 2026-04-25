"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const Header = () => {
  const { lang, toggleLang } = useLanguage();
  const translation = translations[lang].nav;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-sm tracking-widest">
          NAUFAL AUFA<span className="text-blue-400">.</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 font-mono text-xs"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-white font-bold" : "text-white/30"}>
              EN
            </span>
            <span className="text-white/20 mx-0.5">/</span>
            <span className={lang === "id" ? "text-white font-bold" : "text-white/30"}>
              ID
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
