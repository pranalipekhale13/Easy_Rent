import React from "react";
import "./Button.css";

function Button( {title, onClick}) {
    return <button type="button" className="btn" onClick={onClick}>
        {title}
    </button>;
}

export default Button;