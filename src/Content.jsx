import React from 'react';
import PropTypes from 'prop-types';
import injectStyleSheet from 'react-jss';

import {
  BLURB,
  BIO
} from './constants';

const styles = {
  content: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#eeeeee',
    width: '100%',
    height: 'calc(100% - 300px)',
    position: 'absolute',
    top: '170px',
    textAlign: 'center',
    overflow: 'hidden'
  },

  frame: {
    height: 'calc(100% - 82px)',
    width: '80%',
    padding: '40px',
    overflow: 'auto',
    border: '1px solid #eeeeee',
    textAlign: 'left',
    margin: 'auto'
  },

  para: {
    paddingTop: '8px'
  },

  title: {
    fontSize: '24px',
    fontFamily: '"Wire One", sans-serif',
    paddingBottom: '12px'
  },

  closeButton: {
    fontFamily: '"Wire One", sans-serif',
    fontSize: '20px',
    transition: '400ms',
    cursor: 'pointer',
    position: 'absolute',
    right: '76px',

    '&:hover': {
      textDecoration: 'underline'
    }
  },

  link: {
    color: '#5bb0ff'
  },

  '@media only screen and (max-width: 640px)': {
    closeButton: {
      right: '20px'
    }
  }
};

class Content extends React.Component {

  render() {
    const {classes, show, content, close} = this.props;

    const text = content === BIO ?
      this.getBio()
      :
      content === BLURB ?
        this.getBlurb()
        :
        this.getInfluences();

    return (
      <div className={classes.content}
        style={{display: show === true ? 'block' : 'none'}}>
        <div
          className={classes.closeButton}
          onClick={close}
        >
          Close
        </div>

        {text}
      </div>
    );
  }

  getInfluences = () => {
    const {classes} = this.props;

    return (
      <div className={classes.frame}>
        <div className={classes.title}>
          Influences
        </div>
        <div className={classes.para}>
          The following books, authors, and series have had
          a tremendous influence on James writing.
        </div>
        <div className={classes.para}>
          <div>
            <a href="https://jamesrollins.com/" className={classes.link}>
              James Rollins
            </a>
            : Sigma Force Series
          </div>
          <div>
            <a className={classes.link} href="https://www.prestonchild.com/">
              Lincoln Child & Douglas Preston
            </a>
            : Pendergast Series, Gideon Crew Series
          </div>
          <div>
            <a className={classes.link} href="http://www.michaelcrichton.com/">
              Michael Crichton
            </a>
            : Sphere, Congo, Jurassic Park, Andromeda Strain
          </div>
          <div>
            <a className={classes.link} href="https://bewareofmonsters.com/">
              Jeremy Robinson
            </a>
            : Project 731 Series (Kaiju)
          </div>
          <div>
            <a className={classes.link}
              href="https://www.facebook.com/dlgolemon/">
              David Golemon
            </a>
            : The Event Group Series
          </div>
          <div>
            <a className={classes.link} href="http://www.jeffvandermeer.com/">
              Jeff Vandermeer
            </a>
            : The Southern Reach Trilogy
          </div>
          <div>
            <a className={classes.link} href="https://www.warrenfahy.com/">
              Warren Fahy
            </a>
            : Fragment
          </div>
        </div>
      </div>
    );
  }

  getBlurb = () => {
    const {classes} = this.props;

    return (
      <div className={classes.frame}>
        <div className={classes.title}>
          Synopsis
        </div>
        <div className={classes.para}>
          Jake Gentry was a ghost.  Just an unremarkable
          young man leading an unremarkable life until
          the day he accidentally stepped in between time.
          In doing so, he unwittingly pulls back the curtain
          on humanity&apos;s greatest secret and becomes a
          threat to a billion dollar industry that will
          stop at nothing to silence him.
        </div>
        <div className={classes.para}>
          Slowly gathering a rag-tag group of supporters,
          Jake goes toe to toe with the most powerful man
          on earth in a fight for his family, the truth
          of his past and his freedom.  All the while an
          otherworldly beast has been set loose and has
          plans of his own.
        </div>
        <div className={classes.para}>
          Now Jake must decide between his pride, his
          friends and the future of the human race.
        </div>
      </div>
    );
  }

  getBio = () => {

    const {classes} = this.props;

    return (
      <div className={classes.frame}>
        <div className={classes.title}>
          Bio
        </div>
        <div className={classes.para}>
          James Graeson has always been a storyteller.
          Whether it was in school during creative writing
          units, through music and art or making up fantastic
          tales for his children; the idea of capturing the
          imagination of an audience has been a consistent
          lifelong thread.
        </div>
        <div className={classes.para}>
          For some reason that energy never made it to paper… until now.
        </div>
        <br />
        <div>
          Being a fan of historically and scientifically
          based suspense novels, James Graeson hopes to
          enter the genre with a new world and a new voice
          for fans of brilliant writers such as
          James Rollins, Preston and Child, David Golemon,
          Jeremy Robinson, Michael Crichton and Warren Fahy.
        </div>
        <br />
        <div>
          ‘Side Step’ is just the beginning and we hope you
          will follow along as the saga of Jake Gentry comes
          to life.
        </div>
        <br />
        <div>
          Other hobbies/interests include: sound/music
          recording, paleontology, physics/particle physics,
          fine scotch, Godzilla, kayaking and the adventures
          of parenthood.
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object,
  show: PropTypes.bool,
  content: PropTypes.string,
  close: PropTypes.func
};

export default injectStyleSheet(styles)(Content);
