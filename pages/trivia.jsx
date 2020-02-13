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
  const [preguntas, setPreguntas] = React.useState([
    {
      Pregunta1:false,
    },{
      Pregunta2:false,
    },{
      Pregunta3:false,
    }, {
      Pregunta4:false,
    }, {
      Pregunta5:false,
    }, 
  ]);
  const handleChange = (event) => {
    // console.log(event.target.value);
    // console.log('index: ' + index);
    // console.log('property name: '+ event.target.name.slice(8));
    let newArr = [...preguntas]; // copying the old datas array
    // console.log(newArr[Number(event.target.name.slice(8))-1]);
    newArr[Number(event.target.name.slice(8)-1)][event.target.name] = event.target.value;
    // newArr[event.target.name] = event.target.value; // replace e.target.value with whatever you want to change it to
console.log(newArr, event.target.value);

    // setDatas(newArr); 
    setPreguntas(newArr)
    // setValue(event.target.value);
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
            {objective.trivia.map(trivia => {
              // console.log(trivia);
              
           return (<Typography className="title" variant="h5" gutterBottom>
                {trivia.pregunta}
                    {trivia.respuestas.map(respuesta => (
                  <FormControl component="fieldset">
                    <RadioGroup aria-label={`Pregunta${trivia.idPregunta}`} name={`Pregunta${trivia.idPregunta}`} value={preguntas[trivia.idPregunta][`Pregunta${trivia.idPregunta}`]} onChange={handleChange}>
                      <FormControlLabel value={respuesta} control={<Radio />} label={respuesta} />
                    </RadioGroup>
                  </FormControl>
                      ))}
              </Typography>)
})}
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
