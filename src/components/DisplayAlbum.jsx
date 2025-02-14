import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/frontend-assets/assets';


const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData= albumsData[id]
    console.log(albumData);
   return (
    <> 
       <Navbar/>
       <div className="flex items-center gap-8 md:gap-16">
  {/* Image Section */}
  <img className="mt-2 rounded-2xl w-40 md:w-64 lg:w-80" src={albumData.image} alt="" />

  {/* Text Section */}
  <div className="flex flex-col max-w-[600px]">
    <p className="text-sm text-gray-400 uppercase tracking-widest">ALBUM</p>
    <h2 className="text-5xl font-bold mb-4 md:text-7xl leading-tight break-words">
      {albumData.name}
    </h2>
    <h4 className="text-lg text-gray-300">{albumData.desc}</h4>
  </div>
</div>

{/*
   <hr />
      {
        songsData.map((item,index)=>(
          <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center'>
                <p className='text-white'>
                  <b className='mr-4 text-white'>{index+1}</b>
                  <img className='inline w-10 mr-5' src={item.image} alt="" />
                  {item.name}
                </p>
          </div>
        ))
      }
        */}

       
    </>
  )
}

export default DisplayAlbum