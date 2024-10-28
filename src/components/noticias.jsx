import React from 'react'

import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/img_noticias/no_responde.jpg"
import image2 from "../assets/img_noticias/era.png"
//import "../Noticias.css" -> estilos de esto


//import { NavLink } from 'react-router-dom'

//Acá estará la información de las cards de las noticias
const slides = [

    {
        image: image1,
        text: "Decreto de Rectoría N° 056/2024 Actualización Reglamento Institucional de Derechos, Deberes y Disciplina del Estudiantado"
    },

    {
        image: image2,
        text:"Diagnostico de salud y calidad de vida"
    }
]


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
        <Slider {...settings} className="noticias-slider">
            
            {/*Recorremos cada slide */}
            {slides.map((slide, index) => ( 
                <div key={index} className="slide">
                    <img src={slide.image} alt="" className='background-image'/>
                    <div className = "text-container">
                        <h2 className="slide-text">{slide.text}</h2>
                        <button className="see-more">Ver más</button>
                    </div>
                </div>
            ))}
        </Slider>
    );
};


 
export default Noticias