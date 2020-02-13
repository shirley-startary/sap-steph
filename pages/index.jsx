/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import NavigationBar from '../components/navigationBar';
import objectives from '../data/objectives';

const App = () => (
  <div>
    <NavigationBar />

    <div className="objectives">
      { objectives.map(objective => (
        <Link href={`/info-objective/?id=${objective.index}`} key={objective.title}>
          <a className="objective">
            <img src={objective.url} alt={objective.title} />
          </a>
        </Link>
      ))}
    </div>

    <style jsx>
      {`
        .objectives {
          display: grid;
          grid-gap: 25px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          padding-top: 110px;
        }
        .objective {
          display: block;
          background: grey;
          box-shadow: 3px 3px 3px grey;
        }
        .objective img {
          border-radius: 3px;
          width: 100%
        }
      `}
    </style>
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

export default App;
