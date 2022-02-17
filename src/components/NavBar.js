import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from '../images/book_report_logo.png' 

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
    <div className='nav-bar'>
      <NavLink style={{ marginRight: "10px" }} to="/">
          <img src={logo} alt="Logo" />
      </NavLink>
      <div onMouseOver={handleOver} onMouseOut={handleOff}>
          Browse
      <div id = 'genrecontainer' className={'genre-container hidden'}>
        <NavLink style={{ marginRight: "10px" }} to="/browse">
            <div>Testing</div>
        </NavLink>
        <NavLink style={{ marginRight: "10px" }} to="/browse">
            <div>Testing2</div>
        </NavLink>
        <NavLink style={{ marginRight: "10px" }} to="/browse">
            <div>Testing3</div>
        </NavLink>
      </div>
      </div>
      <NavLink to="/favorites">
        <div>Favorites</div>
      </NavLink>
      <NavLink to="/toread">
          <div>To-Read</div>
      </NavLink>
      <div className="search-container">
        <form
          onSubmit={onSubmit}
          className='search-form'
          >
          {searchVis? <input 
              type='text' 
              onChange={onChange}
              // className='form-control mt-10' 
              className="search-field"
              placeholder='Search for Titles, Authors, Genres' 
              autoComplete='off'
              cursor='pointer'
              />:''}

              {/* <input 
              id='searchinput'
              type='text' 
              onChange={onChange}
              // className='form-control mt-10' 
              className="search-field"
              placeholder='Search for Books' 
              autoComplete='off'
              cursor='pointer'
              /> */}
              <button 
                // onClick={handleSearchClick} 
                className="search-button">
                <img src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"/>
              </button>
          </form>
        </div>
    </div>
    </div>
  );
}

export default NavBar;