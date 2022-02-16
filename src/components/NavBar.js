import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from '../images/book_report_logo.png' 

function NavBar({ onChange, onSubmit}) {

  let [searchVis,setSearchVis]= useState(true)

  function handleSearchClick(){
    setSearchVis(!searchVis);
  }
  
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
    <NavLink style={{ marginRight: "10px" }} to="/">
        <img src={logo} alt="Logo" />
    </NavLink>
    <div className="search-container">
      <div
        onSubmit={onSubmit}
        className='form'
        >
        {searchVis? <input 
            type='text' 
            onChange={onChange}
            // className='form-control mt-10' 
            className="search-field"
            placeholder='Search for Books' 
            autoComplete='off'
            cursor='pointer'
            />:''
}
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
              onClick={handleSearchClick}
              className="search-button"
            >
              <img 
              src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"
              />
            </button>
        </div>
    </div>
    </div>
  );
}

export default NavBar;