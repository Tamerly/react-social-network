import React from 'react'
import classes from './Post.module.css'

export const Post = (props) => {
  return (
    <div className={classes.item}>
            <img src={props.image} alt='ddd'/>
            <div>
            {props.message}
            </div>
    </div>
  )
}
