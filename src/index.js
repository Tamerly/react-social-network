import { addPost, state, updateNewPostText } from './redux/state.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import { subscribe} from './redux/state.js'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(state, addPost, updateNewPostText)

subscribe(rerenderEntireTree)
