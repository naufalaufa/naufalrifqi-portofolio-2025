import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import undrawImage from '../public/images/avatar_undraw.png'
import Image from 'next/image';

const ContributeWithMe = () => {
  return (
    <>
    <h1 className='text-center text-white font-semibold italic mt-32'> {"{ "}Let's Talk With Me🍵{" }"}</h1>
    <div className='p-4 place-content-center place-items-center min-h-screen grid grid-cols-1 md:grid-cols-2 py-4'>
        <div className='order-2 md:order-1'>
            <h4 className='text-white text-lg md:text-2xl font-bold my-6 max-w-[500px] '>"Let’s build something impactful together for your business or project."</h4>
            <button className='bg-gradient-to-r from-blue-700 to-slate-400 p-3 rounded-lg text-white flex items-center gap-5'>
                <a href='https://wa.me/6285156802452' target='_blank' className='font-bold text-sm md:text-lg whitespace-nowrap'>Say Hello And Connect</a>
                <MdArrowOutward size={35}/>
            </button>
        </div>
      <div className='order-1 md:order-2'>
        <Image src={undrawImage} alt={undrawImage} className='w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover'/>
      </div>
    </div>
    </>
     
  )
}

export default ContributeWithMe
