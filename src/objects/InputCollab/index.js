import React from "react";

const InputCollab = ({ id = "", value = "", type = "text" }) => (
    <input className="input-collab" id={id} type={type} value={value} />
);

export default InputCollab;
