import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationBar from '../components/navigationBar';
import SquareCard from '../components/squareCard';
import objectives from '../data/objectives';

const App = () => (
  <div>
    <NavigationBar />
    <Grid container spacing={4}>
      {objectives.map(objective => (
        <Grid item xs={6}>
          <SquareCard
            title={objective.title}
            url={objective.url}
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
