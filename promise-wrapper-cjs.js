/**
 * @function
 * @template T
 * @param {Promise<T>} promise
 * @returns {Promise<{data: T}>}
 */
module.exports = function promiseWrapper(promise) {
  return promise.then((data) => ({
    data,
  }));
};
