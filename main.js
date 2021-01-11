const promiseWrapperCjs = require('./promise-wrapper-cjs');
const { default: promiseWrapperEsm } = require('./promise-wrapper-esm');

const resultCjs = promiseWrapperCjs(Promise.resolve(1)); // ❌ Promise<{data: T}>
const resultEsm = promiseWrapperEsm(Promise.resolve(1)); // ✅ Promise<{data: number}>
