import { useState } from "react";
import Icon from "@mdi/react";
import { mdiBriefcase } from "@mdi/js";
import { mdiArrowDownDropCircleOutline, mdiArrowUpDropCircleOutline } from "@mdi/js";

function WorkExperience() {
   const [companyName, setCompanyName] = useState('');
   const [jobTitle, setJobTitle] = useState('');
   const [responsibilities, setResponsibilities] = useState('');
   const [startDateJob, setStartDateJob] = useState('');
   const [endDateJob, setEndDateJob] = useState('');
   const [display, setDisplay] = useState(false);

   function toggleDisplay() {
      setDisplay(!display);
   };

   function handleChange(e) {
      const name = e.target.name;
      let value = e.target.value;

      switch (name) {
         case 'companyName':
            setCompanyName(value);
            break;
         case 'jobTitle':
            setJobTitle(value);
            break;
         case 'responsibilities':
            setResponsibilities(value);
            break;
         case 'startDateJob':
            setStartDateJob(value);
            break;
         case 'endDateJob':
            setEndDateJob(value);
            break;
      }
      e.preventDefault();
   };

   return (
      <div className="work-information info-component">
         <div className="form-header">
            <div className="form-title">
               <h2><Icon path={mdiBriefcase} size={1} className="briefcase form-icon" /> Work Experience</h2>
            </div>
            <div className="toggle-arrow">
               <Icon
                  path={display ? mdiArrowUpDropCircleOutline : mdiArrowDownDropCircleOutline}
                  size={1}
                  onClick={toggleDisplay}
                  className="arrows form-icons"
               />
            </div>
         </div>

         {display && (
            <form>
               <div className="input-container">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                     type="text"
                     name="companyName"
                     placeholder="Enter the Company Name"
                     value={companyName}
                     id="companyName"
                     onChange={handleChange}
                  />
               </div>

               <div className="input-container">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input 
                     type="text"
                     name="jobTitle"
                     placeholder="Enter the Position Title"
                     value={jobTitle}
                     id="jobTitle"
                     onChange={handleChange}
                  />
               </div>

               <div className="textArea-container">
                  <label htmlFor="responsibilities">Responsibilities</label>
                  <textarea 
                     id="responsibilities" 
                     name="responsibilities" 
                     value={responsibilities}
                     onChange={handleChange}
                     placeholder="Your Main Responsibilities"
                  />
               </div>

               <div className="date-container">
                  <label htmlFor="startDateJob">Start Date</label>
                  <input
                     type="date"
                     name="startDateJob"
                     value={startDateJob}
                     id="startDateJob"
                     onChange={handleChange}
                  />
               </div>

               <div className="date-container">
                  <label htmlFor="endDateJob">End Date</label>
                  <input
                     type="date"
                     name="endDateJob"
                     value={endDateJob}
                     id="endDateJob"
                     onChange={handleChange}
                  />
               </div>

               <div className="buttons">
                  <button className="add-button" type="submit">Add</button>
               </div>
            </form>
         )}
      </div>
   );
};

export default WorkExperience;