import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importamos paginas
import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'

//Importamos componentes
import NavBar from '../components/nav_bar'
import Noticias from '../components/noticias'
import RightSidebar from './RightSidebar.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        
        {/* Aquí añadimos la SearchBar debajo del NavBar */}
        <div className='search-bar'>
          <SearchBar />
        </div>

        <div className='layout__content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
          </Routes>
          {/* Aquí añadimos el RightSidebar */}
          <RightSidebar />
        </div>

        <p>Abajo de esto estoy creando las noticias</p>
        <Noticias />

        {/* Footer agregado debajo */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout
