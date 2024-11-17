import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import backgroundImage from '../assets/usm.jpg'; // Update with the correct path to your uploaded image

// Flechas para cambiar de slide
const SamplenextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} custom-arrow next`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
};

const SampleprevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} custom-arrow prev`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
};

const Beneficios = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "600px",
        focusOnSelect: false,
        nextArrow: <SamplenextArrow />,
        prevArrow: <SampleprevArrow />,
    };

    return (
        <div className="event-container">
            <img src={backgroundImage} className="background-image" />
            <div className="overlay"></div>
            <h2 className="title_events" id='eventos'>Eventos</h2>
            <Slider {...settings} className="eventos-slider">
                <div className="slide">
                    <h1>10 SEP 2024</h1>
                    <h3>Muestra Costumbrista Sede Viña del Mar</h3>
                    <p>12:15</p>
                    <p>Presencial</p>
                    <a className="link" href="https://usm.cl/eventos/muestra-costumbrista-2024-2/">Más información</a>
                </div>
                <div className="slide">
                    <h1>10 SEP 2024</h1>
                    <h3>Vitacumbia Endiciochá Campus Vitacura</h3>
                    <p>11:50</p>
                    <p>Presencial</p>
                    <a className="link" href="https://rree.usm.cl/eventos/vitacumbia-endiciocha-campus-vitacura/">Más información</a>
                </div>
                <div className="slide">
                    <h1>10 SEP 2024</h1>
                    <h3>Muestra Costumbrista Sede Concepción</h3>
                    <p>12:00</p>
                    <p>Presencial</p>
                    <a className="link" href="https://rree.usm.cl/eventos/muestra-costumbrista-sede-concepcion/">Más información</a>
                </div>
                <div className="slide">
                    <h1>10 SEP 2024</h1>
                    <h3>Hablemos de Inclusión, Ley TEA en Educación Superior Campus Casa Central Valparaíso</h3>
                    <p>11:30</p>
                    <p>Presencial</p>
                    <a className="link" href="https://rree.usm.cl/eventos/hablemos-de-inclusion-ley-tea-en-educacion-superior-campus-casa-central-valparaiso/">Más información</a>
                </div>
            </Slider>
        </div>
    );
};

export default Beneficios;