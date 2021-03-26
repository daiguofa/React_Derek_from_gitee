import React from 'react'

function ListItem(props) {
    const value = props.value
    return <li key={value.toString()}>
        {value}
    </li>
}

function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map(number =>
        <ListItem value={number} />
    )
    return <ul>
        {listItems}
    </ul>
}

export default NumberList