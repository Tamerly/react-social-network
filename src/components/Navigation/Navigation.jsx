import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

export const Navigation = () => {
  return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                
            </div>
        </nav>
  )
}
