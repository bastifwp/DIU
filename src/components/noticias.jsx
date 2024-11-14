 import React from 'react'

import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/img_noticias/no_responde.jpg"
import image2 from "../assets/img_noticias/era.png"
//import "../Noticias.css" -> estilos de esto


//import { NavLink } from 'react-router-dom'


//Flechas para cambiar de slide
const SamplenextArrow  = ({className, style, onClick}) =>{
    return (
        <div
            className={`${className} custom-arrow next`}
            style={{...style, display: 'block'}}
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


const Noticias = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        nextArrow: <SamplenextArrow />,
        prevArrow: <SampleprevArrow />,
    };

    return(

        //
        //<div className='noticias-wrapper'>
            <Slider {...settings} className="noticias-slider">

                <div className='slide'>
                    <img src={image2} className='background-image' />
                    <div className="text-container">
                        <h2 className='slide-text'>Diagnostico de salud y calidad de vida</h2>
                        <a className="see-more" href='https://rree.usm.cl/apoyo-y-acompanamiento/proyecto-salud-mental/diagnostico-de-salud-mental-y-calidad-de-vida/' >Ver más</a>
                    </div>
                </div>

                
                <div className='slide'>
                    <img src={image1} className='background-image' />
                    <div className="text-container">
                        <h2 className='slide-text'>Charla Emprendimiento, creatividad y regulación se realiza con éxito en USM Sede Concepción</h2>
                        <a className="see-more" href='https://rree.usm.cl/noticias/charla-emprendimiento-creatividad-y-regulacion-se-realiza-con-exito-en-usm-sede-concepcion/'>Ver más</a>
                    </div>
                </div>


            </Slider>
    );
};


 
export default Noticias