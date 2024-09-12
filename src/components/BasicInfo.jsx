import { useState } from "react";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { mdiArrowDownDropCircleOutline, mdiArrowUpDropCircleOutline } from "@mdi/js";

function BasicInfo() {
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [shown, setShown] = useState(false);


   function toggleShown() {
      setShown(!shown);
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
      <div className="basic-information info-component">
         <div className="form-header">
            <div className="title">
               <h2><Icon path={mdiAccount} size={1} className="account" /> Basic Information</h2>
            </div>
            <div className="toggle-arrow">
               <Icon 
                  path={shown ? mdiArrowDownDropCircleOutline : mdiArrowUpDropCircleOutline} 
                  size={1} 
                  onClick={toggleShown}
                  className="arrows"
               />
            </div>
         </div>


         {shown && (
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

export default BasicInfo;