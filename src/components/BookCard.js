import React from 'react';

function BookCard({book}){
    return (
        <div className='book-card'  onMouseOver={() => { console.log('Hovering over book') }}>
            <img 
            src={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`} 
            alt={book.title}/>
            <div className={`book-details hidden`}>
                <h3>{book.id}</h3>
                <p>{book.authors}</p>
            </div>
        </div>
    )
}

export default BookCard;