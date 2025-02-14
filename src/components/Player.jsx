import React, { useState, useEffect } from 'react'
import { assets, songsData } from '../assets/frontend-assets/assets'

const Player = () => {
  {/*}
  const [progress, setProgress] = useState(30); // Example progress value

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0)); // Simulate progress
    }, 3000);
    return () => clearInterval(interval);
  }, []);
*/}
  return (
    <div className="h-[90px] bottom-0 left-0 w-full bg-b text-white px-6 py-2 flex items-center justify-between z-50  inset-shadow-sm inset-shadow-orange-900">
      
      {/* Left Section - Song Info */}
      <div className="hidden lg:flex items-center gap-4 w-1/4">
        <img className="w-14 h-14 rounded" src={songsData[0]?.image} alt="Song Thumbnail" />
        <div>
          <p className="text-white font-semibold">{songsData[0]?.name}</p>
          <p className="text-gray-400 text-sm">{songsData[0]?.desc.slice(0, 20)}</p>
        </div>
      </div>

      {/* Center Section - Controls */}
      <div className="flex flex-col w-1/2">
        <div className="flex items-center justify-center gap-6">
          <img className="w-6 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img className="w-6 cursor-pointer" src={assets.prev_icon} alt="Previous" />
          <img className="w-8 cursor-pointer" src={assets.play_icon} alt="Play" />
          <img className="w-6 cursor-pointer" src={assets.next_icon} alt="Next" />
          <img className="w-6 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 w-full mt-2">
          <p className="text-white text-sm">1:06</p>
          <div className="w-full h-1 bg-gray-600 rounded cursor-pointer relative">
            <div className="h-1 bg-white rounded" ></div>
          </div>
          <p className="text-white text-sm">3:20</p>
        </div>
      </div>

      {/* Right Section - Extra Controls */}
      <div className="hidden lg:flex items-center gap-3 w-1/4 justify-end">
        <img className="w-5 cursor-pointer" src={assets.queue_icon} alt="Queue" />
        <img className="w-5 cursor-pointer" src={assets.volume_icon} alt="Volume" />
        <div className="w-20 h-1 bg-gray-400 rounded">
          <div className="h-1 bg-white rounded" style={{ width: "50%" }}></div>
        </div>
        <img className="w-5 cursor-pointer" src={assets.mini_player_icon} alt="Mini Player" />
      </div>
    </div>
  )
}

export default Player
