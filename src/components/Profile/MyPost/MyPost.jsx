import React from 'react'
import classes from './MyPost.module.css'
import { Post } from './Post/Post'

export const MyPost = (props) => {

    let postsElement = props.posts
        .map(p => <Post message={p.message} image={p.image} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' })
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text,
        })
    }

    return (
        <div className={classes.box}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>

                {postsElement}

            </div>
        </div>
    )
}
