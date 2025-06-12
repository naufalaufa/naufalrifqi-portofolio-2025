import { AboutImage } from "@/utils/data";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-white to-white/90 grid grid-cols-1 md:grid-cols-2 py-24 place-content-center ">
      <div className="ml-5">
        <h1 className="mb-20 text-sm font-semibold">
          {"{ "}Introduction{" }"}
        </h1>
        <div className="text-lg">
          <p>
            Hi, I'm{" "}
            <span className="font-bold italic">Mochamad Naufal Aufa Rifqi</span>{" "}
            Live in Jakarta - Indonesia Born Since 2005 — a passionate{" "}
            <span className="font-bold italic">Front-End Developer</span> with 1
            year of hands-on experience crafting seamless user interfaces and
            dynamic web applications. My primary weapon of choice is{" "}
            <span>JavaScript</span>, and I specialize in building modern,
            scalable front-end solutions using
            <span className="mx-1 font-bold italic">React.js and Next.js</span>
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/Mochamad-Naufal-Aufa-Rifqi-Tech-06122025.pdf"
            rel="noreferrer"
            target="_blank"
            className="bg-black border border-white text-center m-auto py-2 px-2 w-[50%] rounded-lg text-white hover:bg-white hover:text-black hover:border-black
            duration-300 cursor-pointer text-md whitespace-nowrap font-bold"
          >
            View Resume⬇️
          </a>
          <div className="w-[24vw] mt-2 h-[0.7] bg-black"></div>
        </div>
      </div>
      <div className="columns-4 m-5 gap-3">
        {AboutImage.map((image) => {
          return (
            <Image
              alt="About Image"
              key={image.id}
              src={image.image}
              width={200}
              height={200}
              className="rounded-lg m-3 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
