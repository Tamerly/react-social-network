import React from 'react'
import classes from './Profile.module.css'
import { MyPost } from './MyPost/MyPost.jsx'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText} />
        </div>
    )
}
