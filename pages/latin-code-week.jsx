import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';

const LatinCodeWeek = () => {

  const dataProyectos = [
    {
      'title':'Fomentar el ahorro',
      'subtitulo':'One family:Aplicación familiar donde se plantean una meta de ahorro',
      'thumbnail':'',
      'Objective':['Objetivo 8 Trabajo decente y crecimiento económico'],
    },
    {
      'title':'Mejorar la Calidad de la Educación en México',
      'subtitulo':'Uni App: aplicación que brinda opciones de educación universitaria con becas, programas e intercambios.',
      'thumbnail':'',
      'Objective':['Objetivo 4 Educación de Calidad'],
    },
    {
      'title':'Ciudades inteligentes',
      'subtitulo':'Girly Protect: pulsera para la seguridad de mujeres. ',
      'thumbnail':'',
      'Objective':['Objetivo 3 Salud y Bienestar ','Objetivo 9 Industria, Innovación e Infraestructura'],

    },
    {
      'title':'Deserción escolar',
      'subtitulo':'Security way: transporte seguro y accesible para traslado de estudiantes.',
      'thumbnail':'',
      'Objective':['Objetivo 11 Ciudades y Comunidades Sostenibles','Objetivo 4 Educación de Calidad'],
    },
  ]

  return (<div>
    <NavigationBar />
    <div className="">
      <img src="https://dummyimage.com/vga" className="imagePresentation" alt="dummy"/>
      <div>
        <p>
          Latin Code Week acerca a los jóvenes a las carreras de ciencia, tecnología, ingeniería y matemáticas (STEM), 
          para convertirse en la fuerza laboral de los empleos del futuro. Más de 5,000 jóvenes han sido impactados gracias a este programa.        </p>
      </div>
      <section>
        {dataProyectos.map(item => (
          <RectangularCard  
          thumbnail=''
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
  </div>)
};

export default LatinCodeWeek;
