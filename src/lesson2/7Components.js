import React from 'react'

function Components() {
    const numbers = [1, 2, 3, 4]
    const listItems = numbers.map((n) =>
        <li>{n} </li>)
    return <ul>
        {listItems}
    </ul>
}

export default Components

