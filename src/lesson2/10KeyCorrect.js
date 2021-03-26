import React from 'react'

function ListItem(props) {
    const value = props.value
    return <li>
        {value}
    </li>
}

function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map(number =>
        <ListItem key={number} value={number} />
    )
    // return <ul>
    //     {listItems}
    // </ul>
    return <ul>
        {numbers.map((number) =>
            <ListItem key={number} value={number} />)
        }
    </ul>
}

export default NumberList