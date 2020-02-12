import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';

const Programs = () => (
  <div>
    <NavigationBar />
    <div className='position'>
      Programs
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

export default Programs;
