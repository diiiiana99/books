import React from "react";

function BookCard({ book}) {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={book.id}
      >
        <div className="image">
          <img alt={book.title} src={book.volumeInfo.imageLinks === undefined
      ? ""
      : `${book.volumeInfo.imageLinks.thumbnail}`}/>
        </div>
        <div className="content">
          <div className="header">
            {book.title}
          </div>
          <div className="meta text-wrap">
            <small>{book.subtitle}</small>
          </div>
        </div>
        <div className="extra content">
        </div>
      </div>
    </div>
  );
}

export default BookCard;