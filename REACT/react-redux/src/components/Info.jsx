import React from "react";

const Info = () => {
  return (
    <div>
      <div>
        <h2>Redux</h2>
        <ul>
          <li>Redux is a predictable state container for javascript apps</li>
          <li>
            To manage the state of an application in a predictale way redux can
            be helpful
          </li>
          <li>
            <b>Store:</b>holds the state of an application
          </li>
          <li>
            <b>Action:</b>describes the changes in state of an appliaction
          </li>
          <li>
            <b>Reducer:</b>carries out the state transition depending on the
            action
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
