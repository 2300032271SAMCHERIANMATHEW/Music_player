import React from 'react';
import Navbar from './Navbar';
import { albumsData } from '../assets/frontend-assets/assets';
import AlbumItem from './AlbumItem';
import { songsData } from '../assets/frontend-assets/assets';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      {/* Section 1: Frequently Listened */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl text-white">FREQUENTLY LISTENED</h1>
        <div className="flex overflow-x-auto gap-3 py-4 scroll-smooth scrollbar-hide">
  {albumsData.map((item) => (
    <AlbumItem key={item.id} id={item.id} name={item.name} desc={item.desc} image={item.image} />
  ))}
</div>
      </div>

      {/* Section 2: Today's Biggest Hits */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl text-white">TODAY'S BIGGEST HITS</h1>
        <div className="flex overflow-x-auto gap-4 py-4 scroll-smooth scrollbar-hide">
  {songsData.map((item) => (
    <SongItem key={item.id} id={item.id} name={item.name} desc={item.desc} image={item.image} />
  ))}
</div>
      </div>

   
      

      
    </>
  );
};

export default DisplayHome;
