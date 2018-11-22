import React from 'react';
import PropTypes from 'prop-types';
import injectStyleSheet from 'react-jss';

import AnimatedState from './AnimatedState';
import AnimatedElement from './AnimatedElement';

import Nebula from './assets/nebula.png';

const styles = {

  full: {
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px'
  },

  background: {
    width: '100%',
    height: '100%',
    // eslint-disable-next-line
    backgroundImage: `url(${Nebula})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },

  top: {
    position: 'absolute',
    top: '24px',
    left: '24px',
    width: '100%',
    color: 'white'
  },

  title: {
    opacity: '0.0',
    fontSize: '64px',
    fontWeight: 'bolder',
    fontFamily: '"Rationale", san-serif'
  },

  fadeIn: {
    opacity: '1.0 !important'
  },

  fadeOut: {
    opacity: '0.0'
  },

  // author box
  authorBox: {
    position: 'absolute',
    top: '48px',
    left: 'calc(100% + 100px)',
    width: '100px',
    height: '48px',
    backgroundColor: 'white'
  },

  authorSlide: {
    left: '52px'
  },

  authorWide: {
    width: '65%'
  },

  authorSkinny: {
    width: '350px'
  },

  authorTall: {
    height: '100%'
  },

  authorNormal: {
    height: '48px'
  },

  // author name
  authorBack: {
    opacity: '0.0',
    position: 'absolute',
    top: '34px',
    left: '72px',
    color: '#3D3D3D',
    fontSize: '49px',
    fontFamily: '"Cormorant Unicase", serif'
    // fontFamily: '"Wire One", sans-serif'
  },

  authorFront: {
    opacity: '0.0',
    position: 'absolute',
    top: '34px',
    left: '74px',
    color: '#EEEEEE',
    fontSize: '48px',
    fontFamily: '"Cormorant Unicase", serif'
    // fontFamily: '"Wire One", sans-serif'
  },

  '@media (min-width: 1024px)': {

  }
};

const Welcome = ({classes}) => {

  const states = [
    new AnimatedState(classes.fadeIn, 'opacity', 1000)
  ];

  const boxStates = [
    new AnimatedState(classes.authorSlide, 'left', 300, 1200, 'ease-in'),
    new AnimatedState(classes.authorWide, 'width', 600, 1000),
    new AnimatedState(classes.authorTall, 'height', 50, 1400),
    new AnimatedState(classes.authorNormal, 'height', 50, 1470),
    new AnimatedState(classes.authorSkinny, 'width', 200, 1600),
    new AnimatedState(classes.fadeOut, 'opacity', 600, 2100)
  ];

  const backAuthor = [
    new AnimatedState(classes.fadeIn, 'opacity', 300, 2600)
  ];

  const frontAuthor = [
    new AnimatedState(classes.fadeIn, 'opacity', 300, 2600)
  ];

  return (
    <div className={classes.full}>

      <div className={classes.background} />

      <div className={classes.top}>
        <AnimatedElement
          clazz={classes.title}
          states={states}
        >
          SIDE STEP
        </AnimatedElement>
        <AnimatedElement 
          clazz={classes.authorBox}
          states={boxStates}
        />
        <AnimatedElement
          clazz={classes.authorBack}
          states={backAuthor}
        >
          James Graeson
        </AnimatedElement>
        <AnimatedElement
          clazz={classes.authorFront}
          states={frontAuthor}
        >
          James Graeson
        </AnimatedElement>        
      </div>
    </div>
  );
};

Welcome.propTypes = {
  classes: PropTypes.object
};

export default injectStyleSheet(styles)(Welcome);