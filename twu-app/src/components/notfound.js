import React from "react";
import notfound from "../assets/404.jpg"
import "./styles/notfound.css"

function Notfound() {
    return (
        <div>
            <img id="image" src={notfound} alt="404 NOT FOUND"/>
        </div>
    );
}

export default Notfound;