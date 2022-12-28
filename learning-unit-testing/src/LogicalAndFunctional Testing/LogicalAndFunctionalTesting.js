import React, { useState } from 'react';  
import DisplayName from './DispalyName';  
export const validateName = (name) => {  
 if((name && isNaN(name)) || !name)  
   return false  
 return true  
}  
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
