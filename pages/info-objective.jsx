import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import CustomizedDialogs from '../components/modal';
import objectives from '../data/objectives';

const InfoObjective = () => (
  <div>
    <NavigationBar />
    <RectangularCard
      title={objectives.title}
      thumbnail={objectives.thumbnail}
      subtitle={objectives.subtitle}
      action={<CustomizedDialogs />}
    />
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


export default InfoObjective;
