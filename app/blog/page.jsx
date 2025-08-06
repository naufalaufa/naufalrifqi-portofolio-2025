import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { dataBlog } from "@/utils/dataBlog";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-950 min-h-screen pt-2 ">
      <Header />
     <div className="py-12">
      <h1 className="text-center text-white text-sm">( BLOG ) By Mochamad Naufal Aufa Rifqi</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-12">
        {dataBlog.map((item) => {
          const {createdAt , description , id , image , title } = item
          return (
            <div key={item.id}>
                <Image src={image} alt={title}/>
              </div>
          )
        })}
      </div>
     </div>
     <Footer/>
    </div>
  );
};

export default Blog;
