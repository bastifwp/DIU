import React from 'react';
import '../stylesheets/rightsidebar/RightSidebar.scss';
const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* Contenido del RightSidebar */}
      <h4>Portales de servicios Dirección de Relaciones Estudiantiles y externos</h4>
      <ul>
        <li><a href="https://www.usm.cl">SIREB</a></li>
        <li><a href="https://www.usm.cl">Fondos Concursables</a></li>
        <li><a href="https://www.usm.cl">Desarrollo Estudiantil</a></li>
        <li><a href="https://www.usm.cl">Unidad de Equidad de Género</a></li>
        <li><a href="https://www.usm.cl">USM.cl</a></li>
      </ul>
    </div>
  );
};

export default RightSidebar;
