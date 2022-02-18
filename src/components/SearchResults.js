import React, {useState,useEffect} from 'react';
import axios from "axios";
import BookCard from "./BookCard";

// let allanKey= 'AIzaSyDVGpNSqYZdyylw2q3fRDfa2cVe2A7xDHU'
let localGiraffes = 'http://localhost:4000/giraffes'

function SearchResults({books,setBooks,search,onReadClick,onFavoriteClick,searchUrl}){
    // let searchUrl= `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&printType=books&key=${allanKey}&maxResults=40`
      
    let [searchingBooks,setSearchingBooks]=useState([])
    useEffect(async ()=>{
        console.log(searchUrl)
        axios.get(searchUrl)
        .then(r=> {
            console.log(r.data)
            setSearchingBooks(r.data.items)
        })   
    },[searchUrl])

    // useEffect(()=>{
    //     axios.get(localGiraffes)
    //     .then(r=>setSearchingBooks(r.data))
    // },[])
  
    function displayBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return bookList.map((book,i)=>{
            return (
                <BookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick}/>
                )
            })
    }

    let booksToDisplay1 = displayBooks(searchingBooks.slice(0,10));
    let booksToDisplay2 = displayBooks(searchingBooks.slice(10,20));
    let booksToDisplay3 = displayBooks(searchingBooks.slice(20,30));
    let booksToDisplay4 = displayBooks(searchingBooks.slice(30,40));

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
    }




    return (
        <React.Fragment>
            <div className="spacer"></div>
            <h1 className="heading">Search Results for {titleCase(search)}:</h1>
            <div className="backdrop">
                <div className='book-carousel'> 
                        {booksToDisplay1}
                </div> 
            </div>

            <div className="spacer-books"></div>


            <div className="backdrop">
                <div className='book-carousel'> 
                        {booksToDisplay2}
                </div> 
            </div>

            <div className="spacer-books"></div>


            <div className="backdrop">
                <div className='book-carousel'> 
                        {booksToDisplay3}
                </div> 
            </div>

            <div className="spacer-books"></div>

            <div className="backdrop">
                <div className='book-carousel'> 
                        {booksToDisplay4}
                </div> 
            </div>
            <div className="bot-spacer"></div>
        </React.Fragment>
        )
}

export default SearchResults;