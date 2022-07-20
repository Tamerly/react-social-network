import { createStore, combineReducers } from 'redux'
import dialogReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReduser from './sidebar-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReduser,
})

let store = createStore(reducers);

export default store;