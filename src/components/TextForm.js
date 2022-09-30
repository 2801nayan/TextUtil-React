import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert';

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here..");
  let newText;
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const convertUppercase = ()=>{
    newText = text.toUpperCase();
    setText(newText);
    if(text.length===0){  
      props.showAlert("Please enter some text to convert into upper case","warning");
    }else{
      props.showAlert("Converted to Uppercase","success");   
    }
  }
  const convertLowercase = ()=>{
    newText = text.toLowerCase();
    setText(newText);
    if(text.length===0){  
      props.showAlert("Please enter some text to convert into lower case","warning");
    }else{
      props.showAlert("Converted to Lower case","success");   
    }
  }
  const convertCamelCase = ()=>{
    newText = text.toLowerCase();
    setText(newText.split(" ").reduce((s,c)=> s + (c.charAt(0).toUpperCase()+ c.slice(1) )));
    if(text.length===0){  
      props.showAlert("Please enter some text to convert into camel case","warning");
    }else{
      props.showAlert("Converted to camel case","success");   
    }
  }
  const clearText = () => {
    newText = '';
    setText(newText);
    if(text.length===0){  
      props.showAlert("There is nothing to clear","warning");
    }else{
      props.showAlert("All text cleared","success");   
    }
  }
  const copyText = () => {
    let copiedText = document.getElementById("myBox");
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
    if(text.length===0){  
      props.showAlert("Please enter some text to copy","warning");
    }else{
      props.showAlert("Text copied to clipboard","success");   
    }
  }
  const extraSpace = () => {
    newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text.length===0){  
      props.showAlert("Please enter some text to remove extra space","warning");
    }else{
      props.showAlert("Extra space removed","success");   
    }
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
          <Alert/>
          <div className="mb-3">
              <label htmlFor="myBox" className="form-label"></label>
              <textarea className={`form-control`} style={{backgroundColor: props.mode==='dark'? 'black':'white',color: props.mode==='dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
              <button className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={convertUppercase}>convert to upper case</button>
              <button className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={convertLowercase}>convert to lower case</button>
              <button className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={convertCamelCase}>convert to camel case</button>
              <button className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={extraSpace}>remove extra space</button>
              <button className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={copyText}>copy all text</button>
              <button className={`btn btn-${props.mode==="dark"? 'light' : 'dark'} mx-3 my-3`} onClick={clearText}>clear all text</button>
          </div>
      </div>
      <div className={`container`} style={{color: props.mode==='dark'? 'white':'black'}}>
        <h2>Text summary</h2>        
        <p>{text.length===0 ? text.split(" ").length-1 : text.split(" ").length} Words and {text.length} Characters</p>

        <h2>Time</h2>
        <p>{text.length===0 ? 0 : (0.008 * text.split(" ").length)} Minutes would be taken to read text.</p>
        
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter some text on above textbox to preview it here"}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
