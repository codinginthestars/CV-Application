import { useState } from 'react'
import BasicInfo from './components/BasicInfo'
import Education from './components/Education'
import WorkExperience from './components/Experience'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'

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
