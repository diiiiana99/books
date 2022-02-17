import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from '../images/book_report_logo.png' 
import BellLogo from '../images/bell-logo.svg'

function NavBar({ onChange, onSubmit}) {

  let [searchVis,setSearchVis]= useState(true)

  function handleSearchClick(){
    setSearchVis(!searchVis);
  }

  function handleOver(event){
    // document.getElementById('genrecontainer').className=('genre-container')
    document.getElementById('genrecontainer').className=('genre-container')
  }

  function handleOff(){
    console.log(document.getElementById('genrecontainer'))
    document.getElementById('genrecontainer').className=('genre-container hidden')
  }

  
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
    <div className="navigation">
      <div className='nav-container'>

        <NavLink style={{ marginRight: "10px" }} to="/">
            <img 
              src={logo}
              alt="Logo"
              className="website-logo"
              />
        </NavLink>

        <NavLink to="/">
          <div className="nav-link">Home</div>
        </NavLink>

        <div className="nav-link" onMouseOver={handleOver} onMouseOut={handleOff}>
            Browse
          <div id = 'genrecontainer' className='dropdownContent'>
            <NavLink style={{ marginRight: "10px" }} to="/testing1">
                <div>Testing</div>
            </NavLink>
            <NavLink style={{ marginRight: "10px" }} to="/testing2">
                <div>Testing2</div>
            </NavLink>
            <NavLink style={{ marginRight: "10px" }} to="/testing3">
                <div>Testing3</div>
            </NavLink>
          </div>
        </div>

        <NavLink to="/new">
          <div className="nav-link">New Releases</div>
        </NavLink>
        <NavLink to="/favorites">
          <div className="nav-link">Favorites</div>
        </NavLink>
        <NavLink to="/toread">
            <div className="nav-link">To-Read</div>
        </NavLink>

          <div className="nav-search-container">
            <form
              onSubmit={onSubmit}
              className='search-form'
              >
              <input 
                  type='text' 
                  onChange={onChange}
                  className="nav-search-input"
                  placeholder='Titles, Authors, Genres...' 
                  autoComplete='off'
                  cursor='pointer'
                  />
                  <button 
                    // onClick={handleSearchClick} 
                    className="search-button">
                    <img src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"/>
                </button>
              </form>
            </div>
            
        </div>
      </div>
      {/* <div className="spacer"></div> */}
    </div>
  );
}

export default NavBar;