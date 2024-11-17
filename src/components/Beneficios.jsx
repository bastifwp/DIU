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
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: false,
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
          <p className="description">La gratuidad es un beneficio que cubre el arancel y matrícula de estudiantes de educación superior que cumplan con los requisitos.</p>
        </div>
    
        <div className='slide'>
          <img src={image1} className="background-image"/>
          <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="text">
            <h3>Becas y créditos<br/> Mineduc</h3>
          </a>
          <p className="description">Conjunto de becas y créditos ofrecidos por el Ministerio de Educación para apoyar a los estudiantes en sus estudios.</p>
        </div>
    
        <div className='slide'>
          <img src={image1} className="background-image"/>
          <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="text">
            <h3>Becas USM</h3>
          </a>
          <p className="description">Becas internas de la Universidad Técnica Federico Santa María para apoyar a sus estudiantes en diversas áreas.</p>
        </div>
    
        <div className='slide'>
          <img src={image1} className="background-image"/>
          <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="text">
            <h3>Becas JUNAEB</h3>
          </a>
          <p className="description">Becas ofrecidas por la Junta Nacional de Auxilio Escolar y Becas para estudiantes en distintos niveles educativos.</p>
        </div>
    
        <div className='slide'>
          <img src={image1} className="background-image"/>
          <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="text">
            <h3>Tarjeta Nacional Estudiantil</h3>
          </a>
          <p className="description">Beneficio que permite a los estudiantes acceder a tarifas rebajadas en el transporte público.</p>
        </div>
    
        <div className='slide'>
          <img src={image1} className="background-image"/>
          <a href="https://portal.beneficiosestudiantiles.cl/gratuidad" className="text">
            <h3>Crédito Aval del Estado (CAE)</h3>
          </a>
          <p className="description">El Crédito con Aval del Estado es un beneficio que permite financiar los estudios de educación superior en cuotas a largo plazo.</p>
        </div>
        
      </Slider>
    );
  };
  
  export default Beneficios;