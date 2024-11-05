import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logoRREE.png'


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
  return (
    <nav className='nav-bar'>
      <img src={Logo} height={80} alt='Logo UTFSM' />
      <NavLink
        className={navLinkClass}
        to='/'
      >
        Inicio
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/lightbulb'
      >
        Quiénes Somos
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/lightbulb'
      >
        Áreas
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/lightbulb'
      >
        Publicaciones
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/lightbulb'
      >
        Contacto
      </NavLink>
      <NavButton buttonText={'Activación BAES - JUNAEB 2024'} disabled={false}></NavButton>
      <NavButton buttonText={'Accesibilidad'} disabled={false}></NavButton>
    </nav>
  )
}
 
export default NavBar
