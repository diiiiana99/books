import React, { useState, useEffect } from "react";
import axios from "axios";
import BigBookCard from "./BigBookCard";

function NewReleases({books,onReadClick,onFavoriteClick}){

    function displayBigBooks(bookList){
        // let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return bookList.map((book,i)=>{
            return (
                <BigBookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick}/>
                )
            })
    }
  
    let booksToDisplay1 = displayBigBooks(books.slice(0,10));
    let booksToDisplay2 = displayBigBooks(books.slice(10));




    return (
        <React.Fragment>
            <div className="spacer"></div>
            <h1 className="heading">New and Noteworthy</h1>
            <div className="backdrop">
                <div className='book-carousel'> 
                        {booksToDisplay1}
                </div> 
            </div>

            {/* <div className="backdrop">
                <div className='book-carousel'> 
                        {booksToDisplay2}
                </div> 
            </div> */}
            <div className="bot-spacer"></div>
            <div className='spacer-bot'></div>
        </React.Fragment>
)
}

export default NewReleases;