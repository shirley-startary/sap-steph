import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigationBar from '../components/navigationBar';
import programsOng from '../data/programs';

const color = {
  1: '#eb1c2d',
  2: '#D3A029',
  3: '#279B48',
  4: '#C31F33',
  5: '#EF402B',
  6: '#26AED9',
  7: '#FCB712',
  8: '#8F1838',
  9: '#F36D26',
  10: '#E11484',
  11: '#F99D26',
  12: '#CF8D2A',
  13: '#48773D',
  14: '#187DBC',
  15: '#3EB049',
  16: '#0D568B',
  17: '#183668',
};

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    paddingTop: '0px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  position: {
    marginTop: 120,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const InfoONG = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const { programs } = props;
  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <NavigationBar />
      <section className="position">
        { programs.programs.map(program => (
          <Card className={classes.root} elevation={3}>
            <CardHeader
              title={program.program}
            />
            <CardMedia
              className={classes.media}
              image={program.image}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {program.text}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              {program.ods.map(item => (
                <IconButton aria-label="share">
                  <span style={{ backgroundColor: color[item], color: 'white', padding: '2px' }}>{item}</span>
                </IconButton>
              ))}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {program.more}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </section>

      <style jsx global>
        {`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
        .position {
          padding-top:95px;
          max-width:1090px;
          margin: 0 auto;
      `}
      </style>
    </div>
  );
};

InfoONG.getInitialProps = async ({ query }) => {
  const programs = await programsOng[parseInt(query.id, 10) - 1];
  console.log(programs.programs);
  return { programs };
};

export default InfoONG;
