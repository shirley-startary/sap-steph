import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationBar from '../components/navigationBar';
import SquareCard from '../components/squareCard';
import objectives from '../data/objectives';

const App = () => (
  <div>
    <NavigationBar />
    <div className="position">
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
    </div>
    <style jsx global>
      {`
        body {
          margin: 0;
        font-family: system-ui;
        background: white;
        }
        .position {
          padding-top: 110px;
        }
      `}
    </style>
  </div>
);

export default App;
