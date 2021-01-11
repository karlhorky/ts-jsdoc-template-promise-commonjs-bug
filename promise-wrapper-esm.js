/**
 * @function
 * @template T
 * @param {Promise<T>} promise
 * @returns {Promise<{data: T}>}
 */
export default function promiseWrapper(promise) {
  return promise.then((data) => ({
    data,
  }));
}
