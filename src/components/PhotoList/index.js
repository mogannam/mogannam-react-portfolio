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
      videoSrc: 'https://github.com/mogannam/mockups/blob/1a4cc6a72bc64945130832ce3fcbb4f385c0a4f5/social-mongoose-network.mp4',
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
       
          <a href={`${image.src}`}>
          {
            ( () => { 
              switch(image.type){
                case 'img':
                 return <Img
                    image={image}
                    src={require(`../../assets/small/${category}/${i}.gif`).default}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                    i={i}
                  />
                case 'vid':
                  return <Vid
                    image={image}
                    src={image.src}
                    videoSrc={image.videoSrc}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                    i={i}
                  />
                default:
                  return <div></div>
              }
              
            })()
          }
          </a>
          
        ))}
      </div>
      
    </div>
  );
};

export default PhotoList;
