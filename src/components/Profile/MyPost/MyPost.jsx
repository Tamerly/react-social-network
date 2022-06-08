import React from 'react'
import classes from './MyPost.module.css'
import { Post } from './Post/Post'

export const MyPost = (props) => {

  {/*posts*/}

  let postsElement = props.posts
    .map(p => <Post message={p.message} image={p.image} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text)
  }
  
  return (
    <div className={classes.box}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={props.addPost}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
      
        { postsElement }

      </div>
    </div>
  )
}
