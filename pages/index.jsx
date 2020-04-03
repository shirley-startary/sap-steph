import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import imageCirculo from '../images/splash/Círculo.png';
import imageFondo from '../images/splash/Fondo.png';
import imageLogoJA from '../images/splash/LogoJA.png';
import imageSAP from '../images/splash/SAP.png';


class App extends React.Component {
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
        >
          <Box
            style={{
              height: '70vh',
              width: '100%',
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={imageCirculo}
              alt="fondo"
              className="circle"
            />
          </Box>
          <Box
            style={{
              height: '30vh',
              width: '100%',
            }}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Link href="/objectives">
              <a>
                <Fab
                  aria-label="add"
                  variant="extended"
                  style={{
                  backgroundColor: 'white',
                  color: '#F0AB00',
                  fontWeight: 'bold',
                }}>
                  INGRESA
                </Fab>
              </a>
            </Link>
          </Box>
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
              alt="LogoJA"
              className="logos"

            />
            <img
              src={imageSAP}
              alt="imageSAP"
              className="logos"
            />
          </Box>
        </Box>
        <style jsx global>
          {`
          body {
            margin: 0;
            padding: 0;
          }
          .circle {
            width: 80%;
          }
          .logos {
            width: 40%;
          }
          @media screen and (min-width: 1280px) {
              .circle {
                width: 30%;
              }
              .logos {
                width: 25%;
              }
            }
         `}
        </style>
      </>
    );
  }
}

export default App;
