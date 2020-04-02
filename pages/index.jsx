import React from 'react';
import Router from 'next/router';
import Box from '@material-ui/core/Box';
import imageCirculo from '../images/splash/Círculo.png';
import imageFondo from '../images/splash/Fondo.png';
import imageLogoJA from '../images/splash/LogoJA.png';
import imageSAP from '../images/splash/SAP.png';


class App extends React.Component {
  componentDidMount() {
    this.redirect = setTimeout(() => {
      Router.push('/objectives');
    }, 5000);
  }

  render() {
    return (
      <>
        <Box
          style={{
            backgroundImage: `url(${imageFondo})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: '100vh',
            width: '100vw',
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={imageCirculo}
            alt="fondo"
            style={{
              height: '', width: '30%',
            }}
          />
          <Box
            style={{
              height: '',
              width: '100%',
              position: 'fixed',
              bottom: 0,
              background: '#ffffff',
              zIndex: 1,
            }}
            display="flex"
            justifyContent="space-between"
          >
            <img
              src={imageLogoJA}
              alt="fondo"
              style={{
                width: '25%',
              }}
            />
            <img
              src={imageSAP}
              alt="fondo"
              style={{
                height: '',
                width: '25%',
              }}
            />
          </Box>
        </Box>
        <style jsx global>
          {`
          body {
            margin: 0;
            padding: 0;
          }
         `}
        </style>
      </>
    );
  }
}

export default App;
