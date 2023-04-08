import React, { useState } from 'react';  
import DisplayName from './DispalyName';  

/**
 * This class to validate when user input their name to make their name is string and only character. 
 */


/**
 * This function is to validate if the input name is string or not. 
 * @param {input name} name 
 * @returns boolean
 */

export const validateName = (name) => {  
 if((name && isNaN(name)) || !name)  
   return false  
 return true  
}  

/**
 * This is input function and display in the screen to allow the user can type their name and display output of their name
 * @returns render the display with input function and output of their input name. 
 */

const User = () => {  
 const [name,setName] = useState(null);  
 const [error,setError] = useState(false);  
  const setUserName = (event) =>{  
   const {value} = event.target;  
   var isOk = validateName(value);  
   setError(isOk);  
   setName(value);  
 }  

 return (  
   <div>  
    <DisplayName name={name} />  
    <input type="text" value={name} onChange={setUserName}/>  
     {error &&<div>Error</div>}  
 </div>  
 );  
};  

export default User;  
