import React from "react";
// the InputBox must passes the following props
// <InputBox prop={{type:"text", class:"bg-red-100", placeholder:"input name", onChange:()=>{consol.log("")} }}>

const InputBox = ({ prop }) => {
  return (
    <input
      type={prop.type}
      onChange={prop.onChange}
      className={prop.class}
      placeholder={prop.placeholder}
    />
  );
};

export default InputBox;
