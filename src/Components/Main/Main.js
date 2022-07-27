import React from 'react'
import songs from "../../Assets/songs.js"

function Main() {
    console.log(songs[1].name)
  return (
    <div className="mainComponent flex flex-col p-[30px] overflow-y-scroll scrollbar-hide">
        <div className="songComponent">
            <div className='text'>
                <h1 className='font-sans text-white font-bold text-[25px]'>Trending Now</h1>    
            </div>
            <div>
            {songs.map((song)=>{
                return(
                    <div key={song.id}  className='cards flex flex-row'>
                        <div className='cardContainer flex flex-col p-[20px] border-none rounder-xl bg-[#282828] w-[15em]'>
                            <div className='cardImage'>
                                <img src={require("../../Assets/music.png")} alt="#"/>
                            </div>
                            <div className='cardName'>{song.name}</div>
                            <div className='cardSinger'>{song.singer}</div>
                        </div>
                </div>
            )
            })}
            </div>
        </div>

    </div>
  )
}
export default Main;