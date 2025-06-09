import Header from "@/components/Header";
import { dataBlog } from "@/utils/dataBlog";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-black min-h-screen pt-2 ">
      <Header />
      <div className="grid grid-cols-2 py-8 px-8 gap-5 min-h-screen">
        {dataBlog.map((blog) => {
          return (
            <div
              key={blog.id}
              className="bg-white rounded-lg rotate-1 relative"
            >
              <Image
                className="w-full h-full object-cover"
                src={blog.image}
                alt={blog.title}
              />
              <div className="absolute bottom-0 top-0 right-0 left-0 grid place-content-center place-items-center text-white font-bold">
                <p className="text-xl text-shadow-slate-900 text-shadow-lg">
                  {blog.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
