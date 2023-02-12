import React from "react";
import './styles/navbar.css'
import logo from '../assets/icons/favicon.svg'

function Navbar() {
    return (
        <nav id="menuCont" className="navbar navbar-expand-lg bg-light">
            <div id="menu" className="container-fluid">
                <a id="logo" className="navbar-brand" href="/home"><img
                    src={logo} alt={"Missing"}/>Tech World Updates</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="menuList" className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/featured">Destacado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tips">Tips</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/recent-operations">Calculadora API</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;