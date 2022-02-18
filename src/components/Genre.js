import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookCard from "./BookCard";

function Genre({onFavoriteClick,onReadClick}){
// function Genre({ books }){

    const { genre } = useParams();
    // console.log(genre)
    let genreUrl= `http://localhost:4000/${genre}`
    let [genreBooks,setGenreBooks]=useState([]);

    const bestSellers = 'http://localhost:4000/bestsellers'
    const nycbooks='http://localhost:4000/nyc';
    const devdigest='http://localhost:4000/devdigest'
    const javascriptbooks='http://localhost:4000/javascript'
    const benjaminfranklin='http://localhost:4000/benjaminfranklin'
    const movies = 'http://localhost:4000/moviebooks'
    const dune = 'http://localhost:4000/dune'
  
    const [ books, setBooks] = useState([]);

    useEffect(async () => {
        axios.get(genreUrl)
        .then(r=> {
        setGenreBooks(r.data)
        })
    }, [genre])
  



    
//     const requestGenre = async (topic) => {
//       const booksArray = [];
//       let req = await fetch(topic)
//       let res = await req.json()
//       res.forEach((book) => {
//         const categories = book.volumeInfo.categories;
//         // Check if categories exist (i.e. not undefined)
//         if(categories) {
//           // If the (first) category of each book === genre, then add book to array
//           if(categories[0].toLowerCase() === genre) {
//             booksArray.push(book)
//           }
//         }
//       })
//       return(booksArray)
//   }
  
//     useEffect(async () => {
//         const bestSellersGenres = await requestGenre(bestSellers)
//         const nycbooksGenres = await requestGenre(nycbooks)
//         const devdigestGenres = await requestGenre(devdigest)
//         const javascriptbooksGenres = await requestGenre(javascriptbooks)
//         const benjaminfranklinGenres = await requestGenre(benjaminfranklin)
//         const moviesGenres = await requestGenre(movies)
//         const duneGenres = await requestGenre(dune)
//         const uniqueGenres = new Array(...new Set([...bestSellersGenres,...nycbooksGenres,...devdigestGenres,...javascriptbooksGenres,...benjaminfranklinGenres,...moviesGenres,...duneGenres]))
//         setBooks(uniqueGenres)
//     }, [genre])
  
    // console.log(uniqueGenres)

    function displayBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return newBookList.map((book,i)=>{
            return (
                <BookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick}/>
                // <BookCard book={book} key={i} />
                )
            })
    }
  
    function titleCase(str) {
        // str = str.substr(0, str.indexOf('(')); 
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
    }
      
    let booksToDisplay = displayBooks(genreBooks.slice(0,10));
    let booksToDisplay2 = displayBooks(genreBooks.slice(10,20));
    let booksToDisplay3 = displayBooks(genreBooks.slice(20,30));
    let booksToDisplay4 = displayBooks(genreBooks.slice(30,40));

    
    return (
        <React.Fragment>
            <div className="spacer"></div>
            <h1 className="heading">Browse Books in {titleCase(genre)}</h1>
            <div className="backdrop">
                <div className='book-carousel'> 
                    {booksToDisplay}
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

            <div className="bot-spacer-home"></div>
        </React.Fragment>
    )
}

export default Genre;