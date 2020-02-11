import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import CustomizedDialogs from '../components/modal';
import objectives from '../data/objectives';

const InfoObjective = () => (
  <div>
    <NavigationBar />
    <div className="position">
      <RectangularCard
        title={objectives.title}
        thumbnail={objectives.thumbnail}
        subtitle={objectives.subtitle}
        action={<CustomizedDialogs />}
      />

    </div>
    <style jsx global>
      {`
        body {
        margin: 0;
        font-family: system-ui;
        background: white;
        }
        .position {
          padding-top:100px;
        }
      `}
    </style>
  </div>

);


export default InfoObjective;
