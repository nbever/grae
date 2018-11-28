import React from 'react';
import PropTypes from 'prop-types';
import injectStyleSheet from 'react-jss';

const styles = {
  contentButton: {
    fontSize: '24px',
    color: '#3D3D3D',
    cursor: 'pointer',
    padding: '12px',
    transition: '400ms',

    '&:hover': {
      color: 'white'
    }
  },

  '@media only screen and (max-width: 640px)': {

    contentButton: {
      fontSize: '32px',
      padding: '8px'
    }
  }
};

const ContentButton = ({classes, clickCallback, clazz,
  moveOver, moveOut, content}) => {
  return (
    <div
      className={`${clazz} ${classes.contentButton}`}
      onClick={($e) => { clickCallback(content, $e); }}
      onMouseOver={moveOver}
      onMouseOut={moveOut}
    />
  );
};

ContentButton.propTypes = {
  classes: PropTypes.object,
  clickCallback: PropTypes.func,
  clazz: PropTypes.string,
  content: PropTypes.string,
  moveOver: PropTypes.func,
  moveOut: PropTypes.func
};

export default injectStyleSheet(styles)(ContentButton);
