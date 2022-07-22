import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Home</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/music">Music inventory</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports">Sports inventory</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tech">Tech inventory</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactUs">Contact Us</Link>
          </li>
          
        </ul>
        {/* <label htmlFor="exampleColorInput" className="form-label">Color picker</label>
        <input type="color" className="form-control form-control-color" id="exampleColorInput" defaultValue="#563d7c" title="Choose your color"></input> */}
      </div>
    </div>
  </nav>
  )
}
