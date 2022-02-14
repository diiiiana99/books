import React from "react";
import BookCard from "./BookCard";

function BookList( {books} ) {
      // update books to display 
    let filteredBooks = books.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay = filteredBooks.map((book)=>{
        return (
            <div className='book-card' >
                <img 
                src={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`} 
                alt={book.title}/>
            </div>
        )

        })

    
    return(
        <div className='book-carousel'> 
                {booksToDisplay}
        </div>    
    );
}

export default BookList;