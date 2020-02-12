exports.isPromise = value => (
  value != null && typeof value.then === 'function'
);

exports.ensureResolved = value => (
  exports.isPromise(value) ? value : Promise.resolve(value)
);

exports.ensureRejected = value => (
  exports.isPromise(value) ? value : Promise.reject(value)
);

exports.ensureAsync = fn => (...args) => {
  try {
    return exports.ensureResolved(fn(...args));
  } catch (err) {
    return exports.ensureRejected(err);
  }
};