import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="brand-name">
          <span className="red-brand-name">Dev</span>challenges.io
        </div>
        <ul>
          <li>Typography</li>
          <li>Grid</li>
          <li>Buttons</li>
          <li className="selected">Inputs</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
