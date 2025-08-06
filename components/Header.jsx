"use client";
import { data } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-around max-w-[95vw] w-full m-auto p-4 rounded-lg">
      {data.map((item) => {
        const { id, title, path } = item;
        return (
          <Link
            key={id}
            href={path}
            className={
              pathname === path ? "text-white font-bold text-xs underline" : "text-white text-xs"
            }
          >
            {title}
          </Link>
        );
      })}
    </header>
  );
};

export default Header;
