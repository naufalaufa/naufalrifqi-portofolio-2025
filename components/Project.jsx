import { projects } from "@/utils/data";
import Image from "next/image";
import { CiLink } from "react-icons/ci";
import Link from "next/link";

const Project = () => {
  return (
    <div className="py-24 p-4">
      <div>
        <h1 className="font-bold text-white  ml-4 text-center italic">
          {"{ "}Project{" }"}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-8">
        {projects.map((project) => {
          const {
            id,
            description,
            href,
            image,
            name,
            status,
            statusLink,
            techstack,
            role,
          } = project;
          return (
            <div className="text-white text-sm relative" key={id}>
              <Image src={image} alt={name} />
              <p>{description}</p>
              <p>{techstack}</p>
              <span className="bg-black p-2 rounded-xl text-white border-white border font-bold absolute top-0 -rotate-12">
                {status}
              </span>
              <p
                className={
                  role &&
                  "bg-gradient-to-r text-xs from-blue-400 to-blue-700 p-2 rounded-lg my-2 text-center absolute top-0 right-0"
                }
              >
                {role}
                👨‍💻
              </p>
              {statusLink && (
                <Link
                  className="bg-black flex items-center gap-2 max-w-[100px] text-white p-2 rounded-lg border border-white  mt-4 cursor-pointer hover:bg-white hover:text-black duration-100"
                  href={href}
                  target="_blank"
                >
                  <p>Visit Link</p>
                  <CiLink />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
