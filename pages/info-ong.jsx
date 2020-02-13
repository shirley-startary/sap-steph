import React from 'react';
import NavigationBar from '../components/navigationBar';

const infoOng = () => (
  <div>
    <NavigationBar />
    <div className='position'>
      Info de las organizaciones
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

export default infoOng;
