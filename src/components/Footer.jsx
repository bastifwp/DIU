import React from 'react';
import '../stylesheets/footer/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__campuses'>
        <div className='footer__campus'>
          <h4>Sede Concepción</h4>
          <p>Arteaga Alemparte 943, Edificio H, Hualpén, Concepción</p>
          <p>📞 (+56-41) 2407622</p>
          <p>✉️ rree.concepcion@usm.cl</p>
          <div className='footer__social'>
            {/* Iconos de redes sociales aquí */}
          </div>
        </div>
        <div className='footer__campus'>
          <h4>Campus San Joaquín</h4>
          <p>Av. Vicuña Mackenna 3939, Edificio F, San Joaquín, Santiago</p>
          <p>📞 (+56-2) 23037070</p>
          <p>✉️ rree.csj@usm.cl</p>
          <div className='footer__social'>
            {/* Iconos de redes sociales aquí */}
          </div>
        </div>
        <div className='footer__campus'>
          <h4>Campus Vitacura</h4>
          <p>Av. Santa María 6400, Edificio A, Vitacura, Santiago</p>
          <p>📞 (+56-2) 32028070</p>
          <p>✉️ rree.csv@usm.cl</p>
          <div className='footer__social'>
            {/* Iconos de redes sociales aquí */}
          </div>
        </div>
        <div className='footer__campus'>
          <h4>Sede Viña del Mar</h4>
          <p>Av. Federico Santa María 6090, Edificio B, Viña del Mar</p>
          <p>📞 (+56-32) 2277881</p>
          <p>✉️ consultasbienestar.jmc@usm.cl</p>
          <div className='footer__social'>
            {/* Iconos de redes sociales aquí */}
          </div>
        </div>
        <div className='footer__campus'>
          <h4>Campus Casa Central Valparaíso</h4>
          <p>Av. España 1680, Edificio R, Valparaíso</p>
          <p>📞 (+56 32) 2652 889</p>
          <p>✉️ info.rree@usm.cl</p>
          <div className='footer__social'>
            {/* Iconos de redes sociales aquí */}
          </div>
        </div>
      </div>
      <div className='footer__links'>
        <div className='footer__section'>
          <h4>UNIVERSIDAD</h4>
          <ul>
          <li><a href="#">Nuestra Historia</a></li>
            <li><a href="#">Federico Santa María</a></li>
            <li><a href="#">Definiciones Estratégicas</a></li>
            <li><a href="#">Modelo Educativo</a></li>
            <li><a href="#">Organización</a></li>
            <li><a href="#">Información Estadística USM</a></li>
          </ul>
        </div>
        <div className='footer__section'>
          <h4>EXTENSIÓN Y CULTURA</h4>
          <ul>
          <li><a href="#">Dirección General de Comunicaciones</a></li>
            <li><a href="#">Dirección General de Vinculación con el Medio</a></li>
            <li><a href="#">Oficina de Asuntos Internacionales</a></li>
            <li><a href="#">Red de Ex-Alumnos</a></li>
            <li><a href="#">Noticias USM</a></li>
            <li><a href="#">Eventos USM</a></li>
            <li><a href="#">Radio USM</a></li>
            <li><a href="#">Cultura USM</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>SERVICIOS</h4>
          <ul>
            <li><a href="#">Aula USM</a></li>
            <li><a href="#">Biblioteca USM</a></li>
            <li><a href="#">Portal de Autoservicio Institucional</a></li>
            <li><a href="#">Dirección de Tecnologías de la Información</a></li>
            <li><a href="#">Sistema de Información de Gestión Académica</a></li>
            <li><a href="#">Sistema Integrado de Información Argos ERP</a></li>
            <li><a href="#">Sistema de Remuneraciones Históricas</a></li>
            <li><a href="#">Directorio USM</a></li>
            <li><a href="#">Trabaja con nosotros</a></li>
          </ul>
        </div>
        <div className='footer__accreditation'>
          <p>6 años de Universidad Acreditada</p>
          <ul>
            <li>Gestión Institucional</li>
            <li>Docencia Pregrado</li>
            <li>Investigación</li>
            <li>Postgrado</li>
            <li>Vinculación con el Medio</li>
            <li>HASTA DICIEMBRE 2028</li>
          </ul>
        </div>
      </div>
      <div className='footer__bottom'>
        <p>Sitio web administrado por la Dirección de Relaciones Estudiantiles</p>
      </div>
    </footer>
  );
};

export default Footer;
