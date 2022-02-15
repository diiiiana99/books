import { ConstructionOutlined } from "@mui/icons-material";
import React from "react";
import BookCard from "./BookCard";

function BookList( {books} ) {
      // update books to display 
    let filteredBooks = books.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay = filteredBooks.map((book, i)=>{
        return (
            <div className='book-card'  onMouseOver={() => { console.log('Hovering over book', i+1)}}>
                <img 
                src={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`} 
                alt={book.title}/>
                <div className={`book-details-${i} hidden`}>
                    <h3>Anastasia Lucas</h3>
                    <p>4.5 out of 5 stars</p>
                </div>
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