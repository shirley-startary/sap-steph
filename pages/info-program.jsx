import React from 'react';
import NavigationBar from '../components/navigationBar';

const infoProgram = () => (
  <div>
    <NavigationBar />
    <div className="position">
      Info del programa
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

export default infoProgram;
