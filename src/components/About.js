import React from 'react'

export default function about(props) {
  return (
    <>
      <div className={`container-fluid`} style={{color: props.mode==='dark'? 'white':'black'}}>
          <h2>About TextUtils</h2>
          <p>TextUtil is very userfriendly text manipulation and analyzer tool which makes your some tasks easy.</p>
          <h2>Features of TextUtils</h2>
          <ul>
            <li>Theme - dark or light</li>
            <li>Copy all text</li>
            <li>Clear all text</li>
            <li>Upper case convert</li>
            <li>Lower case convert</li>
            <li>Camel case convert</li>
            <li>Remove Extra Spaces</li>  
            <li>Text Preview</li>
            <li>Time to read text</li>
            <li>word and character counter</li>
          </ul>
          <h5>So as seen above that all are the features of TextUtils which will help you to make your some works easy like converting into specific case copy directly all texts and etc.</h5>
      </div>
    </>
  )
}
