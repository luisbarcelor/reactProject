import React from "react";
import sticky from "../assets/icons/sticky.svg";
import undrawSecurity from "../assets/imagenes/undraw_security.svg";
import "./styles/tips.css";

function Tips() {
    return(
        <div id="main">
            <div id="thirdcont">
                <div id="thirdcont-1">
                    <div id="thirdcont-wrapper-1">
                        <div id="accordion-title">
                            <h3><span dangerouslySetInnerHTML={{__html: ''}}></span> Tips de Seguridad en Internet <span
                                dangerouslySetInnerHTML={{__html: ''}}></span></h3>
                        </div>
                        <div id="thirdcont-accordion">
                            <div className="accordion accordion-flush" id="accordionExample">

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="false" aria-controls="collapseOne">
                                            No proporcione información personal
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse"
                                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Evite los intentos de phishing en línea manteniendo la privacidad de su
                                                información personal. No le dé su número de teléfono, información de
                                                seguridad social o información bancaria a alguien que no conoce.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            <div>Crear contraseñas complejas</div>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Cree contraseñas con una combinación de letras, números y símbolos.
                                                Considere usar administradores de contraseñas para crear y realizar un
                                                seguimiento de sus contraseñas.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            <div>Comprobar la fiabilidad del sitio web</div>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Antes de comprar cualquier cosa en un sitio web, asegúrese de que sea
                                                seguro. Puede hacerlo comprobando si tiene un pequeño icono de candado o
                                                "https" antes de la URL. La "s" en "https" significa "seguro" y el
                                                candado significa que su navegador lo ha confirmado como un sitio
                                                seguro.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                            <div>Evite los enlaces en línea sospechosos</div>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Tenga cuidado con los sitios web o los correos electrónicos que
                                                contengan enlaces sospechosos. Algunos sitios web pueden usar
                                                cuestionarios, obsequios o historias lascivas para que hagas clic en
                                                ellos y luego roben tu información personal.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFive">
                                            <div>Mantenga su ordenador actualizado</div>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse"
                                         aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Los desarrolladores de ordenadores lanzan actualizaciones para mantener
                                                los productos seguros. Mantenga actualizado el software de su
                                                dispositivo para que no sea vulnerable al malware.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                aria-expanded="false" aria-controls="collapseSix">
                                            <div>Supervisar los permisos de la aplicación</div>
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse"
                                         aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Conozca la configuración de privacidad de cualquier dispositivo,
                                                aplicación o servicio que utilice. Algunas aplicaciones solicitarán
                                                permiso para acceder a fotos y otra información personal. Mantente
                                                informado para no compartir nada que no quieras.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                aria-expanded="false" aria-controls="collapseSeven">
                                            Desconfía siempre del wifi público
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse"
                                         aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Tenga cuidado cuando use wifi público. Al acceder a redes públicas,
                                                cualquiera puede usar redes no seguras para distribuir malware y acceder
                                                a información privada.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sticky-3" className="sticky">
                            <img className="sticky-item" src={sticky} alt="no bot"/>
                            <div>>>></div>
                            <p className="sticky-item">
                                Debes tener muy bien en cuenta todos estos consejos en todo momento
                                si estás conectado a Internet... No querrás ser una víctima más...
                                ¿Verdad?...brr...brr...
                                Puedes registrarte en el botón de abajo y comunicarte con nosotros si necesitas
                                ayuda... <span dangerouslySetInnerHTML={{__html: ''}}></span>
                            </p>
                        </div>
                        <div id="div-boton-sticky">
                            <a className="btn boton-sticky" href="">Regístrate</a>
                        </div>
                    </div>

                    <div id="thirdcont-wrapper-2">
                        <div id="thirdcont-2">
                            <h2>La Seguridad es lo Primero <span dangerouslySetInnerHTML={{__html: ''}}></span></h2>
                            <br/>
                            <p>
                                Nos preocupamos por tí... Por este motivo nos complace compartir contigo
                                estos tips que te ayudarán a mantenerte seguro en Internet. Es importante
                                saber que nosotros mismos, sin saberlo, nos ponemos en riesgo a diversos
                                ataques informáticos cada día. Para reducir este riesgo, es importante
                                tomar una serie de medidas y precauciones que nos ayudarán con esto...
                            </p>
                        </div>
                        <div id="thirdcont-figure">
                            <figure className="figure">
                                <img src={undrawSecurity} className="figure-img img-fluid rounded"
                                     alt="No dispoonible"/>
                                <figcaption className="figure-caption text-end">
                                    "La desconfianza es la madre de la seguridad"
                                </figcaption>
                                <figcaption id="author" className="blockquote-footer text-end">
                                    <cite
                                        title="https://todossomosclientes.blogspot.com/2018/06/25-frases-inspiradoras-sobre-ciberseguridad.html">Aristófanes</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tips;
