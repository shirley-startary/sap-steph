import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import PropTypes from 'prop-types';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1090,
    flexGrow: 1,
    paddingTop: '0px',
    margin:'0 auto',
  },
  containerCarousel: {
    position: 'relative',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
  textCarousel: {
    position:'absolute',
    fontSize: '25px',
    color: 'black',
    textShadow: '0px 0px 4px white',
  },
  
  img: {
    display: 'block',
    maxWidth: 1090,
    overflow: 'hidden',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
  },
}));


const Carousel = (props) => {
  const  { data } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div id="carousel" className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}> */}
        {/* <Typography>{data[activeStep].label}</Typography> */}
      {/* </Paper> */}

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className={classes.containerCarousel}>
                <Typography className={classes.textCarousel}>{data[activeStep].label}</Typography>
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}	
        position="static"	
        variant="dots"	
        activeStep={activeStep}	
        nextButton={(	
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}	
          </Button>	
        )}	
        backButton={(	
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>	
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}	
            
          </Button>	
        )}	
      />	
    </div>
  );
};

Carousel.propTypes = {
  data:PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

export default Carousel;
