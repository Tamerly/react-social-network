import React from 'react'
// import classes from './Profile.module.css'
import { MyPost } from './MyPost/MyPost.jsx'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
        </div>
    )
}
