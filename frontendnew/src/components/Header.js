import React from "react";
import {
    Link
  } from "react-router-dom";

function Header(){

    return(
<div class="shadow p-3 mb-5 bg-body rounded">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    
                    <Link className="nav-link active" aria-current="page" to="/">All Students</Link>
                    <Link className="nav-link" to="/add">Add Student</Link>
                    <Link className="nav-link" to="/edit/:id">Update Students</Link>
                 
                    
                </div>
                </div>
            </div>
            </nav>
    </div>
    )

    
}


export default Header;
