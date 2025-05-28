

const SimpleFrom = () => {

    // const handlesubmit=e=>{
    //     e.preventDefault();
    //     console.log(e.target.text.value);
    //     console.log(e.target.Email.value);
        

    // }


    //  return (
    //   <>
    //     <form onSubmit={handlesubmit}>
    //          <div>
    //     <input type="text" />
    //     <br />
    
    //     <input type="email" name="Email" id="" />
    //     <br />
    //     <input type="button" value="Submit" />
    //   </div>
    //     </form>
    //   </>
    //  );
    const handlesubmit =e =>{
        e.preventDefault();
        console.log(e.target.text.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value)
        console.log("from submitted");
    }
    return (
        <div>
            <form onSubmit={handlesubmit} >
               <input type="text" name="text" id="" />
               <br />
               <input type="email" name="email" id="" />
               <br />
               <input type="text" name="phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;