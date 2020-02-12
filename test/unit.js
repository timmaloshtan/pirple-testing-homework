const assert = require('assert');
const {
  INCREMENT,
  DECREMENT,
  RANDOM,
  incrementActionCreator,
  decrementActionCreator,
  randomActionCreator,
  counterReducer,
  palindromeChecker,
} = require('../app/lib');

const unit = {};


unit['incrementActionCreator should create an action of correct type'] = function() {
  const expectedAction = { type: INCREMENT };
  assert.deepEqual(incrementActionCreator(), expectedAction);
};

unit['decrementActionCreator should create an action of correct type'] = function() {
  const expectedAction = { type: DECREMENT };
  assert.deepEqual(decrementActionCreator(), expectedAction);
};
unit['randomActionCreator should create an action of correct type'] = function() {
  const expectedAction = { type: RANDOM };
  assert.deepEqual(randomActionCreator(), expectedAction);
};

unit['counterReducer should return initial state'] = function() {
  const state = counterReducer(undefined, undefined);
  assert.equal(state, 0);
};

unit['counterReducer should increment existing state'] = function() {
  const state = 0;
  const action = incrementActionCreator();
  const newState = counterReducer(state, action);
  assert.equal(newState, 1);
};

unit['counterReducer should decrement existing state'] = function() {
  const state = 0;
  const action = decrementActionCreator();
  const newState = counterReducer(state, action);
  assert.equal(newState, -1);
};

unit['counterReducer should ignore unknown action types'] = function() {
  const state = 0;
  const action = randomActionCreator();
  const newState = counterReducer(state, action);
  assert.equal(newState, 0);
};

unit['palindromeChecker should throw if no argument is passed or argument is not a string'] = function() {
  assert.throws(() => {
    palindromeChecker();
  });
  assert.throws(() => {
    palindromeChecker(1);
  });
  assert.throws(() => {
    palindromeChecker(true);
  });
};

unit['palindromeChecker should return false if argument is not a palindrome'] = function() {
  assert.equal(palindromeChecker('hello'), false);
  assert.equal(palindromeChecker('how are you?'), false);
  assert.equal(palindromeChecker('not a palindrome'), false);
};

unit['palindromeChecker should return true if argument is a palindrome'] = function() {
  assert.ok(palindromeChecker('radar'));
  assert.ok(palindromeChecker('Anna'));
  assert.ok(palindromeChecker('refer'));
  assert.ok(palindromeChecker('Sagas'));
};

module.exports = unit;