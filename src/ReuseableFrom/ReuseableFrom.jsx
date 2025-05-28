import React from 'react';

const ReuseableFrom = ({formTitle,SubmitbtnText='Submit'}) => {
    const handlesubmit=e=>{
        e.preventDefault();
    }
    return (
        <div>
               <h3>{formTitle} </h3>
         <form onSubmit={handlesubmit} >
               <input type="text" name="text" id="" />
               <br />
               <input type="email" name="email" id="" />
               <br />
               <input type="text" name="phone" />
                <br />
                <input type="submit" value={SubmitbtnText} />
            </form>
            </div>
        
    );
};

export default ReuseableFrom;