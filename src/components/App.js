import React from 'react';
import { Provider } from 'react-redux';
import Stage from './Stage/Stage';
import createStore from '../store/createStore';

export default function App() {
    return (
        <Provider store={createStore()}>
            <Stage />
        </Provider>
    );
}