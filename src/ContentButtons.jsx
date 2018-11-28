import React from 'react';
import PropTypes from 'prop-types';
import injectStyleSheet from 'react-jss';
import isNil from 'lodash/isNil';

import AnimatedElement from './AnimatedElement';
import AnimatedState from './AnimatedState';
import ContentButton from './ContentButton';

import {
  BLURB, BIO, INFLUENCES
} from './constants';

const styles = {

  container: {
    opacity: '0.0',
    position: 'absolute',
    top: '76px',
    left: '252px'
  },

  fadeIn: {
    opacity: '1.0'
  },

  title: {
    fontFamily: '"Wire One", sans-serif',
    fontSize: '24px',
    textAlign: 'center'
  },

  '@media only screen and (max-width: 640px)': {
    container: {
      left: '152px'
    }
  }
};

class ContentButtons extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: null
    };
  }

  setTitle = (type) => {
    this.setState({
      ...this.state,
      hover: type === BIO ?
        'Bio'
        :
        type === BLURB ?
          'Synopsis'
          :
          'Influences'
    });
  }

  clearHover = () => {
    this.setState({
      ...this.state,
      hover: null
    });
  }

  render() {
    const {classes, contentClick} = this.props;
    const fadeIn = [
      new AnimatedState(classes.fadeIn, 'opacity', 200, 2900)
    ];

    return (
      <AnimatedElement
        clazz={classes.container}
        states={fadeIn}
      >
        <div style={{display: 'flex'}}>
          <ContentButton
            clazz="icon-person_pin"
            onClick={contentClick}
            content={BIO}
            moveOver={() => {this.setTitle(BIO); }}
            moveOut={this.clearHover}
            clickCallback={contentClick}
          />
          <ContentButton
            clazz="icon-local_library"
            onClick={contentClick}
            moveOver={() => {this.setTitle(BLURB); }}
            moveOut={this.clearHover}
            content={BLURB}
            clickCallback={contentClick}
          />
          <ContentButton
            clazz="icon-import_contacts"
            onClick={contentClick}
            moveOver={() => {this.setTitle(INFLUENCES); }}
            moveOut={this.clearHover}
            content={INFLUENCES}
            clickCallback={contentClick}
          />
        </div>
        { !isNil(this.state.hover) &&
          <div className={classes.title}>
            {this.state.hover}
          </div>
        }
      </AnimatedElement>
    );
  }
}

ContentButtons.propTypes = {
  classes: PropTypes.object,
  contentClick: PropTypes.func
};

export default injectStyleSheet(styles)(ContentButtons);
