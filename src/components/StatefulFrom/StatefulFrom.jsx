import React, { useState } from 'react';

const StatefulFrom = () => {
    const [email,setEmail]=useState(null);
    const handlesubmit=e=>{
     e.preventDefault();    
     console.log(email);
    }
    const handleEmailSubmit=e=>{
      console.log(e);
    }
    return (
        <div>
             <form onSubmit={handlesubmit} >
               <input type="text" name="text" id="" />
               <br />
               <input 
               onChange={handleEmailSubmit}
               type="email" name="email" id="" />
               <br />
               <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulFrom;