function TextInput ({setInputState}) {

    function handleChange(event) {
        setInputState(event.target.value)
        console.log(event.target.value)
    }

    return <input onChange={handleChange} placeholder="Text Input"></input>
}

export default TextInput