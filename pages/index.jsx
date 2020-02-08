import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationBar from '../components/navigationBar';
import SquareCard from '../components/squareCard';

const objectives = [
  {
    title: 'FIN DE LA POBREZA',
    info: '',
  },
  {
    title: 'HAMBRE CERO',
    info: '',
  },
  {
    title: 'Objetivo3',
    info: '',
  },
  {
    title: 'Objetivo4',
  },
  {
    title: 'Objetivo5',
  },
  {
    title: 'Objetivo6',
  },
  {
    title: 'Objetivo7',
  },
  {
    title: 'Objetivo8',
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
