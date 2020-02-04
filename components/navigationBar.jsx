/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const NavigationBar = () => (
  <>
    <header>
      SAP
      <nav className="menu">
        <ul>
          <li>
            <Link href="/">
              <a>
                <i>⌁</i>
                Objetivos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/programs">
              <a>
                <i>⌁</i>
                Programas
              </a>
            </Link>
          </li>
          <li>
            <Link href="/latin-code-week">
              <a>
                <i>⌁</i>
                Latin Code Week
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ONGs">
              <a>
                <i>⌁</i>
                ONGs
              </a>
            </Link>
          </li>
          <li>
            <Link href="/graphics">
              <a>
                <i>⌁</i>
                Gráficas
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <style jsx>
      {`header {
          color: #fff;
          background: #04A7E7;
          padding:  15px 0px 10px 0px ;
          text-align: center;
        }
        .menu ul {
          display:flex;
          justify-content: space-around;
          list-style: none;
          margin: 0;
          padding:  10px 0 0 0;
        }
        .menu ul li {
          display: inline-block;
          font-size: 10px;
          margin: 5px;
          cursor: pointer;
        }
        .menu a {
          display: block;
          color: #fff;
          text-decoration: none;
        }
        .menu i {
          display: block;
        }`
      }
    </style>
  </>
);

export default NavigationBar;
