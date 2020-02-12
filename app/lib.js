const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RANDOM = 'RANDOM';


const incrementActionCreator = () => ({
  type: INCREMENT,
});

const decrementActionCreator = () => ({
  type: DECREMENT,
});

const randomActionCreator = () => ({
  type: RANDOM,
});

const counterReducer = (state = 0, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    default:
      return state;
  }
};

const palindromeChecker = string => {
  if (typeof string !== 'string') {
    throw new Error('palindromeChecker expects a string');
  }

  if (string.length <= 1) {
    return true;
  }

  return string[0].toLowerCase() === string[string.length - 1].toLowerCase()
    ? palindromeChecker(string.slice(1, -1))
    : false;
};

module.exports = {
  INCREMENT,
  DECREMENT,
  RANDOM,
  incrementActionCreator,
  decrementActionCreator,
  randomActionCreator,
  counterReducer,
  palindromeChecker,
};
