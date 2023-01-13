import React from "react";
import "./style.css";
import { FaAngleDown } from "react-icons/fa";

const Channel = () => {
  return (
    <div className="channel">
      <div className="server-title">
        <h2>The Channel</h2>
        <FaAngleDown />
      </div>
      <div className="channel-list"></div>
    </div>
  );
};

export default Channel;
