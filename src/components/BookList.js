import { ConstructionOutlined } from "@mui/icons-material";
import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

function BookList( {books} ) {
    // update books to display 
    let filteredBooks = books.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay = filteredBooks.map((book, i)=>{
        return (
            <div className='book-card' key={book.id} onMouseOver={() => { console.log('Hovering over book', i+1)}}>
                {/* Create a Route to the /book/:bookID page for each book */}
                <Link to={`/book/${book.id}`}>
                    {/* Display Thumbnail for each book */}
                    <img 
                    src={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`} 
                    alt={book.title}/>
                    <div className={`book-details-${i} hidden`}>
                        <h3>Anastasia Lucas</h3>
                        <p>4.5 out of 5 stars</p>
                    </div>
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