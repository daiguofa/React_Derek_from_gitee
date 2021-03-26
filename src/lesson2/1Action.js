import React from 'react'
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        alert("this link is clicked")
    }

    return (
        <a href="https://baidu.com" onClick={handleClick}>Click me</a>
    )
}

export default ActionLink