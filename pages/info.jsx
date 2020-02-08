import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import CustomizedDialogs from '../components/modal';

const objectives = {
  title: 'FIN DE LA POBREZA',
  thumbnail: '',
  subtitle: 'Más de 700 millones de personas en el mundo aún viven en pobreza extrema sin acceso a servicios básicos como salud, educación, agua potable y asistencia sanitaria. La pobreza tiene muchas dimensiones, encontrándose entre sus causas el desempleo, la exclusión social y la alta vulnerabilidad de ciertas poblaciones a desastres naturales y enfermedades. El ODS 1 busca erradicar la pobreza extrema en todo el mundo. Se considera como población en pobreza extrema a quienes viven con menos de 1.25 dólares al día. La pobreza en México solo se ha reducido 2.5% en 10 años; en Chiapas, Guerrero, Oaxaca y Veracruz aumentó en el mismo periodo. ',
};

const InfoObjective = () => (
  <div>
    <NavigationBar />
    <RectangularCard
      title={objectives.title}
      thumbnail={objectives.thumbnail}
      subtitle={objectives.subtitle}
      action={<CustomizedDialogs />}
    />
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


export default InfoObjective;
