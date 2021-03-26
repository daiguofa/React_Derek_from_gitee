import React from 'react'

function MailBox(props) {
    const unreadMessage = props.unreadMessage;
    return (
        <div>
            {
                unreadMessage.length > 0 &&
                <h2>You have {unreadMessage.length} unread message</h2>
            }
        </div>
    )
}

export default MailBox