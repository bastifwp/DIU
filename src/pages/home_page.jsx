import React from 'react'
import Noticias from '../components/noticias'
import RightSidebar from '../components/RightSidebar'
import Carrusel3D from '../components/AreasDRE'
import Beneficios from '../components/Beneficios'
import Eventos from '../components/Eventos'
import Enlaces from '../components/Enlaces'


export const HomePage = () => {
  return (
    <>
      <h1 className='layout__title' id='noticias'> Noticias </h1>
      <div className='first__row'>
        <Noticias />
        <RightSidebar />
      </div>
      <h1 className='layout__title' id='áreas dirección de relaciones estudiantiles'> Áreas Dirección de Relaciones Estudiantiles </h1>
      <Carrusel3D />
      
      <h1 className='layout__title' id='beneficios estudiantiles'> Beneficios Estudiantiles</h1>
      <Beneficios />

     
      <Eventos />

      
      <h2 className="layout__title"></h2>
      <Enlaces />

    </>
  )
}

export default HomePage
