import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function ToReadList({books,onReadClick,onFavoriteClick}){
    let readUrl= 'http://localhost:4000/to-read'

    function displayBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return newBookList.map((book,i)=>{
            return (
                <BookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick}/>
                )
            })
    }
  
    let booksToDisplay = displayBooks(books);



    return (
        <React.Fragment>
            <h1>Books To Read</h1>
            <p>Testing</p>
            <div className='book-carousel'> 
                    {booksToDisplay}
            </div> 
        </React.Fragment>
)
}

export default ToReadList;