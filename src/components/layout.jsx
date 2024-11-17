import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importamos paginas
import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'

//Importamos componentes
import NavBar from '../components/nav_bar'
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />

        <div className='layout__content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
        
        {/* Footer agregado debajo */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout
