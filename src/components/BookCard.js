import React from 'react';
import { Route, Link } from "react-router-dom";
import SelectedBook from './SelectedBook';
import axios from 'axios'

function BookCard({book,onReadClick,onFavoriteClick}){

    function handleHoverOver(event){
        // console.log(document.getElementById(book.id))
        document.getElementById(book.id).className=('book-details')

    }

    function handleHoverOut(event){
        // console.log(document.getElementById(book.id))
        document.getElementById(book.id).className=('book-details hidden')

    }

    function handleFavoriteClick(){
        onFavoriteClick(book)
    }

    function handleReadClick(){
        onReadClick(book)
    }

    return (
            <div className='book-card'  onMouseOver={handleHoverOver} onMouseOut={handleHoverOut}>
                <img 
                src={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`} 
                alt={book.volumeInfo.title}/>
                <div id={book.id} className={`book-details hidden`}>
                    <p>{book.volumeInfo.title}</p>
                    <p>{book.volumeInfo.authors}</p>
                    <button onClick={handleFavoriteClick}>❤️</button>
                    <button onClick={handleReadClick}>👁</button>
                </div>
            </div>
    )
}

export default BookCard;