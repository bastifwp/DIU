//Aqui va Beneficios juju
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';


import image1 from "../assets/img_noticias/no_responde.jpg"
import image2 from "../assets/img_noticias/era.png"


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



const Beneficios = () => {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "300px",
      focusOnSelect: false,
      nextArrow: <SamplenextArrow />,
      prevArrow: <SampleprevArrow />,
    };

  


    return (
      <Slider {...settings} className="benef-slider">
        
        <div className='slide'>
          <img src={image2} className="background-image"/>
          <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="text">
            <h3>Gratuidad</h3>
          </a>
        </div>

        <div className='slide'>
          <img src={image1} className="background-image"/>
            <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="text">
              <h3 className="slide-text">Gratuidad</h3>
            </a>
        </div>

        <div className='slide'>
          <img src={image1} className="background-image"/>
            <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="text">
              <h3 className="slide-text">Gratuidad</h3>
            </a>
        </div>

        <div className='slide'>
          <img src={image1} className="background-image"/>
            <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="text">
              <h3 className="slide-text">Gratuidad</h3>
            </a>
        </div>
                
      </Slider>
    );
  };
  
  export default Beneficios;