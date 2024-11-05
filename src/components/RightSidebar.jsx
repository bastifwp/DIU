import React from 'react';
import '../stylesheets/rightsidebar/RightSidebar.scss';
const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* Contenido del RightSidebar */}
      <h4>Portales de servicios Dirección de Relaciones Estudiantiles y externos</h4>
      <ul>
        <li><a href="https://www.usm.cl"><b>SIREB</b></a></li>
        <li><a href="https://www.usm.cl"><b>Fondos Concursables</b></a></li>
        <li><a href="https://www.usm.cl"><b>Desarrollo Estudiantil</b></a></li>
        <li><a href="https://www.usm.cl"><b>Unidad de Equidad de Género</b></a></li>
        <li><a href="https://www.usm.cl"><b>USM.cl</b></a></li>
      </ul>
    </div>
  );
};

export default RightSidebar;
