import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importamos paginas
import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'

//Importamos componentes
import NavBar from '../components/nav_bar'
import Noticias from '../components/noticias'


const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Interfaz energética</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
          </Routes>
        </div>
        <p> Abajo de esto estoy creando las noticias</p>
        <Noticias />
      </div>

      <div style= {{height: 500}}> </div>
    </BrowserRouter>

    

  )
}

export default Layout
