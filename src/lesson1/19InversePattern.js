import React from 'react'

// 组件提供方
function Input({ defaultValue }) {
    // 反模式
    const [value, setValue] = React.useState(defaultValue);
    React.useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);
    return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// 调用方
function Demo({ defaultValue }) {
    return <Input defaultValue={defaultValue} />;
}

function App() {
    const [tab, setTab] = React.useState(1);
    return (
        <>
            {tab === 1 ? <Demo defaultValue={1} /> : <Demo defaultValue={1} />}
            <button onClick={() => (tab === 1 ? setTab(2) : setTab(1))}>
                切换 Tab
        </button>
        </>
    );
}

export default App