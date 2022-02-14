import React, { useState } from "react";
import axios from "axios";

function Header({ setBooks, apiKey2 }) {
    //search function
    const [search,setSearch]=useState('');

    function handleChange(event){
        setSearch(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        let burl= `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&key=${apiKey2}&maxResults=40`
        axios.get(burl)
        .then(r=> {
            setBooks(r.data.items)
        })
    }

    return (
        <div>
            <h1>Book-Report</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input 
                    type='text' onChange={handleChange}
                    className='form-control mt-10' 
                    placeholder='Search for Books' 
                    autoComplete='off' />
                </div>
                <button 
                type='submit' 
                className='btn btn-danger'  
                >Search</button>
            </form>
        </div>
    )
}

export default Header;