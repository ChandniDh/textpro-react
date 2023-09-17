import React, { useState } from 'react'; 

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handlelowClick = ()=>{
        console.log("Lowercase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleOnChange = (event)=>{
        console.log("Handled")
        setText(event.target.value)
    }
    const speak = () => {
      // allows the web pages to read the content available on-page in human speech format. 
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Message copied", "success")
      // The writeText() function returns a Promise that's resolved or rejected depending on whether the passed-in text is copied to the clipboard successfully
    }
    // const clear = ()=>{
    //  let onfocus = "this. value"=" " 
    //  onfocus()
    // }
    const clearText=()=> {
      let newText = ''
      setText(newText)
  }
  const removeExtraSpaces = ()=>{
    // let newText = text.trim()
    // setText(newText)
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
  }
  const convertHtmlToJsx = ()=>{

  }
    const [text, setText] = useState("Enter your name")
  return (
    <>
    <div className='container' style = {{color : props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode==='dark'? 'grey': 'white', color : props.mode==='dark'? 'white': 'black'}} id="myBox" rows="8"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary" onClick={handlelowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
  {/* <button className="btn btn-primary" onClick={repeat}>Check repeating words</button> */}
  <button className="btn btn-primary" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
  <button className="btn btn-primary" onClick={convertHtmlToJsx}>Convert HTML to JSX</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <button type="submit" onClick={handleCopy} className="btn btn-warning mx-2 my-2">Copy Text</button>
  
</div>
    </div>
    <div className='container my-3 ' style = {{color : props.mode==='dark'? 'white': 'black'}}>
    <h1>Text Summary</h1>
    <p>{text.split(" ").length>1?text.split(" ").length-1 : 0} words and {text.length}characters</p>
    <p>{0.008 * text.split(" ").length}Minutes Read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text: "Enter your text in the box to preview here"}</p>
    </div>
    </>
  )
}
