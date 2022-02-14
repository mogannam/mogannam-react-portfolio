import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Footer(props) {
  



  return (
    <footer class="container">
      <div class="d-flex justify-content-center row">
      <span class="col">email@email.com</span>
      <span class="col"><a href="https://github.com/mogannam">GitHub</a></span>
      <span class="col"><a href="https://www.linkedin.com/in/joemogannam/">LinkedIn</a></span>
      </div>
    </footer>
  );
}

export default Footer;
