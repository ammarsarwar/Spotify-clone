import React, {useState} from 'react'
import songs from "../../Assets/songs.js"

function Main() {
    const [selectedSong, setSelectedSong] = useState(null)
    const songClicked = (song) => {
        setSelectedSong(song);
    }
  return (
    <div className="mainComponent flex flex-col p-[20px]">
        <div className="songComponent">
            <div className='text ml-[20px]'>
                <h1 className='font-sans text-white font-bold text-[25px]'>Trending Now</h1>    
                <div className='songs flex flex-row flex-wrap mt-[20px]'>
                    {songs.map((song, index) => {
                        return(
                            <div onClick={()=>songClicked(song)} key={index} className="flex flex-col bg-[#171717] shadow-2xl rounded-lg p-[15px] m-[15px] min-w-[11em] max-w-[13em] h-[17em] cursor-pointer hover:bg-[#282828] hover:animate-pulse ">
                                <div className='image max-w-[10em] rounded overflow-hidden hover:shadow-2xl'>
                                    <img src={require("../../Assets/music.png")} alt={song.name}/>
                                </div>
                                <div className='name mt-[20px] ml-1'>
                                    <h2 className=' text-white font-bold text-[15px]'>{song.name}</h2> 
                                </div>
                                <div className='singer mt-[5px] ml-1'>
                                    <h2 className=' text-[#5a5a5a] text-[12px]'>{song.singer}</h2> 
                                </div>  
                            </div>
                        )
                    })}
                </div>
                {/* ----------------- */}
                <div className='songs flex flex-row flex-wrap'>
                    {songs.map((song, index) => {
                        return(
                            <div onClick={()=>songClicked(song)} key={index} className="flex flex-col bg-[#171717] shadow rounded p-[15px] m-[15px] min-w-[12em] max-w-[13em] h-[17em] cursor-pointer">
                                <div className='image max-w-[10em] rounded overflow-hidden'>
                                    <img src={require("../../Assets/music.png")} alt={song.name}/>
                                </div>
                                <div className='name mt-[20px] ml-1'>
                                    <h2 className=' text-white font-bold text-[15px]'>{song.name}</h2> 
                                </div>
                                <div className='singer mt-[5px] ml-1'>
                                    <h2 className=' text-[#5a5a5a] text-[12px]'>{song.singer}</h2> 
                                </div>  
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    </div>
  )
}
export default Main;