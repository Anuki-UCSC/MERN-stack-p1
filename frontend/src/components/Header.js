import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header(){

    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Router>
            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
            <Link className="nav-link" href="./add">Create Student</Link>
            <Link className="nav-link" href="#">All Students</Link>
            <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Update Student</Link>

            </Router>
        </div>
        </div>
    </div>
    </nav>
    )

    
}


export default Header;
