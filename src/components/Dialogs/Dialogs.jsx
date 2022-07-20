import React from 'react'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message.jsx'
import { DialogItem } from './DialogItem/DialogItem.jsx'
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogs-reducer'

export const Dialogs = (props) => {

    {/* dialogs
        messages */}

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = state.messages
        .map((m) => <Message message={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                { dialogsElements }

            </div>

            <div className={classes.messages}>

                <div>{ messagesElements }</div>
                <div className={classes.inputMessage}>
                    <div >
                        <textarea value={ newMessageBody } 
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}
                        className={classes.textArea}></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
