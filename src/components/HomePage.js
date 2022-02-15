import React, {useState,useEffect} from "react";
import axios from "axios";
import BookCard from "./BookCard";

let localZebras = 'http://localhost:4000/zebras'

function HomePage( {books, setBooks, apiKey} ) {

    // initial book render
    useEffect(()=>{
        axios.get(localZebras)
        .then(r=> {
        setBooks(r.data)
        })
        console.log(books)
    }, [])

    // update books to display 
    let filteredBooks = books.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay = filteredBooks.map((book, i)=>{
        return (
            <BookCard book={book} key={i}/>
            )
        })

    return(
        <React.Fragment>
            <h1>Best Sellers</h1>
            <div className='book-carousel'> 
                    {booksToDisplay}
            </div> 
            <h1>Trending Authors</h1>
            <div className='book-carousel'> 
                    {booksToDisplay}
            </div> 
            <h1>Classics</h1>
            <div className='book-carousel'> 
                    {booksToDisplay}
            </div> 
        </React.Fragment>
    );
}

export default HomePage;