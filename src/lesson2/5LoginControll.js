import React from 'react'
import Greeting from "./3ConditionRender"
function LoginButton(props) {
    return <button onClick={props.onClick}>
        Login
    </button>
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>
        Logot
</button>
}

class LoginControll extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = { isLoggedIn: false }
    }

    handleLogout() {
        this.setState({ isLoggedIn: false })
    }

    handleLogin() {
        this.setState({ isLoggedIn: true })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button
        if (isLoggedIn) {
            button = <LoginButton onClick={this.handleLogout} />
        } else {
            button = <LogoutButton onClick={this.handleLogin} />
        }
        return <>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ?
                <LoginButton onClick={this.handleLogout} /> : <LogoutButton onClick={this.handleLogin} />}
        </>
    }
}


export default LoginControll
