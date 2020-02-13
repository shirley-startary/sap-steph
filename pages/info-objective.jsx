import React from 'react';
import NavigationBar from '../components/navigationBar';
import RectangularCard from '../components/rectangularCard';
import CustomizedDialogs from '../components/modal';
import objectives from '../data/objectives';


export default class extends React.Component {
  static async getInitialProps({ query }) {
    const objective = await objectives[parseInt(query.id, 10) - 1];
    return { objective };
  }

  render() {
    const { objective } = this.props;

    return (
      <div>
        <NavigationBar />
        <div className="position">
          <RectangularCard
            title={objective.title}
            thumbnail=""
            subtitle={objective.subtitle}
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
  }
}
