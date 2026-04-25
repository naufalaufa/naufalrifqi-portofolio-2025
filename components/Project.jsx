"use client";
import { projects } from "@/utils/data";
import Image from "next/image";
import { CiLink } from "react-icons/ci";
import { MdLock } from "react-icons/md";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const Project = () => {
  const { lang } = useLanguage();
  const translation = translations[lang].projects;

  return (
    <section className="bg-gradient-to-bl from-black via-gray-950 to-blue-950 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 text-xs font-mono tracking-[0.3em] uppercase mb-4">
          {translation.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
          {translation.heading} <span className="text-blue-400">{translation.headingHighlight}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const { id, description, href, image, name, status, statusLink, role } = project;
            return (
              <div
                key={id}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden shrink-0">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {role && (
                    <span className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
                      {role.trim()}
                    </span>
                  )}
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white/80 text-xs px-2.5 py-1 rounded-full border border-white/15">
                    {status}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="text-white font-bold text-sm leading-snug">{name}</h3>
                  <p className="text-white/50 text-xs leading-[1.85] flex-1">{description}</p>
                  <div className="pt-2 border-t border-white/8">
                    {statusLink ? (
                      <Link
                        className="inline-flex items-center gap-1.5 text-blue-400 hover:text-white text-xs font-medium transition-colors duration-200 group/link"
                        href={href}
                        target="_blank"
                      >
                        <span>{translation.visitLink}</span>
                        <CiLink
                          size={14}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                        />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-white/25 text-xs italic">
                        <MdLock size={12} />
                        {translation.privateLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
