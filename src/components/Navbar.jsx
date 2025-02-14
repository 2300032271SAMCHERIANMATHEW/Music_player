import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
const Navbar = () => {
  return (
   
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
      <div className='flex items-center gap-2'>
        <img className='w-8  bg-amber-950 p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
        <img className='w-8  bg-amber-950  p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />

      </div>
      <div className='flex items-center gap-4'>
      <button className="rounded cursor-pointer uppercase bg-red-200 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition text-black">
  EXPLORE CONCERTS
</button>
<button className="rounded-full cursor-pointer uppercase bg-red-200 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition text-black">
  +
</button>       <p className='bg-purple-500 text-black  px-4 py-2 rounded-full flex items-center justify-center'>A</p>
      </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
    <button class="rounded-full bg-yellow-500   border-black border-b-4 font-medium overflow-hidden relative px-4 py-2  hover:brightness-100 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group text-black">
  <span className="bg-yellow-400 shadow-gray-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-[1000ms] shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>
  ALL
</button>
<button className="rounded-full bg-yellow-500  border-black border-b-4 font-medium overflow-hidden relative px-4 py-2   hover:brightness-100 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group text-black">
  <span className="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>
  MUSIC
</button>      
<button className="bg-yellow-500  border-black border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-100 hover:border-t-4 hover:borer-b active:opacity-75 outline-none duration-300 group text-black">
  <span className="bg-yellow-400 shadow-gray-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>
  PODCASTS
</button>
    </div>
    </>
  )
}

export default Navbar