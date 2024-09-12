import { useState } from "react";
import Icon from "@mdi/react";
import { mdiSchool } from "@mdi/js";
import { mdiArrowDownDropCircleOutline, mdiArrowUpDropCircleOutline } from "@mdi/js";

function Education() {
   const [schoolName, setSchoolName] = useState('');
   const [study, setStudy] = useState('');
   const [startDateSchool, setStartDateSchool] = useState('');
   const [endDateSchool, setEndDateSchool] = useState('');
   const [display, setDisplay] = useState(false);

   function toggleDisplay() {
      setDisplay(!display);
   };

   function handleChange(e) {
      const name = e.target.name;
      let value = e.target.value;

      switch (name) {
         case 'schoolName':
            setSchoolName(value);
            break;
         case 'study':
            setStudy(value);
            break;
         case 'startDateSchool':
            setStartDateSchool(value);
            break;
         case 'endDateSchool':
            setEndDateSchool(value);
            break;
      }
      e.preventDefault();
   };

   return (
      <div className="education-information info-component">
         <div className="form-header">
            <div className="form-title">
               <h2><Icon path={mdiSchool} size={1} className="school form-icon" /> Education</h2>
            </div>
            <div className="toggle-arrow">
               <Icon 
                  path={display ? mdiArrowUpDropCircleOutline : mdiArrowDownDropCircleOutline}
                  size={1}
                  onClick={toggleDisplay}
                  className="arrows form-icon"
               />
            </div>
         </div>
         
         {display && (
            <form>
               <div className="input-container">
                  <label htmlFor="schoolName">School Name</label>
                  <input
                     type="text"
                     name="schoolName"
                     placeholder="Enter the School Name"
                     value={schoolName}
                     id="schoolName"
                     onChange={handleChange}
                  />
               </div>

               <div className="input-container">
                  <label htmlFor="study">Degree</label>
                  <input
                     type="text"
                     name="study"
                     placeholder="Enter your degree"
                     value={study}
                     id="study"
                     onChange={handleChange}
                  />
               </div>

               <div className="date-container">
                  <label htmlFor="startDateSchool">Start Date</label>
                  <input
                     type="date"
                     name="startDateSchool"
                     value={startDateSchool}
                     id="startDateSchool"
                     onChange={handleChange}
                  />
               </div>
               
               <div className="date-container">
                  <label htmlFor="endDateSchool">End Date</label>
                  <input
                     type="date"
                     name="endDateSchool"
                     value={endDateSchool}
                     id="endDateSchool"
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

export default Education;