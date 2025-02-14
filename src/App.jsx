import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
{/*import { PlayerContext } from './context/PlayerContext'*/}
const App = () => {
  {/*const{audioRef}=useContext)*/}
  return (
    <div className='h-screen    bg-[radial-gradient(at_bottom,_var(--tw-gradient-stops))] from-orange-900 via-black to-orange-900'>
      
      <div className='h-[90%] flex'>
        <Sidebar/>
          <Display/>
          
      </div>
     <Player/>
    </div>
  )
}

export default  App