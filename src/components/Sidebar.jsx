import React from 'react'
import { assets } from '../assets/frontend-assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
        <div className=' bg-[radial-gradient(at_bottom,_var(--tw-gradient-stops))] from-orange-900 via-black to-orange-900 h-[15%] rounded flex flex-col justify-around inset-shadow-sm inset-shadow-orange-900'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold '>HOME</p>
            </div>

            <div className='flex items-center gap-3 pl-8 cursor-pointer inset-shadow-sm '>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>SEARCH</p>
            </div>
           
            </div>
            <div className='bg-[radial-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-black to-orange-900 h-[85%] rounded inset-shadow-sm inset-shadow-orange-900'>
              <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <img className='w-8 ' src={assets.stack_icon} alt="" />
                  <p className='font-semibold'> YOUR LIBRARY</p>
               </div>
               
              <div className='flex items-center gap-3'>
                <img className='w-5' src={assets.arrow_icon} alt="" />
                <img className='w-5' src={assets.plus_icon} alt="" />

              </div>
              </div>
              <div className='p-4  bg-[conic-gradient(_var(--tw-gradient-stops))] from-orange-900 via-black to-orange-900 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'> 
                <h1 className='text-white font-bold'>CREATE YOUR FIRST PLAYLIST </h1>
                <p className='font-light '>Dont worry we will do it for You</p>
<button className="rounded-full bg-yellow-500  border-black border-b-4 font-medium overflow-hidden relative px-4 py-2  hover:brightness-100 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group text-black">
  <span className="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>
  CREATE PLAYLIST
</button>
              </div>
              <div className='p-4 bg-[conic-gradient(_var(--tw-gradient-stops))] from-orange-900 via-black to-orange-900 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'> 
                <h1>LET'S FIND SOME PODCAST TO FOLLOW</h1>
                <p className='font-light'>Stay tuned for new episodes</p>
                <button className="rounded-full bg-yellow-500  border-black border-b-4 font-medium overflow-hidden relative px-4 py-2  hover:brightness-100 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group text-black">
  <span className="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>
  BROWSE PODCAST
</button>
              </div>
            </div>
    </div>
  )
}

export default Sidebar