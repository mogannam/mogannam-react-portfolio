import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {

  const [selectedSection, setSelectedSection] = useState({name:"about", description : "A little about me.", component: <About/>});
  // equivelent to sections["About"] but you can't use it because sections is declared below
  let [sections] = useState({
    "about" : {name:"about", description : "A little about me.", component: <About/>},
    "contact":{name: "contact", description: "How to be reached", component: <ContactForm/>},
    "projects":{name: "projects", description: "Projects I completed", component: <Gallery selectedSection={selectedSection}/>},
    "hobbies": {name: "hobbies", description: "Fun on my free time", component: <Gallery selectedSection={selectedSection}/>},
    "resume": {name: "resume", description: "Skills", component: <Gallery selectedSection={selectedSection}/>}

  })
  
 
 

  return (
    <div>
      <Nav
        sections={sections}
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
      ></Nav>
      <main>
        {
          ( () => { // Beg Self Invoking Function
            switch(selectedSection.name) {
              case 'about':
                return <About/>
              case 'contact':
                return <ContactForm/>
              default:
                sections[selectedSection.name].component = <Gallery selectedSection={selectedSection}/>
                return   sections[selectedSection.name].component 
                // code block
            }
        
          })() // END Self Invoking Function
        
        }

      </main>
    </div>
  );
}

export default App;
