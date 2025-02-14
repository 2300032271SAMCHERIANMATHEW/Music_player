import React from 'react'
import DisplayHome from './DisplayHome'
import { Route,Routes } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded    bg-[radial-gradient(at_bottom,_var(--tw-gradient-stops))] from-orange-900 via-black to-orange-900 text-white overflow-auto lg:ml:0 inset-shadow-sm inset-shadow-orange-700'>
        <Routes>
             <Route path='/' element={<DisplayHome/>} />
             <Route path='/album/:id' element={<DisplayAlbum/>} />

        </Routes>
    </div>
  )
}

export default Display