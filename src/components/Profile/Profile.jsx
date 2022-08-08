import React from 'react'
// import classes from './Profile.module.css'
import { MyPostContainer } from './MyPost/MyPostContainer.jsx'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostContainer
                store={ props.store } />
        </div>
    )
}
