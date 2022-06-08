import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { state, addPost } from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/*<App />*/}
    <App state={state} addPost={addPost}/>
  </BrowserRouter>
);

