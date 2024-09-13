import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import BasicInfo from './components/BasicInfo';
import Education from './components/Education';
import WorkExperience from './components/Experience';

function App() {
   const [isSubmit, setIsSubmit] = useState(false);

   function handleSubmit(e) {
      e.preventDefault();
      setIsSubmit(true);
   };

   return (
   <>
      <Header />
      <BasicInfo
         isSubmit={isSubmit}
         className={isSubmit ? "hidden" : ""}
      />
      <Education
         isSubmit={isSubmit}
         className={isSubmit ? "hidden" : ""}
      />
      <WorkExperience
         isSubmit={isSubmit}
         className={isSubmit ? "hidden" : ""}
      />
      <button 
         className={isSubmit ? "hidden" : "" }
         onClick={handleSubmit}
         type='submit'
      >
         Submit
      </button>
      <Footer />
   </>
  )
}

export default App
