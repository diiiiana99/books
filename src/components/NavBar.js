import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function NavBar({ onChange, onSubmit}) {
  
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
    <h1>Book-Report</h1>
    <NavLink style={{ marginRight: "10px" }} to="/">
      Home
    </NavLink>
    <form onSubmit={onSubmit}>
        <div className='form-group'>
            <input 
            type='text' onChange={onChange}
            className='form-control mt-10' 
            placeholder='Search for Books' 
            autoComplete='off' />
        </div>

    </form>
    </div>
  );
}

export default NavBar;