import React from 'react';
import PropTypes from 'prop-types';

import isNil from 'lodash/isNil';

class AnimatedElement extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      classList: []
    };
  }

  componentDidMount() {
    this.beginAnimation();
  }

  componentWillUnmount() {
    this.state.timeouts.forEach( (timeout) => {
      clearTimeout(timeout);
    });
  }

  beginAnimation () {
    const timeoutSet = this.props.states
      .map( (state) => {
        return setTimeout( this.animate(state), state.delay);
      });

    this.setState({
      ...this.state,
      timeouts: timeoutSet
    });
  }

  animate = (state) => {

    return () => {
      const copy = this.state.classList;
      copy.push(state.clazz);

      this.fixTransition(state);

      this.setState({
        ...this.state,
        classList: copy
      });
    };
  }

  fixTransition = (state) => {

    if (isNil(this.me)) {
      return;
    }

    const newString = `${state.property} ${state.duration}ms ${state.mode}`;
    const currentTransition = isNil(this.me.style.transition) ?
      ''
      :
      this.me.style.transition;

    const properties = currentTransition.split(',')
      .filter( (elem) => {
        return elem.trim() !== '';
      });

    if (properties.length === 0) {
      this.me.style.transition = newString;
      return;
    }

    const matchingProperty = properties.find( (property) => {
      if (property.split(' ')[0] === state.property) {
        property = newString;
        return true;
      }

      return false;
    });

    if (isNil(matchingProperty)) {
      this.me.style.transition = `${currentTransition}, ${newString}`;
    }
  }

  setMe = (elem) => {
    this.me = elem;
  }

  render() {

    return (
      <div 
        ref={this.setMe}
        className={`${this.props.clazz} ${this.state.classList.join(' ')}`}
      >
        {this.props.children}
      </div>
    );
  }

}

AnimatedElement.propTypes = {
  states: PropTypes.arrayOf(PropTypes.shape({
    delay: PropTypes.number,
    clazz: PropTypes.string
  })),
  clazz: PropTypes.string,
  children: PropTypes.any
};

export default AnimatedElement;