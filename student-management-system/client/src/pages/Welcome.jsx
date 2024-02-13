import React from "react";
import "../styles/welcome.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <div>
        <p className="cool">
          <span data-text="Student">Student</span>
          <span data-text="Management">Management</span>
          <span data-text="System">System</span>
        </p>
        <div className="arrow">
          <Link to="login" className="arrow-link">
            <span className="arrow-icon-wrapper">
              <KeyboardDoubleArrowRightIcon className="arrow-icon" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
