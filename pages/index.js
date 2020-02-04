import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationBar from '../components/navigationBar';
import SquareCard from '../components/squareCard';

const objectives = [
  {
    title: 'Objetivo1',
    subtitle: 'Texto del Objetivo 1',
  },
  {
    title: 'Objetivo2',
    subtitle: 'Texto del Objetivo 2',
  },
  {
    title: 'Objetivo3',
    subtitle: 'Texto del Objetivo 3',
  },
  {
    title: 'Objetivo4',
    subtitle: 'Texto del Objetivo 4',
  },
];

const App = () => (
  <div>
    <NavigationBar />
    <Grid container spacing={4}>
      {objectives.map(objective => (
        <Grid item xs={6}>
          <SquareCard
            title={objective.title}
            subtitle={objective.subtitle}
          />
        </Grid>
      ))}
    </Grid>
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
