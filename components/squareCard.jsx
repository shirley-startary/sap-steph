/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const SquareCard = (props) => {
  const { url, title } = props;

  return (
    <Card>
      <Link href="/info-objective">
        <a>
          <CardContent>
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
