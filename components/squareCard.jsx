/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
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
  const { title } = props;

  return (
    <Card
      classes={{
        root: classes.root,
      }}
      className={classes.card}
    >
      <CardContent className={classes.description}>
        <Typography variant="body1" gutterBottom>
          <Link href="/info">
            <a>
              { title }
            </a>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};


SquareCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
export default (SquareCard);
