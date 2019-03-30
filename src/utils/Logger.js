import { getQueryParam } from './common';

const isDebug = getQueryParam('debug') === 'true';

let _log = () => {};

if (process.env.NODE_ENV === 'development' && !isDebug) {
    _log = function (...args) {
        console.log(...args);
    }
}

export const log = _log;
export const err = (...args) => {
    console.error(...args);
};
