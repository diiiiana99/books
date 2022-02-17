import React from 'react';
import { Route, Link } from "react-router-dom";
import SelectedBook from './SelectedBook';
import axios from 'axios'

const favoriteList = 'http://localhost:4000/favorites'
const toReadList= 'http://localhost:4000/to-read'

function BookCard({book}){

    function handleHoverOver(event){
        // console.log(document.getElementById(book.id))
        document.getElementById(book.id).className=('book-details')

    }

    function handleHoverOut(event){
        // console.log(document.getElementById(book.id))
        document.getElementById(book.id).className=('book-details hidden')

    }

    function handleFavoriteClick(){
        axios.post(favoriteList,book)
    }

    function handleReadClick(){
        console.log('clicked')
    }

    return (
        // <Link to={`/book/${book.id}`}>
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
        // </Link>
    )
}

export default BookCard;


// const match = useRouteMatch();
// {/* <Route path={`${match.url}/:movieId`}>
//     <SelectedBook book={book} />
// </Route> */}