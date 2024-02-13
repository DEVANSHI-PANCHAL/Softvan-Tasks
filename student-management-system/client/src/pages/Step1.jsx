import React from 'react'
import '../styles/signup.css';

const Step1 = ({formData, setformData}) => {
  return (
    <div>
          <div className="field">
                <div className="label">First Name</div>
                <input type="text" value={formData.firstName}/>
              </div>
              <div className="field">
                <div className="label">Last Name</div>
                <input type="text" value= {formData.lastName}/>
              </div>
    </div>
  )
}

export default Step1
