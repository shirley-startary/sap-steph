import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import dataProyectos from '../data/latinCodeWeek';
import Carousel from '../components/carousel';

const LatinCodeWeek = () => {
  const paises = {
    'Argentina':'https://user-images.githubusercontent.com/25912292/74392323-5d2b3000-4dcc-11ea-83d9-0ab4c38543f1.png',
    'Brasil':'https://user-images.githubusercontent.com/25912292/74392324-5dc3c680-4dcc-11ea-9fc0-26af2d4065e9.png',
    'Chile':'https://user-images.githubusercontent.com/25912292/74392325-5dc3c680-4dcc-11ea-8a7c-b98aacee63cd.png',
    'Colombia':'https://user-images.githubusercontent.com/25912292/74392326-5e5c5d00-4dcc-11ea-9afb-6e2183b0772f.png',
    'Costa Rica':'https://user-images.githubusercontent.com/25912292/74392327-5e5c5d00-4dcc-11ea-9df2-e39e4ea275a3.png',
    'Panamá':'https://user-images.githubusercontent.com/25912292/74392329-5ef4f380-4dcc-11ea-9f0b-102ba3e62e77.png',
    'Paraguay':'https://user-images.githubusercontent.com/25912292/74392330-5f8d8a00-4dcc-11ea-9963-084bc09adb18.png',
    'Perú':'https://user-images.githubusercontent.com/25912292/74392331-5f8d8a00-4dcc-11ea-93a3-62eab9d543df.png',
    'Puerto Rico':'https://user-images.githubusercontent.com/25912292/74392333-5f8d8a00-4dcc-11ea-9ced-dbc1f3600b02.png',
    'Venezuela':'https://user-images.githubusercontent.com/25912292/74392334-60262080-4dcc-11ea-9378-43474b850b2f.png',
    'México':'https://user-images.githubusercontent.com/25912292/74392328-5ef4f380-4dcc-11ea-9e37-e0144815a498.png',
  }
  return (
    <div>
      <NavigationBar />
      <div className="position">
        <div className="">
          <img src={dataProyectos.imagePresentation} className="imagePresentation" alt="dummy" />
        </div>
        <div className="infoPrincipal">
          <h3>
            Latin Code Week acerca a los jóvenes a las carreras de ciencia, tecnología,
            ingeniería y matemáticas (STEM), para convertirse en la fuerza laboral de los
            empleos del futuro. Más de 5,000 jóvenes han sido impactados gracias a este programa.
          </h3>
          <div className='containerCountrys'>
            {Object.keys(paises).map(pais => (<img src={paises[pais]}/>))}
          </div>
        </div>
        <Carousel data={dataProyectos.dataSlides}/>
        <section>
          {dataProyectos.data.map(item => (
            <RectangularCard
              thumbnail={item.thumbnail}
              title={item.title}
              subtitle={item.subtitulo}
              objective={item.objective}
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
          padding-top:95px;
          max-width:1090px;
          margin: 0 auto;

        }
        .infoPrincipal {
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align:center;
          height: 400px;
          margin: 0 auto;
        }
        .infoPrincipal h3 {
          // text-align: center;
          font-size: 20px;
          padding: 0 10px 0 10px;
          margin:  0 15px 0 15px;
        }
        .infoPrincipal img {
          margin: 0 auto;
        }
        .containerCountrys {
          display:flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center
          max-width: 1090;
          width:auto;
        }
        .containerCountrys img{
          width:32px;
          margin:5px;
          // width:80%;
        }
      `}
      </style>
    </div>
  );
};

export default LatinCodeWeek;
