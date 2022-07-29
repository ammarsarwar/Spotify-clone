import React from 'react'
import One from "../../Assets/1.png"
import {AiOutlinePlusSquare} from "react-icons/ai"
import {CgHome,CgSearch,CgHeart} from "react-icons/cg"
import {BiLibrary} from "react-icons/bi"
function Sidebar() {
  return (
    <div className='flex flex-col h-screen bg-black min-w-[12em] fixed'>
      <div className='logo w-[10em] object-contain mt-[15px] ml-[1em]'>
          <img src={One} alt="spotify" />
      </div>
      <div className='sideList mt-[2em]'>
        <div className='home ml-[1.5em] group flex flex-row cursor-pointer'>
        <CgHome className='text-[#CFCFCF] group-hover:text-white' size={30}/>
          <p className='ml-[1em] font-bold text-[#808080] group-hover:text-white'>Home</p>
        </div>
        <div className='search ml-[1.5em] mt-[1em] group flex flex-row cursor-pointer'>
        <CgSearch className='text-[#CFCFCF] group-hover:text-white' size={30}/>
          <p className='ml-[1em] font-bold text-[#808080] group-hover:text-white'>Seach</p>
        </div>
        <div className='library ml-[1.5em] mt-[1em] group flex flex-row cursor-pointer'>
        <BiLibrary className='text-[#CFCFCF] group-hover:text-white' size={30}/>
          <p className='ml-[1em] font-bold text-[#808080] group-hover:text-white'>Library</p>
        </div>
      </div>
      <div className='sideListBottom flex flex-col'>
        <div className='playlist ml-[1.5em] mt-[3em] group flex flex-row cursor-pointer'>
        <AiOutlinePlusSquare className='text-[#CFCFCF] group-hover:text-white' size={30}/>
          <p className='ml-[1em] font-bold text-[#808080] group-hover:text-white'>Create Playlist</p>
        </div>
        <div className='Liked ml-[1.5em] mt-[1em] group flex flex-row cursor-pointer'>
           <CgHeart className='text-[#CFCFCF] group-hover:text-white' size={30}/>
           <p className='ml-[1em] font-bold text-[#808080] group-hover:text-white'>Liked Songs</p>
        </div>
        <hr className='mt-[1em] opacity-20 w-[80%] text-gray-700 ml-[1em]'/>
      </div>
    </div>
  )
}

export default Sidebar;