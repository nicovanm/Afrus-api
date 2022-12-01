import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand" href="#">
            <h1 className="fs-3 ubuntu">Rick & Morty <span className="text-primary">Wiki</span></h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsc>
            {`
              button[aria-expanded="false"] > .close{
                display:none;
              }
              button[aria-expanded="true"] > .open{
                display:none;
              }
            `}
          </style>

          <i className="fas fa-bars open fw-bold text-dark"></i>
          <i className="fas fa-times close fw-bold text-dark"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav fs-5">
              <NavLink activeClassName='active' className="nav-link" to='/' >
                Characters
              </NavLink>
              <NavLink className="nav-link" to='/episodes'>
                Episodes
              </NavLink>
              <NavLink className="nav-link" to='/location'>
                Location
              </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
