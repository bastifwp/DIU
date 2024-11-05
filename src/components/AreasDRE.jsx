import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';

const Carrusel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
      centerMode: true,
      centerPadding: "600px",
      focusOnSelect: true,
    };
  
    return (
      <Slider {...settings} className="areas-slider">
        <div className="slide">
          <h3>Atención en Salud</h3>
          <p>Servicio Médico y Dental</p>
        </div>
        <div className="slide">
          <h3>Fomento y Desarrollo Estudiantil</h3>
          <p>Iniciativas y organizaciones estudiantiles</p>
        </div>
        <div className="slide">
          <h3>Otro Servicio</h3>
          <p>Información adicional</p>
        </div>
      </Slider>
    );
  };
  
  export default Carrusel;