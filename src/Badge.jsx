import React from 'react';
import PropTypes from 'prop-types';
import injectStyleSheet from 'react-jss';

const style = {
  badge: {
    fontSize: '16px',
    padding: '8px',
    backgroundColor: 'white',
    cursor: 'pointer',
    borderRadius: '16px',
    margin: '8px',

    '&:hover': {
      backgroundColor: '#EFEFEF'
    }
  },

  '@media only screen and (max-width: 640px)': {
    badge: {
      fontSize: '32px',
      borderRadius: '24px',
      margin: '4px'
    }
  }
};

const Badge = ({classes, url, icon}) => {
  return (
    <div
      className={`${icon} ${classes.badge}`}
      onClick={() => {
        window.open(url, '_blank');
      }}
    />
  );
};

Badge.propTypes = {
  url: PropTypes.string,
  classes: PropTypes.object,
  icon: PropTypes.string
};

export default injectStyleSheet(style)(Badge);
