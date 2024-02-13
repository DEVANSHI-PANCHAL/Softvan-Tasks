import React from 'react'
import '../styles/signup.css';


const Step2 = ({formData,setformData}) => {
  return (
    <div>
              <div className="field">
                <div className="label">Email Address</div>
                <input type="text" value={formData.email}/>
              </div>
              <div className="field">
                <div className="label">Phone Number</div>
                <input type="Number" value={formData.phoneNumber}/>
              </div>
    </div>
  )
}

export default Step2
