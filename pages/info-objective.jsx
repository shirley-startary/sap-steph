import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactGA from 'react-ga';
import objectives from '../data/objectives';
import NavigationBar from '../components/navigationBar';
import CustomizedDialogs from '../components/modal';


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
            <CardActions>
              <CustomizedDialogs />
            </CardActions>
          </Card>
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
