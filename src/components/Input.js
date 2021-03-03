import React from "react";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

const Input = () => {
  return (
    <div className="box">
      <input type="text" placeholder="Enter IP address..." />
      <IconContext.Provider value={{className: "arrowIcon"}}>
        <BsArrowRight />
      </IconContext.Provider>
    </div>
  );
};

export default Input;
