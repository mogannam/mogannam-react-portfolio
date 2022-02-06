import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {

  const [selectedSection, setSelectedSection] = useState({name:"About", description : "A little about me.", component: <About/>});
  // equivelent to sections["About"] but you can't use it because sections is declared below
  let [sections] = useState({
    "About" : {name:"About", description : "A little about me.", component: <About/>},
    "Contact":{name: "Contact", description: "How to be reached", component: <ContactForm/>},
    "Projects":{name: "Projects", description: "Projects I completed", component: <Gallery selectedSection={selectedSection}/>},
    "Hobbies": {name: "Hobbies", description: "Fun on my free time", component: <Gallery selectedSection={selectedSection}/>}

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
              case 'About':
                return <About/>
              case 'Contact':
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
