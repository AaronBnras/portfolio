import React from 'react';
import Navbar from './components/Navbar/navbar.js';
import Intro from './components/Intro/intro.js';
import Skills from './components/Skills/skills.js';
import Works from './components/Works/works.js';
import Contacts from './components/Contacts/contacts.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contacts />
    </div>
  );
}

export default App;

