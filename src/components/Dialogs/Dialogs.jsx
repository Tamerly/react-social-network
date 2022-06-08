import React from 'react'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message.jsx'
import { DialogItem } from './DialogItem/DialogItem.jsx'

export const Dialogs = (props) => {

    {/* dialogs
        messages */}

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages
        .map((m) => <Message message={m.message}/>);
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                { dialogsElements }

            </div>

            <div className={classes.messages}>

                { messagesElements }

            </div>
        </div>
    );
}
