import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logoRREE.png'
import '../stylesheets/searchbar/SearchBar.scss'


export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  const NavButton = ({buttonText, disabled}) => {
    const classes = ['nav-bar__button']
    return (
      <button className = {classes} disabled={disabled}>
        {buttonText}
      </button>
    )
  }
  function SearchBar() {
    const [searchText, setSearchText] = useState('');
    const [dropdownOptions] = useState([
      'Noticias',
      'Áreas Dirección de Relaciones Estudiantiles',
      'Beneficios Estudiantiles',
      'Eventos',
      'Enlaces externos de interés',
    ]);
  
    const handleDropdownChange = (e) => {
      const selectedOption = e.target.value;
      setSearchText(selectedOption);
  
      if (selectedOption) {
        // Realiza el scroll automáticamente a la sección correspondiente
        const targetSection = document.getElementById(selectedOption.toLowerCase());
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
  
    return (
      <div className="search-bar">
        <select
          value={searchText}
          onChange={handleDropdownChange}
          className="search-bar__dropdown"
        >
          <option value="">Buscar</option>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  const DropdownMenu = () => {
    return (
      <div className="dropdown-menu">
        <ul>
          <a className="dropdown-link" href='https://rree.usm.cl/apoyo-y-acompanamiento/'>Apoyo y acompañamiento</a>
          <a className="dropdown-link" href='https://rree.usm.cl/atencion-social-beneficios/'>Atención Social y Beneficios</a>
          <a className="dropdown-link" href='https://rree.usm.cl/fomento-iniciativas-estudiantiles/'>Fomento y Desarrollo Estudiantil</a>
          <a className="dropdown-link" href='https://rree.usm.cl/equipo-atencion-salud/'>Atención en Salud</a>
        </ul>
      </div>
    );
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  
 
  return (
    <nav className='nav-bar'>
      <img src={Logo} height={80} alt='Logo UTFSM'/>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        Inicio
      </NavLink>
      <a
        href="https://rree.usm.cl/quienes-somos/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-bar__link"
      >
        Quiénes Somos
      </a>
      <div
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Áreas
        {/* <DropdownMenu /> */}
        {isDropdownVisible && <DropdownMenu />}
      </div>
      <a
        href="https://rree.usm.cl/publicaciones/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-bar__link"
      >
        Publicaciones
      </a>
      <a
        href="https://rree.usm.cl/contacto/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-bar__link"
      >
        Contacto
      </a>
      <NavButton buttonText={'Activación BAES - JUNAEB 2024'} disabled={false}></NavButton>
      <NavButton buttonText={'Accesibilidad'} disabled={false}></NavButton>
      <SearchBar />
    </nav>
  )
}
 
export default NavBar
