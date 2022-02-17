import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookCard from "./BookCard";

function Genre(){
// function Genre({ books }){

    const { genre } = useParams();
    // console.log(genre)

    const bestSellers = 'http://localhost:4000/bestsellers'
    const nycbooks='http://localhost:4000/nyc';
    const devdigest='http://localhost:4000/devdigest'
    const javascriptbooks='http://localhost:4000/javascript'
    const benjaminfranklin='http://localhost:4000/benjaminfranklin'
    const movies = 'http://localhost:4000/moviebooks'
    const dune = 'http://localhost:4000/dune'
  
    const [ books, setBooks] = useState([]);
    
    const requestGenre = async (topic) => {
      const booksArray = [];
      let req = await fetch(topic)
      let res = await req.json()
      res.forEach((book) => {
        const categories = book.volumeInfo.categories;
        // Check if categories exist (i.e. not undefined)
        if(categories) {
          // If the (first) category of each book === genre, then add book to array
          if(categories[0].toLowerCase() === genre) {
            booksArray.push(book)
          }
        }
      })
      return(booksArray)
  }
  
    useEffect(async () => {
        const bestSellersGenres = await requestGenre(bestSellers)
        const nycbooksGenres = await requestGenre(nycbooks)
        const devdigestGenres = await requestGenre(devdigest)
        const javascriptbooksGenres = await requestGenre(javascriptbooks)
        const benjaminfranklinGenres = await requestGenre(benjaminfranklin)
        const moviesGenres = await requestGenre(movies)
        const duneGenres = await requestGenre(dune)
        const uniqueGenres = new Array(...new Set([...bestSellersGenres,...nycbooksGenres,...devdigestGenres,...javascriptbooksGenres,...benjaminfranklinGenres,...moviesGenres,...duneGenres]))
        setBooks(uniqueGenres)
    }, [genre])
  
    // console.log(uniqueGenres)

    function displayBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return newBookList.map((book,i)=>{
            return (
                // <BookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick}/>
                <BookCard book={book} key={i} />
                )
            })
    }
  
    let booksToDisplay = displayBooks(books);

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
    }
      
    return (
        <React.Fragment>
            <h1>Browse Books in Genre: "{titleCase(genre)}"</h1>
            <div className='book-carousel'> 
                {booksToDisplay}
            </div> 
        </React.Fragment>
    )
}

export default Genre;