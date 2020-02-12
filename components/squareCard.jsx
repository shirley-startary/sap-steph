/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = {

};

const SquareCard = (props) => {
  const classes = useStyles;
  const { url, title } = props;

  return (
    <Card
      className={classes.card}
    >
      <Link href="/info-objective">
        <a>
          <CardContent className={classes.description}>
            <img src={url} alt={title} width="100%" />
          </CardContent>
        </a>
      </Link>
    </Card>
  );
};


SquareCard.propTypes = {
  url: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
export default (SquareCard);
