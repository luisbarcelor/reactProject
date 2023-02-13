import React from "react";
import sticky from "../assets/icons/sticky.svg"
import card1 from "../assets/imagenes/card-1.png"
import card2 from "../assets/imagenes/card-2.png"
import card3 from "../assets/imagenes/card-3.png"
import card4 from "../assets/imagenes/card-4.png"
import "./styles/featured.css"


function Featured() {
    return (
        <div id="main">
          <div id="secondcont">
            <div id="secondcont-1">
              <div id="text-vid-container">
                <div id="sctext" className="innertextdiv">
                  <h2>Nuestros Servicios <span dangerouslySetInnerHTML={{__html: '&#129520'}}></span></h2>
                  <br/>
                  <blockquote>
                    Ofrecemos toda una gama completa de servicios para ayudar a las organizaciones
                    a trabajar mejor. Nos encargamos de todo desde lo mejor en el sector tecnológico
                    hasta la formación de su personal del modo más eficaz, evaluando su actividad y
                    ayudándole a obtener un desempeño aún mejor en el futuro. Muy pocos ofrecen esto,
                    y ninguno lleva haciéndolo tanto tiempo como nosotros.
                    <br/>
                    <br/>
                    Podemos combinar cualquiera de nuestros productos y servicios para crear un pack a
                    medida para su empresa. Esto elimina la complejidad y los costes innecesarios que
                    implican llevarle a donde quiere ir, sea cual sea su punto de partida.
                  </blockquote>
                </div>
                <div id="titulo-video">
                  <h3><span dangerouslySetInnerHTML={{__html: '&#9729;&#65039'}}></span> ¿Qué es el Cloud Computing? <span dangerouslySetInnerHTML={{__html: '&#128187'}}></span></h3>
                </div>
                <div id="div-video">
                  <iframe width="100%" height="100%"
                          src="https://www.youtube.com/embed/M988_fsOSWo" frameBorder="0" allowFullScreen>
                  </iframe>
                </div>
                <div id="sticky-2" className="sticky">
                  <img className="sticky-item" src={sticky} alt="no bot"/>
                  <div>>>></div>
                  <p className="sticky-item">
                    ¿Quieres estar al tanto de todo?... No te pierdas ninguna actualización
                    de contenido...brr...brr... ¡SUBSCRÍBETE A NUESTRA NEWSLETTER! <span dangerouslySetInnerHTML={{__html: '&#128071'}}></span>
                  </p>
                </div>
                <div id="div-newsletter">
                  <form id="formulario-1">
                    <label id="label"><h4>Dirección de Correo: <span dangerouslySetInnerHTML={{__html: '&#128236;'}}></span></h4></label> <br/>
                    <input id="campo-1" type="email" name="correo" placeholder="alguien@email.com"/> <br/>
                    <input className="btn" id="submit" type="submit" onClick={Warning} name="submit" value="Subscribirme"/>
                  </form>
                </div>
              </div>

              <div id="divcards">
                <div id="cards-row-1">
                  <div id="card-1" className="card">
                    <img className="card-img-top img-fluid" src={card1} alt="Imagen no disponible"/>
                    <div className="card-body">
                      <h5 className="card-title">Cloud Computing</h5>
                      <p className="card-text">
                        Tenemos el cloud público más abierto y seguro para empresas, una
                        plataforma multicloud híbrida de nueva generación y funcionalidades
                        avanzadas de datos.
                      </p>
                      <a className="btn btn-primary cardbotones">Saber más</a>
                    </div>
                  </div>
                  <div id="card-2" className="card">
                    <img className="card-img-top img-fluid" src={card2} alt="Imagen no disponible"/>
                    <div className="card-body">
                      <h5 className="card-title">Seguridad Informática</h5>
                      <p className="card-text">
                        Trabajamos para mejorar la resilencia de tu negocio contra las ciberamenazas
                        mientras el ecosistema y la cadena de suministro de tu compañía se amplían.
                      </p>
                      <a className="btn btn-primary cardbotones">Saber más</a>
                    </div>
                  </div>
                </div>
                <div id="cards-row-2">
                  <div id="card-3" className="card">
                    <img className="card-img-top img-fluid" src={card3} alt="Imagen no disponible"/>
                    <div className="card-body">
                      <h5 className="card-title">Clases Online </h5>
                      <p className="card-text">
                        Ofrecemos formación personalizada para el personal de tu empresa mediante
                        las mejores metodologías para afianzar los conocimientos de la mejor forma posible.
                        Nos basamos en las tecnologías más top.

                      </p>
                      <a className="btn btn-primary cardbotones">Saber más</a>
                    </div>
                  </div>
                  <div id="card-4" className="card">
                    <img className="card-img-top img-fluid" src={card4} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Soporte Técnico</h5>
                      <p className="card-text">
                        Nuestros técnicos informáticos darán solución a cualquier problema informático
                        de sus equipos de forma rápida, para que tenga siempre sus equipos actualizados y
                        en un entorno seguro.
                      </p>
                      <a className="btn btn-primary cardbotones">Saber más</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

function Warning() {
  alert('Funcionalidad no disponible');
}

export default Featured;