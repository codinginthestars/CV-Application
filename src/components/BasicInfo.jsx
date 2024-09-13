import { useState } from "react";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { mdiArrowDownDropCircleOutline, mdiArrowUpDropCircleOutline } from "@mdi/js";

function BasicInfo({ isSubmit, className }) {
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [display, setDisplay] = useState(false);


   function toggleDisplay() {
      setDisplay(!display);
   };

   function handleChange(e) {
      const name = e.target.name;
      let value = e.target.value;

      switch (name) {
         case 'fullName':
            setFullName(value);
            break;
         case 'email':
            setEmail(value);
            break;
         case 'phone':
            setPhone(value);
            break;
      }
      e.preventDefault();
   };

   return (
      <div className={"basic-information info-component " + className}>
         <div className="form-header">
            <div className="form-title">
               <h2><Icon path={mdiAccount} size={1} className="account form-icon" /> Basic Information</h2>
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
                  <label htmlFor="fullName">Full Name</label>
                  <input 
                     type="text"
                     name="fullName"
                     placeholder="Enter your full name"
                     value={fullName}
                     id="fullName"
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     name="email"
                     placeholder="example@email.com"
                     value={email}
                     id="email"
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="input-container">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                     type="tel"
                     name="phone"
                     placeholder="Your phone number"
                     value={phone}
                     id="phone"
                     onChange={handleChange}
                     required
                  />
               </div>

               <div className="buttons">
                  <button className="edit-button" type="button">Edit</button>
               </div>
            </form>
         )}

         {isSubmit && (
            <>
               <h1>{fullName}</h1>
               <div>
                  <p>{email}</p>
                  <p>{phone}</p>
               </div>
            </>
         )}
      </div>
   );
};

export default BasicInfo;