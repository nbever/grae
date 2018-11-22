class AnimatedState {

  constructor(className, property, duration = 200, delay = 0, mode = 'linear') {
    this._className = className;
    this._delay = delay;
    this._duration = duration;
    this._mode = mode;
    this._property = property;
  }

  get clazz() { return this._className; }
  get delay() { return this._delay; }
  get duration() {return this._duration; }
  get mode() { return this._mode; }
  get property() { return this._property; }
}

export default AnimatedState;