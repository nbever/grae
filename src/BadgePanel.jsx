import React from 'react';
import PropTypes from 'prop-types';

import injectStyleSheet from 'react-jss';

import Badge from './Badge';

const style = {
  badgeParent: {
    display: 'flex',
    justifyContent: 'center',
    padding: '24px'
  }
};

const BadgePanel = ({classes}) => {
  return (
    <div className={classes.badgeParent}>
      <Badge url="http://www.twitter.com/jamesgraeson" icon="icon-twitter"/>
      <Badge url="http://www.instagram.com/jamesgraeson" icon="icon-instagram"/>
      <Badge url="http://www.facebook.com/jamesgraeson82" icon="icon-facebook"/>
    </div>
  );
};

BadgePanel.propTypes = {
  classes: PropTypes.object
};

export default injectStyleSheet(style)(BadgePanel);
