import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import NavigationBar from '../components/navigationBar';
import objectives from '../data/objectives';

const Trivia = (props) => {
  const { objective } = props;
  const [value, setValue] = React.useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <NavigationBar />
      <div className="information">
        <Card>
          <CardContent>
            <Typography className="title" variant="h4" gutterBottom>
              {objective.title}
            </Typography>
            {objective.trivia.map(trivia => (
              <Typography className="title" variant="h5" gutterBottom>
                {trivia.pregunta}
                {trivia.respuestas.map(respuesta => (
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                      <FormControlLabel value={respuesta} control={<Radio />} label={respuesta} />
                    </RadioGroup>
                  </FormControl>
                ))}
              </Typography>
            ))}
          </CardContent>
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
};

Trivia.getInitialProps = async ({ query }) => {
  const objective = await objectives[parseInt(query.id, 10) - 1];
  return { objective };
};

export default Trivia;
