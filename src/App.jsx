import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/nav/nav';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import FourOhFour from './components/FourOhFour';

const App = () => {
  return (
    <HashRouter >
      < Nav/ >
      <Routes>
        <Route
          path="/"
          element={
            <RedirectWrapper />
          }
        />
        <Route path="/home" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </HashRouter>
  );
};

const RedirectWrapper = () => {
  const params = new URLSearchParams(window.location.search);
  const redirectPageUrl = params.get('p');

  if (redirectPageUrl) {
    return <Navigate to={redirectPageUrl} />;
  }

  return <Header />;
};

export default App;
