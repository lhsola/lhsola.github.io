import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import p4 from '../images/p4.jpg';
import p5 from '../images/p5.jpg';
import p6 from '../images/p6.jpg';
import p7 from '../images/p7.jpg';
import p8 from '../images/p8.jpg';
import p9 from '../images/p9.jpg';
import p10 from '../images/p10.jpg';
import p11 from '../images/p11.jpg';
import p12 from '../images/p12.jpg';

import s1 from '../images/p1.jpg';
import s2 from '../images/p2.jpg';
import s3 from '../images/p3.jpg';
import s4 from '../images/p4.jpg';
import s5 from '../images/p5.jpg';
import s6 from '../images/p6.jpg';
import s7 from '../images/p7.jpg';
import s8 from '../images/p8.jpg';
import s9 from '../images/p9.jpg';
import s10 from '../images/p10.jpg';
import s11 from '../images/p11.jpg';
import s12 from '../images/p12.jpg';


function ImgGallery() {

  const images = [
    {
      original: p1,
      thumbnail: s1,
    },
    {
      original: p2,
      thumbnail: s2,
    },
    {
      original: p3,
      thumbnail: s3,
    },
    {
      original: p4,
      thumbnail: s4,
    },
    {
      original: p5,
      thumbnail: s5,
    },
       {
      original: p6,
      thumbnail: s6,
    },   
    {
      original: p7,
      thumbnail: s7,
    },   
    {
      original: p8,
      thumbnail: s8,
    },   
    {
      original: p9,
      thumbnail: s9,
    },   
    {
      original: p10,
      thumbnail: s10,
    },   
    {
      original: p11,
      thumbnail: s11,
    },   
    {
      original: p12,
      thumbnail: s12,
    },   
  ];

  
  return (
    <div className='bc-pink container'>
      <ImageGallery items={images} />
    </div>
  )
}

export default ImgGallery