import React from 'react';
import coverImage from '../../assets/cover/cover-image.svg';

const skills = {
    'Front-end Proficiencies' : ['HTML', 'CSS', 'JavaScript', 'JQuery', 'responsive design', 'React', 'BootStrap', 'handlebars'],
    'Back-end' : ['APIs', 'Node', 'Express', 'MySql Sequalize', 'Python', 'C++', 'PHP', 'Google Cloud', 'AWS', 'Bash/Shell Scripts', 'PowerShell', 'MongoDB Mongoose', 'REST', 'GraphQL'],
    'Education': ['BS Computer Science', 'BS Business Administration', 'A+', 'Networking+']
}


function Resume() {
  return (
    <section className="my-5">
        {
            ( () => { // BEG Self Invoking function
              
              return Object.entries(skills)
              .map( ([key, section]) => 
                    <ul><h2>{key} </h2>
                    {section.map( value => 
                        <li key={value} className={`nav-links mx-1`}> 
                        {value}
                         </li>
                    )} 
                    
                    </ul>
                  )// end first map
            
            })() // END Self Invoking Function
            
          }
    </section>
  );
}

export default Resume;
