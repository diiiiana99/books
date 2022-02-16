import React from 'react';
import { Route, Link } from "react-router-dom";
import SelectedBook from './SelectedBook';

function BookCard({book}){

    return (
        <Link to={`/book/${book.id}`}>
            <div className='book-card'  onMouseOver={() => { console.log('Hovering over book') }}>
                <img 
                src={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`} 
                alt={book.title}/>
                <div className={`book-details hidden`}>
                    <h3>{book.id}</h3>
                    <p>{book.authors}</p>
                </div>
            </div>
        </Link>
    )
}

export default BookCard;


// const match = useRouteMatch();
// {/* <Route path={`${match.url}/:movieId`}>
//     <SelectedBook book={book} />
// </Route> */}