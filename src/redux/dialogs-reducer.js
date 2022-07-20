const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {
            id: 1,
            message: 'Страшная трагедия вынуждает психолога-провокатора вернуться к практике. Напряженная драма с Максимом Матвеевым'
        },
        {
            id: 2,
            message: 'Американский спецотряд жестоко расправляется с нацистами. Пародия на военные фильмы от Квентина Тарантино'
        },
        {
            id: 3,
            message: 'Мальчик и дельфин жили в море как братья, пока не появился злой Осьминог. Трогательная история о поиске дома'
        },
        {
            id: 4,
            message: 'В корейском городке ищут серийного убийцу. Триллер режиссера «Паразитов», основанный на реальных событиях'
        },
        {
            id: 5,
            message: 'Врач в Элисте сталкивается с первой вспышкой ВИЧ в СССР. Сериал про людей перед лицом неизвестности'
        },
        {
            id: 6,
            message: 'Сын прокурора влюбляется в дочь сурового вора в законе. Криминальная комедия о белорусских Ромео и Джульетте'
        },
    ],
    dialogs: [
        { id: 1, name: 'Victor', },
        { id: 2, name: 'Alexey', },
        { id: 3, name: 'Marina', },
        { id: 4, name: 'Julia', },
        { id: 5, name: 'Alexandra', },
        { id: 6, name: 'Sabina', },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    }
    else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({
            id: Date.now,
            message: body})
    };
    
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;