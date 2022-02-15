import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

function BookList( {books} ) {
    // update books to display 
    let filteredBooks = books.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay = filteredBooks.map((book)=>{
        return (
            <div className='book-card' key={book.id}>
                {/* Create a Route to the /book/:bookID page for each book */}
                <Link to={`/book/${book.id}`}>
                    {/* Display Thumbnail for each book */}
                    <img 
                    src={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`} 
                    alt={book.title}/>
                </Link>
            </div>
        )
    })
    
    return(
        <div className='book-carousel'> 
                {/* {booksToDisplay} */}
                {console.log(booksToDisplay)}
        </div>    
    );
}

export default BookList;