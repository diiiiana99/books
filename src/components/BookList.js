import React from "react";

function BookList( {books} ) {
      // update books to display 
    let booksToDisplay = books.map((book)=>{
        // return <BookCard book={book} />
        return <img className='book-card' src={book.volumeInfo.imageLinks === undefined
        ? ""
        : `${book.volumeInfo.imageLinks.thumbnail}`
        } alt={book.title}/>
        })
    return(
        <div className='book-carousel'> 
                {booksToDisplay}
        </div>    
    );
}

export default BookList;