import React, {useState,useEffect} from 'react';
import axios from "axios";

function SearchResults({books,setBooks, search,apiKey}){
    // let burl= `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&key=${apiKey}&maxResults=40`
    let localZebras = 'http://localhost:3000/zebras'

    useEffect(()=>{
        axios.get(localZebras)
        .then(r=> {
            setBooks(r.data)
        })
    },[])

          // update books to display 
    let filteredBooks = books.filter((book)=>{
    return book.volumeInfo.imageLinks !== undefined
        })

    let booksToDisplay = filteredBooks.map((book, i)=>{
        return (
            <div className='book-card'  onMouseOver={() => { console.log('Hovering over book', i+1)}}>
                <img 
                key={book.id}
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
        <React.Fragment>
            <div> 
                    {booksToDisplay}
            </div> 

        </React.Fragment>
    )
}

export default SearchResults;