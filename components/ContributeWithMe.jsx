import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import naufalBlue from '../public/images/naufal-blue.jpg'
import Image from 'next/image';

const ContributeWithMe = () => {
  return (
   <>
    <h1 className='text-center text-white font-semibold italic mt-32'> {"{ "}Let's Talk With Me🍵{" }"}</h1>
    <div className='p-4 place-content-center place-items-center min-h-screen grid grid-cols-1 md:grid-cols-2 py-4'>
        <div className='order-2 md:order-1'>
          <div>
            <h4 className='text-white text-sm text-center md:text-2xl font-bold my-6 max-w-[500px]'>"Let’s build something impactful together for your business or project."</h4>
            <button className='bg-gradient-to-r from-blue-700 to-slate-400 rounded-lg text-white mx-auto block'>
                <a href='https://wa.me/6285156802452' target='_blank' className='font-bold text-sm md:text-lg whitespace-nowrap p-3 flex items-center gap-5'>
                  <p>Say Hello And Connect</p>
                  <MdArrowOutward size={35}/>
                </a>
            </button>
          </div>
        </div>
      <div className='order-1 md:order-2'>
        <div className='relative'>
          <Image src={naufalBlue} alt={naufalBlue} className='w-[300px] rounded-full h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] object-cover object-top'/>
          <div className='absolute top-0 left-0 right-0 bottom-0 rounded-full grid place-content-center place-items-center font-bold shadow-md shadow-black'>
            <h4 className='text-xs text-white text-shadow-sm text-shadow-black'>Mochamad Naufal Aufa Rifqi</h4>
          </div>
        </div>
      </div>
    </div>
  </>
     
  )
}

export default ContributeWithMe
