import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';

const LatinCodeWeek = () => (
  <div>
    <NavigationBar />
    <RectangularCard  />
    COmponente de Cards rectangulares
    <style jsx global>
      {`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
        
      `}
    </style>
  </div>
);

export default LatinCodeWeek;
