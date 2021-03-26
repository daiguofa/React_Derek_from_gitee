import React from "react"
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    deleteRow(id, e) {
        console.log("delete row", id, e)
    }

    render() {
        let id = 2;
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
            </div>

        );
    }
}

export default Toggle