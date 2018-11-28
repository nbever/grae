import React from 'react';
import PropTypes from 'prop-types';
import injectStyleSheet from 'react-jss';
import isNil from 'lodash/isNil';

import AnimatedState from './AnimatedState';
import AnimatedElement from './AnimatedElement';
import BadgePanel from './BadgePanel';
import Seconds from './Seconds';
import ContentButtons from './ContentButtons';
import Content from './Content';

import Nebula from './assets/site-graphic.png';

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
    backgroundColor: 'black',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },

  top: {
    position: 'absolute',
    top: '24px',
    left: '24px',
    width: 'calc(100% - 24px)',
    color: 'white',
    overflow: 'hidden',
    height: 'calc(100% - 24px)'
  },

  bottom: {
    position: 'absolute',
    bottom: '120px',
    width: '100%'
  },

  title: {
    opacity: '0.0',
    fontSize: '64px',
    fontWeight: 'bolder',
    fontFamily: '"Rationale", san-serif',
    overflow: 'hidden'
  },

  link: {
    color: '#5bb0ff'
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
    backgroundColor: 'white',
    overflow: 'hidden'
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
    fontFamily: '"Cormorant Unicase", serif',
    // fontFamily: '"Wire One", sans-serif',
    overflow: 'hidden'
  },

  authorFront: {
    opacity: '0.0',
    position: 'absolute',
    top: '34px',
    left: '74px',
    color: '#EEEEEE',
    fontSize: '48px',
    fontFamily: '"Cormorant Unicase", serif',
    // fontFamily: '"Wire One", sans-serif',
    overflow: 'hidden'
  },

  // coming soon
  comingSoon: {
    color: 'white',
    fontFamily: '"Wire One", sans-serif',
    fontSize: '32px',
    opacity: '0.0',
    textShadow: '1px 1px black',
    textAlign: 'center',
    fontWeight: 'bolder'
  },

  badgePanel: {
    position: 'absolute',
    bottom: '24px',
    textAlign: 'center',
    width: '100%'
  },

  seconds: {
    position: 'absolute'
  },

  '@media only screen and (max-width: 640px)': {
    authorSlide: {
      left: '46px'
    },

    comingSoon: {
      fontSize: '48px'
    },

    bottom: {
      bottom: '20%'
    },

    authorFront: {
      fontSize: '36px',
      left: '54px',
      top: '46px'
    },

    authorBack: {
      fontSize: '37px',
      left: '52px',
      top: '46px'
    },

    badgePanel: {
      bottom: '8px'
    }
  }
};

class Welcome extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dim: 0,
      top: 0,
      left: 0,
      showContent: false,
      content: null
    };
  }

  componentDidMount() {
    this.windowResized();
    window.addEventListener('resize', this.windowResized);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResized);
  }

  windowResized = () => {

    if (!isNil(this.timeout)) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(this.windowResized, 50);

    const dim = Math.min(document.documentElement.clientHeight,
      document.documentElement.clientWidth) * 0.15;

    this.setState({
      ...this.state,
      dim: dim,
      top: (document.documentElement.clientHeight / 2.0) - (dim / 2.0),
      left: (document.documentElement.clientWidth / 2.0) - (dim / 2.0)
    });
  }

  contentClicked = (type) => {
    this.setState({
      ...this.state,
      showContent: true,
      content: type
    });
  }

  contentClosed = () => {
    this.setState({
      ...this.state,
      showContent: false
    });
  }

  render() {
    const {classes} = this.props;

    const states = [
      new AnimatedState(classes.fadeIn, 'opacity', 1000)
    ];

    const boxStates = [
      new AnimatedState(classes.authorSlide, 'left', 300, 1200, 'ease-in'),
      new AnimatedState(classes.authorWide, 'width', 600, 1000),
      new AnimatedState(classes.authorTall, 'height', 5, 1400),
      new AnimatedState(classes.authorNormal, 'height', 5, 1500),
      new AnimatedState(classes.authorSkinny, 'width', 200, 1600),
      new AnimatedState(classes.fadeOut, 'opacity', 300, 2100)
    ];

    const backAuthor = [
      new AnimatedState(classes.fadeIn, 'opacity', 10, 2050)
    ];

    const frontAuthor = [
      new AnimatedState(classes.fadeIn, 'opacity', 10, 2050)
    ];

    const comingStates = [
      new AnimatedState(classes.fadeIn, 'opacity', 500, 2900)
    ];

    const {dim, top, left} = this.state;

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
          <AnimatedElement
            clazz={classes.authorBox}
            states={boxStates}
          />
          <ContentButtons
            contentClick={this.contentClicked}
          />
        </div>

        <div className={classes.bottom}>
          <AnimatedElement
            clazz={classes.comingSoon}
            states={comingStates}
          >
            Coming 2019
          </AnimatedElement>
        </div>

        <div className={classes.badgePanel}>
          <BadgePanel />
          <div>
            <a
              className={classes.link}
              href="mailto:james.graeson@gmail.com"
            >
              james.graeson@gmail.com
            </a>
          </div>
        </div>

        <div
          className={classes.seconds}
          style={{
            top: `${top}px`,
            left: `${left}px`
          }}
        >
          <Seconds width={dim} height={dim}/>
        </div>

        <Content
          show={this.state.showContent}
          content={this.state.content}
          close={this.contentClosed}
        />
      </div>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object
};

export default injectStyleSheet(styles)(Welcome);
