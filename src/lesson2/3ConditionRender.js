import React from 'react'

function UserGreeting(props) {
    return <h1>Welcome</h1>
}

function GuestGreeting(props) {
    return <h1>Please Sign Up</h1>
}


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

export default Greeting