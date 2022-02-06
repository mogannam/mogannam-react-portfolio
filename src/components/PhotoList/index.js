import React, { useState } from 'react';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Emergency Center',
      src: 'https://github.com/mogannam/Emergency-Center',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Pregame',
      src: 'https://github.com/mogannam/playlist',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Parking Lot Locator',
      src: 'https://mogannam.github.io/parkinglot-locator/',
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
          <img
            src={require(`../../assets/small/${category}/${i}.gif`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
          </a>
          
        ))}
      </div>
      
    </div>
  );
};

export default PhotoList;
