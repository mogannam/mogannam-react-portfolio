import React, { useState } from 'react';
import Img from '../Img';
import Vid from '../Vid';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      type: 'img',
      name: 'Emergency Center',
      src: 'https://github.com/mogannam/Emergency-Center',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Pregame',
      type:'img',
      src: 'https://github.com/mogannam/playlist',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Parking Lot Locator',
      type:'img',
      src: 'https://mogannam.github.io/parkinglot-locator/',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Social Mongoose Network',
      type:'vid',
      src: 'https://github.com/mogannam/social-mongoose-network',
      videoSrc : '../../assets/small/projects/social-mongoose-network.mp4',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Express Note Keeper',
      type:'img',
      src: 'https://github.com/mogannam/express-note-keeper',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Time Keeper',
      type:'img',
      src: 'https://github.com/mogannam/time-keeper/blob/main/README.md',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },

  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
       
          <div key={image.name}>
          {
            ( () => { 
              switch(image.type){
                case 'img':
                 return <a  href={`${image.src}`}><Img
                    image={image}
                    src={require(`../../assets/small/${category}/${i}.gif`).default}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    
                    i={i}
                  /></a>
                case 'vid':
                  return <span> <Vid
                  image={image}
                  src={require(`../../assets/small/${category}/${i}.mp4`).default}
                  alt={image.name}
                  className="img-thumbnail mx-1"
                  
                  i={i}
                /><a href={image.src}> {image.name} Project</a></span>
                default:
                  return <div></div>
              }
              
            })()
          }
          </div>
          
        ))}
      </div>
      
    </div>
  );
};

export default PhotoList;



