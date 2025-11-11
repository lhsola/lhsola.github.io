import React, { useState, useRef, useEffect } from 'react'
import mainPhoto from '../images/photo.jpg'
import { TbPlayerTrackPrevFilled, TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { BsPlayCircle, BsStopCircle } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import myMusic from '../media/taeyeon_poem.mp3';


function Cover() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(myMusic));

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    isPlaying ? audio.play() : audio.pause();

    return () => {
      audio.pause();
      audio.currentTime = 0; // Ensure music starts from the beginning next time
    };
  }, [isPlaying]);

  return (
    <div className="cover__container">
      {/* <img className="cover__main-photo" src={mainPhoto} alt="weddingcouple" /> */}
      <img src={mainPhoto} alt="weddingcouple" />
      <div className="cover__overlay">
        <div className='cover__person'>
          <div>최명현</div>
          <GoHeartFill className='cover__icon-heart' size="0.8em"/>
          <div>이혜선</div>
        </div>
        <div className='cover__date'>2026년 4월 25일, 토요일 낮 12시</div>
        <div className='cover__place'>디토 레스토랑 (서초)</div>
        <div className='cover__line'></div>
        <div className='cover__icon-box'>
          <TbPlayerTrackPrevFilled size="1.5em"/>
          <TbPlayerSkipBackFilled size="1.5em"/>
          {isPlaying ? (
            <BsStopCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Stop Music"/>
          ) : (
            <BsPlayCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Play Music"/>
          )}
          <TbPlayerSkipForwardFilled size="1.5em"/>
          <TbPlayerTrackNextFilled size="1.5em"/>
        </div>
      </div>
    </div>

    // <div className="container">
    //     {/* <div className='title'>&ldquo;우리 결혼합니다&rdquo;</div> */}
    //     <img className="cover__main-photo" src={mainPhoto} alt='weddingcouple'></img>
    //     <div className='cover__person'>
    //     <div>최명현</div>
    //     <GoHeartFill className='cover__icon-heart' size="0.8em"/>
    //     <div>이혜선</div>
    //     </div>
    //     <div className='cover__date'>2026년 4월 25일, 토요일 낮 12시</div>
    //     <div className='cover__place'>디토 레스토랑 (서초)</div>
    //     <div className='cover__line'></div>
    //     <div className='cover__icon-box'>
    //       <TbPlayerTrackPrevFilled size="1.5em"/>
    //       <TbPlayerSkipBackFilled size="1.5em"/>
    //        {isPlaying ? (
    //         <BsStopCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Stop Music"/>
    //       ) : (
    //         <BsPlayCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Play Music"/>
    //       )}
         
    //       <TbPlayerSkipForwardFilled size="1.5em"/>
    //       <TbPlayerTrackNextFilled size="1.5em"/>
    //     </div>
    // </div>
  )
}

export default Cover
