import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import fondoEnlaces from '../assets/usm.jpg'; // Asegúrate de ajustar la ruta de la imagen

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

const Enlaces = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: false,
        nextArrow: <SamplenextArrow />,
        prevArrow: <SampleprevArrow />,
    };

    return (
        <div className='enlaces__container' id='enlaces externos de interés'>
            <img src={fondoEnlaces} className="background-image"/>
            <div className="overlay"></div>
            <h2 className="title_enlaces">Enlaces externos de interés</h2>
            <Slider {...settings} className="enlace-slider">
                <a className="slide" href="https://portal.beneficiosestudiantiles.cl/">
                    <h3>Portal Beneficios Mineduc</h3>
                </a>
                <a className="slide" href="https://portal.ingresa.cl/">
                    <h3>Crédito Aval del Estado (CAE)</h3>
                </a>
                <a className="slide" href="https://www.junaeb.cl/">
                    <h3>Portal Junaeb</h3>
                </a>
                <a className="slide" href="https://www.tne.cl/">
                    <h3>Portal Tarjeta Nacional Estudiantil (TNE)</h3>
                </a>
            </Slider>
        </div>
    );
};

export default Enlaces;