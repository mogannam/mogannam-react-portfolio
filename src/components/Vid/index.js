import React from 'react';


const Vid = ({ image, src, alt, className, videoSrc, i, width, height }) => {
 
  return (

    <video
      alt={alt}
      className={className}
      width={width} 
      height={height}
      src={src}
       controls>
  
    </video>
  );
};

export default Vid;

//image.videoSrc
