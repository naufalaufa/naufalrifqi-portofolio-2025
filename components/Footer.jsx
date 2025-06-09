import { dataFooter } from "@/utils/data";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm mb-5">
          © 2025 Mochamad Naufal Aufa Rifqi All rights reserved.
        </p>
        {dataFooter.map((footer) => {
          const { id, title, link, icon: Icon } = footer;
          return (
            <a
              key={id}
              href={link}
              className="text-white mx-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={25} className="inline-block mr-1 text-white" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
