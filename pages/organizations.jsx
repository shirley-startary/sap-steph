import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ongs from '../data/ongs';
import NavigationBar from '../components/navigationBar';

const LatinCodeWeek = () => (
  <div>
    <NavigationBar />
    <div className="ongs">
      { ongs.map(ong => (
        <Link href={`/info-ong/?id=${ong.index}`} key={ong.title}>
          <Paper elevation={3}>
            <Grid container spacing={2} justify="center">
              <Grid item xs={10} md={6}>
                <img src={ong.logo} alt="" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className="title" variant="h4" gutterBottom>
                  {ong.name}
                </Typography>
                <Typography className="title" gutterBottom>
                  {ong.description}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      ))}
    </div>
    <style jsx>
      {`
        .ongs {
          display: grid;
          grid-gap: 25px;
          padding: 15px;
          padding-top: 110px;
          align: center;
        }
        img {
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

export default LatinCodeWeek;
