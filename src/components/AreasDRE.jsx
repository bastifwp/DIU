import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';

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



const Carrusel = () => {
    const settings = {
      infinite: false,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 3,
      centerMode: true,
      centerPadding: "600px",
      focusOnSelect: true,
      nextArrow: <SamplenextArrow />,
      prevArrow: <SampleprevArrow />,
    };
  
    return (
      <Slider {...settings} className="areas-slider">
        <div className="slide">
          <h3>Atención en Salud</h3>

          <div className="flex-details">
            <div className="description">Servicio Médico y Dental</div>
            <div className="link-block">
              <a href="https://rree.usm.cl/equipo-atencion-salud/"> Ver más</a>
            </div>
          </div>

        </div>
        <div className="slide">
          <h3>Fomento y Desarrollo Estudiantil</h3>

          <div className="flex-details">
            <div className="description">Iniciativas y organizaciones estudiantiles</div>
            <div className="link-block">
              <a href="https://rree.usm.cl/fomento-iniciativas-estudiantiles/"> Ver más</a>
            </div>
          </div>

        </div>
        <div className="slide">
          <h3>Atención Social y Beneficios</h3>

          <div className="flex-details">
            <div className="description">Apoyo y becas al estudiante</div>
            <div className="link-block">
              <a href="https://rree.usm.cl/atencion-social-beneficios/"> Ver más</a>
            </div>
          </div>
      
        </div>
      </Slider>
    );
  };
  
  export default Carrusel;