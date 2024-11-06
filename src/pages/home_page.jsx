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
      <h1 className='layout__title'> Noticias </h1>
      <div className='first__row'>
        <Noticias />
        <RightSidebar />
      </div>
      <h1 className='layout__title'> Áreas Dirección de Relaciones Estudiantiles </h1>
      <Carrusel3D />
      
      <h1 className='layout__title'> Beneficios Estudiantiles</h1>
      <Beneficios />

      <div className='event__container'>
        <h1 className='title_events'>Eventos</h1>
        <Eventos />
  
      </div>
      
      <div className='enlaces__container'>
        <h2 className="layout__title">Enlaces externos de interés</h2>
        <Enlaces />
      </div>

    </>
  )
}

export default HomePage
