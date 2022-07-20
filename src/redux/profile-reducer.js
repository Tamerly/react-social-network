const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {posts: [
    {
        id: 1,
        message: 'Hi how are you',
        image: 'https://avatars.mds.yandex.net/get-ott/1531675/2a0000017ef7cee709672ba3ceec2e044f7c/375x234'
        },
    {
        id: 2,
        message: 'It`s my first post',
        image: 'https://avatars.mds.yandex.net/get-ott/1652588/2a0000017fcecc915312eebe6f465c757608/375x234'
        },
    {
        id: 3, message: 'Another text', image: 'https://i.ytimg.com/vi/6N6vMwi8_LM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6UFBrpR3mSPSPTbhcCtwxWfTUzw'
        },
    {
        id: 4,
        message: 'Another text Another',
        image: 'https://i.ytimg.com/vi/sOsAdjE1DmU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjTxMYAzP3fLr7n_0SS-kVjWR_Tg'
        },
],
    newPostText: 'Pusey.io'}

const profileReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                image: 'https://avatars.mds.yandex.net/get-ott/1531675/2a0000017ef7cee709672ba3ceec2e044f7c/375x234'
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer;