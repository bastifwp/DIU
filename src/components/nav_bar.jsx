import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logoRREE.png'
import '../stylesheets/searchbar/SearchBar.scss';
//import '../stylesheets/dropdown-areas/index.scss';


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
    return (
      <div className="search-bar">
        <input type="text" placeholder="Buscar" />
      </div>
    );
  }
  /*
  const DropdownMenu = () => {
    return (
      <div className="dropdown-menu">
        <ul>
          <li>Apoyo y acompañamiento</li>
          <li>Atención Social y Beneficios</li>
          <li>Fomento y Desarrollo Estudiantil</li>
          <li>Atención en Salud</li>
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
 */
  return (
    <nav className='nav-bar'>
      <img src={Logo} height={80} alt='Logo UTFSM'/>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        Inicio
      </NavLink>
      <NavLink
        className={navLinkClass}
        to={{pathname: 'https://rree.usm.cl/quienes-somos/'}} target="_blank"
      >
        Quiénes Somos
      </NavLink>
      <div
        className="dropdown"
        to='/'
      >
        Áreas
      </div>
      <NavLink
        className={navLinkClass}
        to={{pathname: 'https://rree.usm.cl/publicaciones/'}} target="_blank"
      >
        Publicaciones
      </NavLink>
      <NavLink
        className={navLinkClass}
        to={{pathname: 'https://rree.usm.cl/contacto/'}} target="_blank"
      >
        Contacto
      </NavLink>
      <NavButton buttonText={'Activación BAES - JUNAEB 2024'} disabled={false}></NavButton>
      <NavButton buttonText={'Accesibilidad'} disabled={false}></NavButton>
      <SearchBar />
    </nav>
  )
}
 
export default NavBar
