import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { selectedSection } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(selectedSection.name)}</h1>
      <p>{selectedSection.description}</p>
      {<PhotoList category={selectedSection.name} /> }
    </section>
  );
}
export default Gallery;
