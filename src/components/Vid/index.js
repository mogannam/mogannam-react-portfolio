import React, { useState } from 'react';

const Vid = ({ image, src, videoSrc, alt, className, key, i, width, height }) => {
 
  return (

    <video
      alt={alt}
      className={className}
      key={key} 
      width={width} 
      height={height} controls>
    <source src={image.videoSrc} type="video/mp4"/>
    Your browser does not support the video tag.
    </video>
  );
};

export default Vid;
