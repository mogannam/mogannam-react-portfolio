import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    sections = [],
    setSelectedSection,
    selectedSection,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(selectedSection.name);
  }, [selectedSection]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {
            ( () => { // BEG Self Invoking function
              
              return Object.entries(sections)
              .map( ([key, section]) => 
                  <li key={key} 
                    className={`mx-1 ${selectedSection.name === section.name && 'navActive' }`}> 
                    <span onClick={() => {setSelectedSection(section);}}>
                      {capitalizeFirstLetter(section.name)}
                    </span>
                  </li> )
            })() // END Self Invoking Function

          }

          

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
