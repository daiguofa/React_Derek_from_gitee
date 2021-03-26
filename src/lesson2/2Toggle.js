import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }
    deleRow(id, e) {
        console.log(id, e)
    }

    render() {
        let id = 2
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={(e) => this.deleRow(id, e)}>Delete Row</button>
                <button onClick={this.deleRow.bind(this, id)}>Delete Row with this</button>
            </div>
        )
    }
}

export default Toggle