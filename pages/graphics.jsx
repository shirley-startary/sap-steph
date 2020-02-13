import React from 'react';
import NavigationBar from '../components/navigationBar';

const Graphics = () => (
  <div>
    <NavigationBar />
    <div className='position'>
      Pagina de Graficos
    </div>
    <style jsx global>
      {`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
        .position {
          padding: 100px;
        }
      `}
    </style>
  </div>
);

export default Graphics;