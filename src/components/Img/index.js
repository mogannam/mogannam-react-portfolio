import React, { useState } from 'react';

const Img = ({ image, src, alt, className, key, i }) => {
 
  return (
    
    <img
        src={src}
        alt={alt}
        className={className}
        key={key}

    />
    
  );
};

export default Img;
