import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const color = {
  '1': '#eb1c2d',
  '2': '#D3A029',
  '3': '#279B48',
  '4': '#C31F33',
  '5': '#EF402B',
  '6': '#26AED9',
  '7': '#FCB712',
  '8': '#8F1838',
  '9': '#F36D26',
  '10': '#E11484',
  '11': '#F99D26',
  '12': '#CF8D2A',
  '13': '#48773D',
  '14': '#187DBC',
  '15': '#3EB049',
  '16': '#0D568B',
  '17': '#183668',
}
const styles = {
  root: {
    boxShadow: '1px 1px 0 1px #e1e1e1',
    marginBottom: 24,
    '&:last-child': {
      marginBottom: 0,
    },
  },

  card: {
    display: 'flex',
    padding: 10,
    maxWidth: 1090,
    margin: '15px auto auto 15px',
    height: 150,
  },

  thumbnail: {
    position: 'relative',
    height: 100,
    width: '100px',
    margin: 10,
  },
  imagesCard: {
    width:'100px'
  },
  
  description: {
    flexGrow: 1,
    paddingBottom: 0,
    paddingTop: 0,
    position:'relative',
  },
  objective: {
    position: 'absolute', 
    botton:0, 
    right:0,
  },
  span: {
    color: '#fff',
    display: 'inline-block',
    fontSize:15,
    padding: 5,
    margin: '10px 0 0 10px',
    border: '1px solid',
    borderRadius: 5,
    right: 50,
  }
};

const RectangularCard = (props) => {
  const {
    action,
    classes,
    thumbnail,
    title,
    subtitle,
    objective = []
  } = props;

  return (
    <Card
      classes={{
        root: classes.root,
      }}
      className={classes.card}
    >
      <div className={classes.thumbnail}>
        <img className={classes.imagesCard} src={thumbnail} alt={thumbnail}/>
      </div>
      
      <CardContent className={classes.description}>
        <Typography variant="h5" component="h2" gutterBottom>
          { title }
        </Typography>
        <Typography variant="body1">
          { subtitle }
        </Typography>
        <Typography variant="body1" className={classes.objective}>
          { objective.map(element => {
            return (
                <span style={{backgroundColor:color[element.split(" ")[1]]}} className={classes.span}>{element.split(" ")[1]}</span>
                )
            }) 
          }
        </Typography>
      </CardContent>

      <CardActions disableActionSpacing>
        { action }
      </CardActions>
      <style jsx>{`
      
      `}</style>
    </Card>
  );
};

RectangularCard.propTypes = {
  action: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  classes: PropTypes.shape().isRequired,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  objective: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default withStyles(styles)(RectangularCard);
