import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = {
  root: {
    boxShadow: '1px 1px 0 1px #e1e1e1',
    marginBottom: 24,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: 24,
  },
  description: {
    flexGrow: 1,
    paddingBottom: 0,
    paddingTop: 0,
  },
};

const SquareCard = (props) => {
  const classes = useStyles;
  const { title, subtitle } = props;

  return (
    <Card
      classes={{
        root: classes.root,
      }}
      className={classes.card}
    >
      <CardContent className={classes.description}>
        <Typography variant="h5" component="h2" gutterBottom>
          { title }
        </Typography>
        <Typography variant="body1">
          { subtitle }
        </Typography>
      </CardContent>
    </Card>
  );
};


SquareCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
export default (SquareCard);
