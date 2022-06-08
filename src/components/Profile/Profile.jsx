import React from 'react'
import classes from './Profile.module.css'
import { MyPost } from './MyPost/MyPost.jsx'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (prors) => {
  return (
    <div>
        <ProfileInfo />
        <MyPost posts={prors.state.posts} addPost={prors.addPost}/>
    </div>
  )
}
