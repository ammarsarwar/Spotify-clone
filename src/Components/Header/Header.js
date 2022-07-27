import React from 'react'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from "react-icons/io";
function Header() {
  return (
    <div className='headerComponent flex flex-row justify-between items-center h-[80px]'>
            <div className='headerDirection flex flex-row justify-around items-center ml-[2em] w-[5em]'>
                <div className='leftArrow cursor-pointer	'>
                  <IoIosArrowDropleftCircle className='text-[#808080]' size={30}/>
                </div>
                <div className='rightArrow cursor-pointer	'>
                  <IoIosArrowDroprightCircle className='text-[#808080]' size={30}/>
                </div>
            </div>
            <div className='headerButtons flex flex-row justify-around items-center mr-[2em] w-[12em]'>
              <div className='upgrade border bg-[#fff] rounded-3xl hover:bg-black'>
                <p className='text-[15px] w-[5em] p-1 text-center hover:text-white cursor-pointer font-bold'>Upgrade</p>
              </div>
              <div className='user border bg-black rounded-3xl hover:bg-white'>
                <p className='text-[15px] w-[5em] p-1 text-center text-[#808080] hover:text-black cursor-pointer font-bold'>Ammar</p>
              </div>
            </div>
        </div>
  )
}

export default Header;