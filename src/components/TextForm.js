import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here..");
  let newText;
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const convertUppercase = ()=>{
    newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");   
  }
  const convertLowercase = ()=>{
    newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case","success");   
  }
  const convertCamelCase = ()=>{
    newText = text.toLowerCase();
    setText(newText.split(" ").reduce((s,c)=> s + (c.charAt(0).toUpperCase()+ c.slice(1) )));
    props.showAlert("Converted to camel case","success");   
  }
  const clearText = () => {
    newText = '';
    setText(newText);
    props.showAlert("All text cleared","success");   
  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard","success");
  }
  const extraSpace = () => {
    newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed","success"); 
  }

  // const [myStyle, setmyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })
  // const [btntext, setBtnText] = useState("dark mode");

  // const toggleMode = ()=>{
  //   if(myStyle.backgroundColor === 'white'){
  //     setmyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',

  //     })
  //     setBtnText("light mode")
      
  //   }
  //   else{
  //     setmyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })        
  //     setBtnText("dark mode")
  //   }
  // }

  return (
    <>
      <div className={`container`} style={{color: props.mode==='dark'? 'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <label htmlFor="myBox" className="form-label"></label>
              <textarea className={`form-control`} style={{backgroundColor: props.mode==='dark'? 'black':'white',color: props.mode==='dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
              <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={convertUppercase}>convert to upper case</button>
              <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={convertLowercase}>convert to lower case</button>
              <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={convertCamelCase}>convert to camel case</button>
              <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={extraSpace}>remove extra space</button>
              <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={copyText}>copy all text</button>
              <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={clearText}>clear all text</button>
          </div>
      </div>
      <div className={`container`} style={{color: props.mode==='dark'? 'white':'black'}}>
        <h2>Text summary</h2>        
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</p>

        <h2>Time</h2>
        <p>{text.length===0 ? 0 : (0.008 * text.split(" ").length)} Minutes would be taken to read text.</p>
        
        <h2>Preview</h2>
        <p>{text.length>0? text : "Nothing to preview"}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
