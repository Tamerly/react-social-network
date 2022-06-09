import React from 'react';
import ReactDOM from 'react-dom/client';
import {state, addPost} from './redux/state'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'

let root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {

    root.render(
        <BrowserRouter>
            {/*<App />*/}
            <App state={state} addPost={addPost} />
        </BrowserRouter>
    );
}