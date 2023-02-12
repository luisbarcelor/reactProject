import React from "react";
import './styles/footer.css'
import logo4 from '../assets/imagenes/logo4.svg'

function Footer() {
    return (
        <div id="footer">
            <div id="footer-logo">
                <img src={logo4}/>
            </div>
            <div id="footer-div1" className="footer-div">
                <div id="main-footer">
                    <div id="section-1" className="footer-section">
                        <div id="indicator-1" className="footer-indicator"></div>
                        <div id="content-1" className="footer-content">
                            <h5>Ayuda</h5>
                            <ul id="ayuda-list" className="footer-list">
                                <li><a href="" className="ayuda-links">Sobre Nosotros</a></li>
                                <li><a href="" className="ayuda-links">Preguntas Frecuentes</a></li>
                                <li><a href="" className="ayuda-links">Centro de Soporte</a></li>
                                <li><a href="" className="ayuda-links">Aviso Legal</a></li>
                                <li><a href="" className="ayuda-links">Privacidad</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="section-2" className="footer-section">
                        <div id="indicator-2" className="footer-indicator">
                        </div>
                        <div id="content-2" className="footer-content">
                            <h5>¿Por qué comprar?</h5>
                            <ul id="why-list" className="footer-list">
                                <li><a href="" className="why-links">Formas de Pago</a></li>
                                <li><a href="" className="why-links">Opiniones de Clientes</a></li>
                                <li><a href="" className="why-links">Descuentos</a></li>
                                <li><a href="" className="why-links">Gastos de Envío</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="section-3" className="footer-section">
                        <div id="indicator-3" className="footer-indicator">

                        </div>
                        <div id="content-3" className="footer-content">
                            <h5>Contactar</h5>
                            <ul id="cantactar-list" className="footer-list">
                                <li><a href="" className="contactar-links">Devoluciones y Garantías</a></li>
                                <li><a href="" className="contactar-links">Trabaja con Nosotros</a></li>
                                <li><a href="" className="contactar-links">Contacto</a></li>
                                <li><a href="" className="contactar-links">Política de Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="section-4" className="footer-section">
                        <div id="indicator-4" className="footer-indicator">

                        </div>
                        <div id="content-4" className="footer-content">
                            <h5>Otros</h5>
                            <ul id="otros-list" className="footer-list">
                                <li><a href="" className="otros-links">Marketplace</a></li>
                                <li><a href="" className="otros-links">Cita Asistencia Técnica</a></li>
                                <li><a href="" className="otros-links">Reparaciones</a></li>
                                <li><a href="" className="otros-links">Responsabilidad Social</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="pais-button-div" className="dropdown">
                    <a id="pais-button" className="btn dropdown-toggle" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        País
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">España</a></li>
                        <li><a className="dropdown-item" href="#">Estados Unidos</a></li>
                        <li><a className="dropdown-item" href="#">Alemania</a></li>
                    </ul>
                </div>
            </div>
            <div id="footer-div2" className="footer-div">
                <div id="social-newsletter-div">
                    <div id="footer-newsletter">
                        <div id="footer-newsletter-text">
                            <p>
                                Subscríbete a nuestra newsletter o
                                <a href="#">regístrate</a>
                                para mejorar tu experiencia
                            </p>
                        </div>
                        <form id="formulario-2">
                            <input id="campo-2" type="email" name="correo-2" placeholder="alguien@email.com"/>
                            <input className="btn" id="submit-2" type="submit"
                                   onClick="alert('Funcionalidad no disponible')" name="submit-2"
                                   value="Subscribirme"/>
                        </form>
                    </div>

                    <div id="footer-social">
                        <div id="social-text">Síguenos</div>
                        <div id="social-icons">
                            <a id="facebook" href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                            <a id="twitter" href="https://www.twitter.com/"><i className="bi bi-twitter"></i></a>
                            <a id="youtube" href="https://www.youtube.com/"><i className="bi bi-youtube"></i></a>
                            <a id="instagram" href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
                            <a id="linkedin" href="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-div3" className="footer-div">
                <div id="copyright-menu-div">
                    <div id="footer-copyright">
                        <h6>&copy; 2022 Luis Barcelo. All rights reserved.</h6>
                    </div>
                    <div id="footer-menu">
                        <a href="#">Inicio</a>
                        <a href="#">Destacado</a>
                        <a href="#">Top Tips</a>
                        <a href="#">Productos</a>
                        <a href="#">Contáctanos</a>
                        <a href="#">Sobre Nosotros</a>
                        <a id="parajuanan" href="#">Para Juanan</a>
                        <a id="presentacion" href="#">Presentación</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;