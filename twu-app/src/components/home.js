import React from "react";
import './styles/home.css'
import sticky from "../assets/icons/sticky.svg"
import undrawserver from "../assets/imagenes/undrawserver.svg"
import background1 from "../assets/imagenes/1.jpg"
import background2 from "../assets/imagenes/2.jpg"
import background3 from "../assets/imagenes/3.jpg"

function Home() {
    const carouselItem1 = {backgroundImage: `url(${background1})`}
    const carouselItem2 = {backgroundImage: `url(${background2})`}
    const carouselItem3 = {backgroundImage: `url(${background3})`}

    return (
        <div id="main">
            <div id="Mycarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#Mycarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#Mycarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#Mycarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div id="carousel-item-1" className="carousel-item active">
                        <div className="item-content">
                            <div className="carousel-image" id="cimage-1"
                                 style={carouselItem1}>
                            </div>
                            <div className="text-container">
                                <h1>Los mejores tips</h1>
                                <p>
                                    Nunca había sido tan seguro navegar por Internet.<br/>
                                    Saca el máximo partido con nuestros tips...
                                </p>
                                <a href="" className="btn btn-primary">Saber más</a>
                            </div>
                        </div>
                    </div>

                    <div id="carousel-item-2" className="carousel-item">
                        <div className="item-content">
                            <div className="carousel-image" id="cimage-2"
                                 style={carouselItem2}>
                            </div>
                            <div className="text-container">
                                <h1>Nuestros productos</h1>
                                <p>
                                    Disponemos de los mejores productos en el<br/>
                                    mercado de la informática...

                                </p>
                                <a href="" className="btn btn-primary">Saber más</a>
                            </div>
                        </div>
                    </div>

                    <div id="carousel-item-3" className="carousel-item">
                        <div className="item-content">
                            <div className="carousel-image" id="cimage-3"
                                 style={carouselItem3}>
                            </div>
                            <div className="text-container">
                                <h1>Sobre nosotros</h1>
                                <p>
                                    Descubre quiénes somos y cómo nos ganamos<br/>
                                    la confianza de todos...

                                </p>
                                <a href="" className="btn btn-primary">Saber más</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#Mycarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#Mycarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div id="firstcont">
                <div id="firstcont-1">
                    <div id="fctext" className="innertextdiv">
                        <h1>Prepárate para el Futuro <span dangerouslySetInnerHTML={{__html: '&#128301'}}></span></h1><br/>
                        <p>
                            Tech World Updates es tu espacio tecnológico. Compartimos todo nuestro
                            conocimiento edificado con más diez años de experiencia y además te ponemos
                            al día con lo más reciente del mundo de la tecnología. Nuestro contenido
                            va dedicado a todo público, bien sea estudiantes, profesionales o aficionados.
                            <br/>
                            <br/>
                            Aquí encontrarás desde muy buenos tips de seguridad en internet hasta los productos
                            más relevantes hasta la fecha...
                        </p>
                    </div>
                    <div id="sticky-1" className="sticky">
                        <img className="sticky-item" src={sticky} alt={"Missing"}/>
                            <div>>>></div>
                            <p className="sticky-item">
                                Hola soy Sticky! Te doy la bienvenida a mi
                                sitio...brr..brr... Regístrate arriba para poder ofrecerte la mejor
                                experiencia...
                            </p>
                    </div>
                </div>
                <div id="firstcont-2">
                    <img className="img-fluid" src={undrawserver} alt={"Missing"}/>
                </div>
            </div>
        </div>
    );
}

export default Home;