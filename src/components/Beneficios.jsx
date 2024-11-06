//Aqui va Beneficios juju
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
        <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="slide">
          <h3>Gratuidad</h3>
        </a>
        <a href="https://portal.beneficiosestudiantiles.cl/" className="slide">
          <h3>Becas y créditos Mineduc</h3>
        </a>

        <a href="https://rree.usm.cl/beneficios/becas-usm/" className="slide">
          <h3>Becas usm</h3>
        </a>

        <a href = "https://rree.usm.cl/atencion-social-beneficios/tne/" className="slide">
          <h3>Tarjeta Nacional Estudiantil</h3>
        </a>

        <a href="https://rree.usm.cl/atencion-social-beneficios/credito-con-garantia-estatal-credito-cae/" className="slide">
          <h3>Crédito Aval del Estado (CAE)</h3>
        </a>
      </Slider>
    );
  };
  
  export default Beneficios;