import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
        //todo
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        console.log(e)
        this.setState({ value: e.target.value })
    }
    handleSubmit(e) {
        alert("Name is submiteted" + this.state.value)
        e.preventDefault()
    }

    render() {
        let { value } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                     <input type="text" value={value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}


export default NameForm