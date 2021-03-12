import React from "react";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

const Input = ({ addressIp, handleAddressIpChange, handleToggleSearchFlag }) => {
  return (
    <div className="box">
      <input
        type="text"
        placeholder="Enter IP address..."
        value={addressIp}
        onChange={handleAddressIpChange}
      />
      <IconContext.Provider value={{ className: "arrowIcon" }}>
        <BsArrowRight  onClick={handleToggleSearchFlag}/>
      </IconContext.Provider>
    </div>
  );
};

export default Input;
