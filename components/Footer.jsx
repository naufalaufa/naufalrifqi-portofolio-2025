import { dataFooter } from "@/utils/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grid py-12 md:grid-cols-2 place-content-center place-items-center w-screen m-auto bg-blue-700">
        <div className="text-sm mb-5 text-white text-center">
          <div>
            <p>Personal Portofolio </p>
            <p className="font-bold">Mochamad Naufal Aufa Rifqi</p>
          </div>
          <p className="mt-9 mb-2 text-xs">© Copyright By Mochamad Naufal Aufa Rifqi 2025</p>
        </div>
        <div className="text-sm mb-5 text-white border-white">
          <p className="font-bold text-center">
          Contact Me
          </p>
            <p className="text-xs mb-8 max-w-[200px] text-center">Connect my social media to Contribute Collaborate and Create Impact.</p>
          <div className="flex gap-5 justify-center my-2">
            {dataFooter.map((footerItem) => (
              <Link target="_blank" key={footerItem.id} href={footerItem.link}>{<footerItem.icon size={25}/>}</Link>
            ))}
          </div>
        </div>
    </footer>
  );
};

export default Footer;
