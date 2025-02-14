import React from 'react'

const SongItem = ({ id, name, desc, image }) => {
  return (
    <article
      key={id}
      className="min-w-[280px] max-w-[280px] flex flex-col items-start justify-between border-4 border-black bg-[radial-gradient(at_bottom,_var(--tw-gradient-stops))] from-orange-900 via-black to-orange-900 p-4 shadow-[6px_6px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b text-black"
    >
      {/* Image - Fully Filling the Box Without Stretching */}
      <div className="w-full h-[280px] border-2 border-black shadow-md overflow-hidden rounded-md">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Album Name */}
      <div className="group relative mt-3 w-full">
        <h3 className="group-hover:text-red-500 text-sm font-black uppercase leading-5 text-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-white truncate
        ">
          <a  className="block">{name}</a>
        </h3>
      </div>

      {/* Description (Prevent Overflow) */}
      <p  href={`/album/${id}`} className="text-sm mt-3 border-l-4 border-red-500 pl-3 leading-5 text-white transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-white line-clamp-2">
      <a href={`/album/${id}`} >
      {desc}
      </a>
      </p>
    </article>
  );
};

export default SongItem