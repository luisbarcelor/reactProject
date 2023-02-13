import React from "react";
import banner from "../assets/imagenes/banner-pc.mp4"
import "./styles/banner.css"

function Banner() {
    return (
        <div id="main">
            <div id="banner">
                <a href="https://www.pccomponentes.com/">
                    <video width="100%" height="100%" autoPlay muted loop>
                        <source src={banner}/>
                    </video>
                </a>
            </div>
        </div>
    );
}

export default Banner;