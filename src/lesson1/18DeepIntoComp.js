import React from 'react'

// 组件提供方
function Input({ defaultValue }) {
    const [value, setValue] = React.useState(defaultValue)
    return <input value={value} onChange={e => setValue(e.target.value)} />
}

// 调用方
export function Demo() {
    return <Input defaultValue={1} />
}

// 组件提供方
function Input2({ value, onChange }) {
    return <input value={value} onChange={onChange} />
}

// 调用方
export function DemoControlled() {
    const [value, setValue] = React.useState(1)
    return <Input2 value={value} onChange={e => setValue(e.target.value)} />
}