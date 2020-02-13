import React from 'react';
import NavigationBar from '../components/navigationBar';

const LatinCodeWeek = () => (
  <div>
    <NavigationBar />
    <div className="position">

      Componente de Cards rectangulares
    </div>
    <style jsx global>
      {`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
        .position {
          padding-top:95px;
          max-width:1090px;
          margin: 0 auto;

        }
        
      `}
    </style>
  </div>
);

export default LatinCodeWeek;
