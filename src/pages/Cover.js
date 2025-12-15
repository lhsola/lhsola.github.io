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

  // 모바일 100vh 문제 해결 로직
//  useEffect(() => {
//   const setVh = () => {
//     const vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//   };

//   setVh();

//   window.addEventListener('resize', setVh);
//   return () => window.removeEventListener('resize', setVh);
// }, []);



  useEffect(() => {
    const audio = audioRef.current;
    isPlaying ? audio.play() : audio.pause();

    return () => {
      audio.pause();
      audio.currentTime = 0; // Ensure music starts from the beginning next time
    };
  }, [isPlaying]);

 return (

      <div className="cover__container ">
        <img src={mainPhoto} alt="wedding couple"/>
         {/* <img className="cover__main-photo" src={mainPhoto} alt="weddingcouple" /> */}
        <div className="cover__overlay">
          <div className='cover__person'>
            <div>최명현</div>
            {/* Heart 아이콘에 fill 속성을 사용하여 색상 적용 */}
           <GoHeartFill className='cover__icon-heart' size="0.8em"/>
            <div>이혜선</div>
          </div>
          <div className='cover__date'>2026년 4월 25일 토요일 12시</div>
          <div className='cover__place'>서초 디토레스토랑</div>          
        </div>
      </div>

  )
  // return (
  //   <div className="cover__container">
  //     {/* <img className="cover__main-photo" src={mainPhoto} alt="weddingcouple" /> */}
  //     <img src={mainPhoto} alt="weddingcouple" />
  //     <div className="cover__overlay">
  //       <div className='cover__person'>
  //         <div>최명현</div>
  //         <GoHeartFill className='cover__icon-heart' size="0.8em"/>
  //         <div>이혜선</div>
  //       </div>
  //       <div className='cover__date'>2026년 4월 25일 토요일 12시</div>
  //       <div className='cover__place'>서초 디토레스토랑</div>
  //       {/* <div className='cover__line'></div>  */}
  //        <div className='cover__icon-box'>
  //         {/* <TbPlayerTrackPrevFilled size="1.5em"/> */}
  //         {/* <TbPlayerSkipBackFilled size="1.5em"/> */}
  //         {/* {isPlaying ? (
  //           <BsStopCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Stop Music"/>
  //         ) : (
  //           <BsPlayCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Play Music"/>
  //         )} */}
  //         {/* <TbPlayerSkipForwardFilled size="1.5em"/> */}
  //         {/* <TbPlayerTrackNextFilled size="1.5em"/> */}
  //       </div> 
  //     </div>
  //   </div>
  // )



}

export default Cover
