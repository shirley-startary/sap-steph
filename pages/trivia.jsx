/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

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
  const [respuestas, setRespuestas] = React.useState([
    {
      Pregunta1: false,
    }, {
      Pregunta2: false,
    }, {
      Pregunta3: false,
    }, {
      Pregunta4: false,
    }, {
      Pregunta5: false,
    },
  ]);
  localStorage.setItem('respuestas', JSON.stringify(respuestas));

  const handleChange = (event) => {
    const newArr = [...respuestas]; // copying the old datas array
    newArr[Number(event.target.name.slice(8) - 1)][event.target.name] = event.target.value;
    localStorage.setItem('respuestas', JSON.stringify(newArr));
    setRespuestas(newArr);
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
            {objective.trivia.map((trivia, index) => (
              <Typography className="title" variant="h5" gutterBottom>
                {trivia.pregunta}
                {trivia.respuestas.map(respuesta => (
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label={`Pregunta${trivia.idPregunta}`}
                      name={`Pregunta${trivia.idPregunta}`}
                      value={respuestas[index][`Pregunta${trivia.idPregunta}`]}
                      onChange={handleChange}
                    >
                      {/* <RadioGroup
                      aria-label={objective.index}
                      name={objective.index}
                      value={value}
                      onChange={handleChange}
                    > */}
                      <FormControlLabel value={respuesta} control={<Radio />} label={respuesta} />
                    </RadioGroup>
                  </FormControl>
                ))}
              </Typography>
            ))}
          </CardContent>
          <Link href={`/solutions-trivia/?id=${objective.index}`} key={objective.title}>
            <a className="objective">
              <Fab color="secondary" aria-label="add">
                <PlayArrowRoundedIcon />
              </Fab>
            </a>
          </Link>
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
          background: #F7F7F7;
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
