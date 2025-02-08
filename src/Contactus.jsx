import React from 'react';

function Contactus() {
  return (
   <>
      <h2 className="text-center mb-4">
        <i className="fas fa-phone-alt"></i> Contact Us
      </h2>
      <p className="text-center">Please enter your details to contact us.</p>

      <form>
       
          
          
        <label> Name :</label>
        <input type="text" 
           placeholder="Enter your name"
        
    />
        <br/> <br/>


     
       
          <label >Message:</label>
         <input type='textarea'
            placeholder="Enter your message (optional)"
          />
       <br/> <br/>

        <button type="submit" className="btn btn-primary w-50">Send Message</button>
      </form>
    </>
  );
}

export default Contactus;
