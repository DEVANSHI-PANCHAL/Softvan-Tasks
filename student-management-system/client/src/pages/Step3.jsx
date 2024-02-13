import React from 'react'

const Step3 = ({formData, setformData}) => {
  return (
    <div>
              <div className="field">
                <div className="label">Date</div>
                <input type="text"/>
              </div>
              <div className="field">
                <div className="label">Gender</div>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
    </div>
  )
}

export default Step3
