module.exports =
  /**
   * @function
   * @template T
   * @param {Promise<T>} promise
   * @returns {Promise<{data: T}>}
   */
  function promiseWrapper(promise) {
    return promise.then((data) => ({
      data,
    }));
  };
