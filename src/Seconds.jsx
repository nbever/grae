import React from 'react';
import PropTypes from 'prop-types';

class Seconds extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      seconds: (new Date()).getSeconds(),
      width: 200,
      height: 200
    };
  }

  componentDidMount() {
    setTimeout(this.setSeconds, 1000);
  }

  setSeconds = () => {
    this.setState({
      ...this.state,
      seconds: (new Date()).getSeconds()
    });

    setTimeout(this.setSeconds, 1000);
  }

  render () {

    const amount = this.state.seconds * 6;

    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        viewBox="-100 -100 200 200"
      >
        <path
          strokeWidth={2}
          stroke="#ffffff"
          opacity="0.46"
          d="M 0,0 l0,-100"
          transform={`rotate(${amount})`}
        />
      </svg>
    );
  }
}

Seconds.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Seconds;
