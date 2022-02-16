import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from '../images/book_report_logo.png' 

function NavBar({ onChange, onSubmit}) {
  
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
    <div class="search-container">
      <form 
        onSubmit={onSubmit}
        className='form'
        >
            <input 
            type='text' 
            onChange={onChange}
            // className='form-control mt-10' 
            className="search-field"
            placeholder='Search for Books' 
            autoComplete='off'
            cursor='pointer'
            />
            <button 
              type="submit" 
              class="search-button"
            >
              <img 
              src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"
              />
            </button>
        </form>
    </div>
    </div>
  );
}

export default NavBar;