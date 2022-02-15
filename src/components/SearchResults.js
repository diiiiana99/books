import React, {useState,useEffect} from 'react';
import axios from "axios";
import BookCard from "./BookCard";


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
    return book.volumeInfo.imageLinks !== undefined & book.volumeInfo.categories.includes('Performing Arts')
        })

    let booksToDisplay = filteredBooks.map((book, i)=>{
        return (
            <BookCard book={book} key={i}/>
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