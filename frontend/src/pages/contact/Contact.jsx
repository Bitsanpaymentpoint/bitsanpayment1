import React, {useState} from 'react';
import { Login} from '../../components/Login';
import { Register} from '../../components/Register';
import './contact.css'



function Contact() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="Contact">
        
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} />  : <Register onFormSwitch={toggleForm}/>
      }
        
    </div> 
  );
}
  
  

// const Contact = () => {
//   const {currentForm, setCurrentForm} = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <div className="Contact">
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm}/>  : <Register/>
//       }
    
//     </div>
    

//   );
// }

export default Contact;
