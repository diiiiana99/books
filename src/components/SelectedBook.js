import React, { useState } from "react";
import { useParams } from "react-router-dom";

function SelectedBook({ books }) {
    // call useParams to access the `params` from the url: the dynamic portion of our /book/:bookId path
    const params = useParams();
    console.log("books array of objects: " + books)


    const [ selectedBook, setSelectedBook ] = useState(books.find(book => book.id === params.bookId));

    // const match = useRouteMatch();
    // console.log( books)
    // console.log(params)

    // const bookSelected = books.find(book => book.id === params.bookId);
    // console.log(bookSelected)

    // setSelectedBook();
    // console.log("setting state " + selectedBook)

    // if(!selectedBook) return;
    
    console.log("selectedBook object: " + selectedBook)
    return (
        <div className="">

            <h1>Selected Book</h1>
            {/* <p>{book}</p> */}
            <p>{selectedBook.volumeInfo.title}</p>
        </div>
    )
}

export default SelectedBook;