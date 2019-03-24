let _log = () => {};

if (process.env.NODE_ENV === 'development') {
    _log = function (...args) {
        console.log(...args);
    }
}

export const log = _log;
export const err = console.error.bind(console);
