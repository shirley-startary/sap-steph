import React from 'react';

const App = () => <div>
  <header>
    SAP
    <nav className="menu">
      <ul>
        <li><i>⌁</i> Objetivos</li>
        <li><i>✏</i>Acciones</li>
        <li><i>⛓</i>Socios</li>
        <li><i>➚</i>Graficas</li>
        <li><i>💰</i>Acumulado</li>
      </ul>
    </nav>
  </header>


  <style jsx>{`
    header {
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

    .menu ul li {
      display: inline-block;
      font-size:10px;
      margin: 5px;
    }
    .menu ul i{
      display:block;
    }
  `}</style>
  <style jsx global>{`
    body {
      margin: 0;
      font-family: system-ui;
      background: white;

    }
  `}</style>
</div>;

export default App;
