import { useState } from 'react';
import BasicInfo from './components/BasicInfo';
import Education from './components/Education';
import WorkExperience from './components/Experience';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <BasicInfo />
      <Education />
      <WorkExperience />
      <Footer />
    </>
  )
}

export default App
