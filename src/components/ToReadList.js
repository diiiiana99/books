import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function ToReadList({books,onReadClick,onFavoriteClick}){

    function displayBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return newBookList.map((book,i)=>{
            return (
                <BookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick}/>
                )
            })
    }

    function bookCarousel(header,bookList) {
        if (bookList.length >=35){
            return (
                <React.Fragment>
                    <h1 className="heading">{header}</h1>
                    <div className="backdrop">
                    <div className='book-carousel'> 
                            {bookList.slice(0,10)}
                    </div> 
                    </div>

                    <h1 className="heading">{header}</h1>
                    <div className="backdrop">
                    <div className='book-carousel'> 
                            {bookList.slice(10,20)}
                    </div> 
                    </div>

                    <h1 className="heading">{header}</h1>
                    <div className="backdrop">
                    <div className='book-carousel'> 
                            {bookList.slice(20,30)}
                    </div> 
                    </div>

                    <h1 className="heading">{header}</h1>
                    <div className="backdrop">
                    <div className='book-carousel'> 
                            {bookList.slice(30,)}
                    </div> 
                    </div>


                </React.Fragment>)
        } else if (bookList.length >=25){
            return (
                <React.Fragment>
                    <h1 className="heading">{header}</h1>
                    <div className="backdrop">
                    <div className='book-carousel'> 
                            {bookList.slice(0,10)}
                    </div> 
                    </div>

                    <div className="spacer-books"></div>
                    <div className="backdrop">
                    <div className='book-carousel'> 
                            {bookList.slice(10,20)}
                    </div> 
                    </div>

                    <div className="spacer-books"></div>
                    <div className="backdrop">
                    <div className='book-carousel'> 
                            {bookList.slice(20,)}
                    </div> 
                    </div>

                </React.Fragment>)
        } else if (bookList.length>=15){
            return (
                <React.Fragment>
                    <h1 className="heading">{header}</h1>
                    <div className="backdrop">
                    <div className='book-carousel'> 
                            {bookList.slice(0,10)}
                    </div> 
                    </div>

                    <div className="spacer-books"></div>
                    <div className="backdrop">
                    <div className='book-carousel'> 
                            {bookList.slice(10,)}
                    </div> 
                    </div>
                </React.Fragment>)
        }else {
        return (
            <React.Fragment>
                <h1 className="heading">{header}</h1>
                <div className="backdrop">
                <div className='book-carousel'> 
                        {bookList}
                </div> 
                </div>
            </React.Fragment>
        )}
    }


    let booksToDisplay = displayBooks(books);



    return (
        <React.Fragment>

            <div className="spacer"></div>

            {bookCarousel("Your Reading List",booksToDisplay)}

            <div className="bot-spacer"></div>
        </React.Fragment>
    )
}

export default ToReadList;