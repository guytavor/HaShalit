import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './components/App';

try {
    window.scrollTo(0,1);
} catch (e) {}

ReactDOM.render(<App />, document.getElementById('root'));
