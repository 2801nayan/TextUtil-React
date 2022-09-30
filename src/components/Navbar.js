import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <abbr className={`navbar-brand text-${props.mode==='light' ? 'dark' : 'light'}`} href="/" >{props.title}</abbr> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <abbr className={`navbar-brand text-${props.mode==='light' ? 'dark' : 'light'}`} aria-current="page"><b>{props.title}</b></abbr>
              </li>
              {/* <li className="nav-item">
                <a className={`nav-link text-${props.mode==='light' ? 'dark' : 'light'}`} href="/About">{props.aboutTitle}</a>
              </li> */}
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
              <input type="checkbox" className="form-check-input" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
              <label htmlFor="flexSwitchCheckDefault" className="form-check-label">{props.btnText}</label>
            </div>
          </div>
        </div>
    </nav>
    </>
  )
} 

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    homeTitle: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Title",
    homeTitle: "Home",
    aboutTitle: "About"
}