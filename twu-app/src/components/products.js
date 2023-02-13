import React from "react";
import sticky from "../assets/icons/sticky.svg"
import hardware from "../assets/imagenes/hardware.jpg"
import gaming from "../assets/imagenes/gaming.jpg"
import network from "../assets/imagenes/network.jpg"
import office from "../assets/imagenes/office.jpg"
import software from "../assets/imagenes/software.jpg"
import mobile from "../assets/imagenes/mobile.jpg"
import undrawShop from "../assets/imagenes/undraw_shop.svg"
import "./styles/products.css"
import Banner from "./banner";


function Products() {
  const width1 = {width: `55%`}
  const width2 = {width: `26%`}
  const width3 = {width: `11%`}
  const width4 = {width: `5%`}
  const width5 = {width: `3%`}

  return (
    <>
      <div id="main">
        <div id="fourthcont">
          <div id="fourthcont-1">

            <div id="fourth-1-upper">
              <div id="upper-1">
                <div id="foc-text">
                  <h2>Tenemos lo Mejor del Mercado <span dangerouslySetInnerHTML={{__html: '&#128717;&#65039;'}}></span></h2>
                  <br/>
                  <p>
                    Contamos con una amplia variedad de productos informáticos.
                    Nos encanta que nuestros clientes se queden satisfechos con
                    su compra. Una gran cantidad de personas obtienen con nosotros
                    ese ordenador gaming tan deseado o tal vez un remplazo para
                    ese móvil defectuoso... Ofrecemos artículos de primera calidad
                    a un precio muy asequible. Sin duda con nosotros no te arrepentirás.
                    ¡Ah!, no olvides que si no te convence algo...simplemente...
                    ¡Devuélvelo!
                  </p>
                </div>
              </div>
              <div id="upper-2">
                <div id="upper-2-row-1">
                  <div id="sticky-4" className="sticky">
                    <img className="sticky-item" src={sticky} alt="no img"/>
                    <div>>>></div>
                    <p className="sticky-item">
                      Echa un vistazo a las opiniones de nuestros clientes,
                      esto es prueba de nuestra calidad, dedicación y la confianza que
                      depositan en nosotros...brr...brr...
                    </p>
                  </div>
                </div>
                <div id="upper-2-row-2">
                  <div id="producto-title">
                    <h3><span dangerouslySetInnerHTML={{__html: '&#128293'}}></span> ¿Qué opinan nuestros clientes? <span dangerouslySetInnerHTML={{__html: '&#128293'}}></span></h3>
                  </div>
                </div>
              </div>
            </div>

            <div id="fourth-1-lower">
              <div id="product-cards">
                <div id="pc-row-1" className="pc-rows">
                  <div id="card-5" className="card pc-card">
                    <img src={hardware} className="card-img-top" alt="No Disponible"/>
                    <div className="card-body">
                      <h5 className="card-title">Hardware</h5>
                      <p className="card-text">
                        Nuestros componentes de hardware son de última generación,
                        tenemos lo más potente del mercado.
                      </p>
                      <a className="btn cardbotones">Saber más</a>
                    </div>
                  </div>
                  <div id="card-6" className="card pc-card">
                    <img src={gaming} className="card-img-top" alt="No Disponible"/>
                    <div className="card-body">
                      <h5 className="card-title">Gaming</h5>
                      <p className="card-text">
                        Tenemos lo más damandado actualmente además de una de las
                        comunidades gamers más grandes del mundo.
                      </p>
                      <a className="btn cardbotones">Saber más</a>
                    </div>
                  </div>
                  <div id="card-7" className="card pc-card">
                    <img src={network} className="card-img-top" alt="No Disponible"/>
                    <div className="card-body">
                      <h5 className="card-title">Redes</h5>
                      <p className="card-text">
                        Disponemos del hardware de red para cualquier tipo de instalación
                        de una amplia variedad de marcas.
                      </p>
                      <a className="btn cardbotones">Saber más</a>
                    </div>
                  </div>
                </div>
                <div id="pc-row-2" className="pc-rows">
                  <div id="card-8" className="card pc-card">
                    <img src={office} className="card-img-top" alt="No Disponible"/>
                    <div className="card-body">
                      <h5 className="card-title">Oficina</h5>
                      <p className="card-text">
                        Para tu oficina también tenemos los mejores artículos. Te garantizamos
                        un mayor confort y eficiencia mientras trabajas.
                      </p>
                      <a className="btn cardbotones">Saber más</a>
                    </div>
                  </div>
                  <div id="card-9" className="card pc-card">
                    <img src={software} className="card-img-top" alt="No Disponible"/>
                    <div className="card-body">
                      <h5 className="card-title">Software</h5>
                      <p className="card-text">
                        Nuestro software te hará la vida más fácil, precisamos
                        de antivirus que mejorarán tu seguridad y muchas más herramientas.
                      </p>
                      <a className="btn cardbotones">Saber más</a>
                    </div>
                  </div>
                  <div id="card-10" className="card pc-card">
                    <img src={mobile} className="card-img-top" alt="No Disponible"/>
                    <div className="card-body">
                      <h5 className="card-title">Móviles</h5>
                      <p className="card-text">
                        Si estás buscando un móvil nuevo este es el sitio ideal.
                        Tenemos dispositivos de las marcas más famosas y los topes de gama.
                      </p>
                      <a className="btn cardbotones">Saber más</a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fourthcont-mitad">
                <div id="reviews-div">
                  <div id="reviews">
                    <span id="reviews-title">Reviews</span>
                    <span><i className="bi bi-star-fill"></i></span>
                    <span><i className="bi bi-star-fill"></i></span>
                    <span><i className="bi bi-star-fill"></i></span>
                    <span><i className="bi bi-star-fill"></i></span>
                    <span><i className="bi bi-star-half"></i></span>
                    <p>4.3 de promedio basado en 573K opiniones.</p>
                    <hr/>

                    <div id="div-barras">
                      <div className="barras-row">
                        <div className="barra-izq">5 estrellas</div>
                        <div className="progress barra">
                          <div className="progress-bar" role="progressbar" style={width1} aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="barra-der">315.15K</div>
                      </div>
                      <div className="barras-row">
                        <div className="barra-izq">4 estrellas</div>
                        <div className="progress barra">
                          <div className="progress-bar" role="progressbar" style={width2} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="barra-der">148.98K</div>
                      </div>
                      <div className="barras-row">
                        <div className="barra-izq">3 estrellas</div>
                        <div className="progress barra">
                          <div className="progress-bar" role="progressbar" style={width3} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="barra-der">63.03K</div>
                      </div>
                      <div className="barras-row">
                        <div className="barra-izq">2 estrellas</div>
                        <div className="progress barra">
                          <div className="progress-bar" role="progressbar" style={width4} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="barra-der">28.65K</div>
                      </div>
                      <div className="barras-row">
                        <div className="barra-izq">1 estrella</div>
                        <div className="progress barra">
                          <div className="progress-bar" role="progressbar" style={width5} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="barra-der">17.19K</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="otro-div">
                  <img src={undrawShop} alt="no img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner></Banner>
    </>
  );
}

export default Products;