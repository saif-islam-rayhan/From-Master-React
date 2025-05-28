import React, { useState } from 'react';

const StatefulFrom = () => {
    const [name,setName]=useState("saif");
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [error,setError]=useState('');
    const handlesubmit=e=>{
     e.preventDefault(); 
     if(password.length<6){
      setError("Password must be 6 character");
     }else{
      setError('');
     }
     console.log(name,email,password);
    }
    const handleNameSubmit = e =>{
      console.log(e.target.value);
      setName(e.target.value);
    }
    const handleEmailSubmit = e =>{
      console.log(e.target.value);
      setEmail(e.target.value);
    }
    const handlePasswordSubmit=e=>{
      console.log(e.target.value);
      setPassword(e.target.value);
    }
    return (
        <div>
             <form onSubmit={handlesubmit} >
               <input 
               value={name}
               onChange={handleNameSubmit}
               type="text" name="text" id="" />
               <br />
               <input 
               onChange={handleEmailSubmit}
               
               type="email" name="email" id="" />
               <br />
               <input 
               onChange={handlePasswordSubmit}
               type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
                {
                  error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulFrom;