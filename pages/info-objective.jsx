/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Card from '@material-ui/core/Card';
import Link from 'next/link';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import ReactGA from 'react-ga';
import objectives from '../data/objectives';
import NavigationBar from '../components/navigationBar';


export default class extends React.Component {
  static async getInitialProps({ query }) {
    ReactGA.initialize('UA-158372514-1');
    ReactGA.pageview(`/info-objective/?id=${parseInt(query.id, 10)}`);
    const objective = await objectives[parseInt(query.id, 10) - 1];
    return { objective };
  }

  render() {
    const { objective } = this.props;

    return (
      <div>
        <NavigationBar />
        <div className="information">
          <Card>
            <CardContent>
              <Typography className="title" variant="h4" gutterBottom>
                {objective.title}
              </Typography>
              <Typography className="title" gutterBottom>
                {objective.info}
              </Typography>
            </CardContent>
          </Card>
          <Link href={`/trivia/?id=${objective.index}`} key={objective.title}>
            <a className="objective">
              <Fab color="secondary" aria-label="add">
                <PlayArrowRoundedIcon />
              </Fab>
            </a>
          </Link>
        </div>


        <style jsx>
          {`
            .information {
              padding: 15px;
              padding-top: 100px;
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
  }
}
