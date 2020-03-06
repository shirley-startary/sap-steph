import React from 'react';
import Router from 'next/router';
import imageMobile from '../images/splash-mobile.png';
import imageTablet from '../images/splash-tablet.png';
import imageDesktop from '../images/splash-desktop.png';


class App extends React.Component {
  componentDidMount() {
    this.redirect = setTimeout(() => {
      Router.push('/objectives');
    }, 1000);
  }

  render() {
    return (
      <div className="root">
        <style jsx global>
          {`
            body {
              margin: 0;
            }
            .root {
              height: 100vh;
            }
            @media screen and (max-width: 640px) and (min-width: 0px) {
              .root {
                background-image: url(${imageMobile});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
              }
            }
            @media screen and (max-width: 1007px) and (min-width: 641px) {
              .root {
                background-image: url(${imageTablet});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
              }
            }
            @media screen and (min-width: 1024px) {
              .root {
                background-image: url(${imageTablet});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
              }
            }
            @media screen and (min-width: 1280px) {
              .root {
                background-image: url(${imageDesktop});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
