import React from 'react'

const Step4 = ({formData, setformData}) => {
  return (
    <div>
              <div className="field">
                <div className="label">Username</div>
                <input type="text" value={formData.userName}/>
              </div>
              <div className="field">
                <div className="label">Password</div>
                <input type="password"/>
              </div>
    </div>
  )
}

export default Step4
