import React from 'react';
import Link from 'next/link';
import NavigationBar from '../components/navigationBar';
import objectives from '../data/objectives';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Solutions = (props) => {
  const classes = useStyles();
  let arrayResult = [];
  let score = 0;
  const  { title } = props[0];
  const compareAnswers = () => {
    for (let i = 0; i < props[1].length;i++) {

      if (props[0].trivia[i].respuestaCorrecta == props[1][i][`Pregunta${i + 1}`]){
        score = score + props[0].trivia[i].puntaje;
         arrayResult.push(props[0].trivia[i].pregunta);
      } else {

      }
    }
    
  }
  compareAnswers()
  
  return (<div>
    <NavigationBar />
    <div className="position">
      <h1>{title}</h1>
      <p>Preguntas que respondiste bien</p>
      {arrayResult.map(item => (
        <h4>{item}</h4>
      ))}
      <p>Obtuviste un puntaje de <h3>{score}</h3></p>
      <Link href="/" prefetch>
        <a>
        <Button variant="contained" color="primary">
          Regresar
        </Button>
        </a>
        
      </Link>
    
    </div>
    <style jsx global>
      {`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
        .position {
          padding: 100px;
        }
      `}
    </style>
  </div>)
};
Solutions.getInitialProps = async ({query}) => {
  // console.log(data.query);
  const respuestas = JSON.parse(localStorage.getItem("respuestas"));

  const objective = await objectives[parseInt(query.id, 10) - 1];
  return [ objective, respuestas];
};

export default Solutions;
