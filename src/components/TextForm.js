import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("")

    const HandleUpClick = () => {
        // console.log("UpperCase was clicked"),
        let newText = text.toUpperCase();
        setText(newText)
    }

    const HandleDownClick = () => {
        // console.log("UpperCase was clicked"),
        let newText = text.toLowerCase();
        setText(newText)
    }

    const HandleClearClick = () => {
        // console.log("UpperCase was clicked"),
        let newText = '';
        setText(newText)
    }

    const HandleOnChange = (event) => {
        return (
            // console.log("On change"),
            setText(event.target.value)
        )
    }

    return (
        <>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'white'}`} >
                <h1> {props.heading}  </h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control " style={{ backgroundColor: props.mode === 'light' ? 'whitesmoke' : 'lightgrey' }} value={text} onChange={HandleOnChange} id="myBOx" rows="8" placeholder='Enter your text here'></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={HandleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={HandleDownClick} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={HandleClearClick} >Clear Text</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Your Text Summary</h2>
                <p> <strong> {text.length === 0 ? 0 : text.split(' ').length} </strong> words and <strong>{text.length} </strong> characters</p>
                <p>{text.length === 0 ? 0 : 0.008 * text.split(' ').length} minutes to read your text</p>
                <h3>Preview</h3>
                <p> {text.length > 0 ? text : "Enter text above to preview"} </p>
            </div>
        </>
    )
}
