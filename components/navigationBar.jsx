/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import dataLogo from '../images/icons/logoLCW.png';

const NavigationBar = () => (
  <>
    <header>
      <nav className="menu">
        <ul>
          <li>
            <Link href="/">
              <a>
                <i><img src="https://user-images.githubusercontent.com/25916511/74312032-6e296200-4d36-11ea-8151-b6ff3e941d66.png" alt="objectives" /></i>
                Objetivos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/organizations/">
              <a>
                <i><img src="https://user-images.githubusercontent.com/25916511/74312447-54d4e580-4d37-11ea-80e5-6ae18e2e082f.png" alt="ongs" /></i>
                ONGs
              </a>
            </Link>
          </li>
          <li>
            <Link href="/latin-code-week/">
              <a>
                <i><img src={dataLogo} alt="data logo" /></i>
                Latin Code Week
              </a>
            </Link>
          </li>
          <li>
            <Link href="/graphics/">
              <a>
                <i><img src="https://user-images.githubusercontent.com/25916511/74312740-d88ed200-4d37-11ea-8cfd-01b4d31e7074.png" alt="graphic" /></i>
                Gráficas
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <style jsx>
      {`
      header {
        width: 100%;
        position: fixed;
        z-index: 100;
        background: #FFF;
        padding:  15px 0px 10px 0px ;
        text-align: center;
        height:70px;
      }
      .menu ul {
        display:flex;
        justify-content: space-around;
        list-style: none;
        margin: 0;
        padding: 0 0 0 0;
      }
      .menu ul li {
        display: inline-block;
        font-size: 14px;
        margin: 5px;
        cursor: pointer;
      }
      .menu a {
        display: block;
        color: #F0AB00;
        text-decoration: none;
      }
      .menu i {
        display: block;
      }
      
      i img {
        width: 40px;  
        height: 40px;
      }    
    `}
    </style>
  </>
);

export default NavigationBar;
