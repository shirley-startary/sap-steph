import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import dataProyectos from '../data/latinCodeWeek';
import Carousel from '../components/carousel';

const LatinCodeWeek = () => {

  return (
    <div>
      <NavigationBar />
      <div className="position">
        <div>
          <img src="" className="imagePresentation" alt="dummy" />
        </div>
        <div>
          <p>
            Latin Code Week acerca a los jóvenes a las carreras de ciencia, tecnología,
            ingeniería y matemáticas (STEM), para convertirse en la fuerza laboral de los
            empleos del futuro. Más de 5,000 jóvenes han sido impactados gracias a este programa.
          </p>
        </div>
        <Carousel/>
        <section>
          {dataProyectos.map(item => (
            <RectangularCard
              thumbnail={item.thumbnail}
              title={item.title}
              subtitle={item.subtitulo}
            />
          ))}
        </section>
         
      </div>

      <style jsx global>
        {`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
        img.imagePresentation {
          width:100%;
        }
        .position {
          padding-top:100px;
        }
        
      `}
      </style>
    </div>
  );
};

export default LatinCodeWeek;
