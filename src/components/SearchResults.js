import React, {useState,useEffect} from 'react';
import axios from "axios";
import BookCard from "./BookCard";

let allanKey= 'AIzaSyDVGpNSqYZdyylw2q3fRDfa2cVe2A7xDHU'
function SearchResults({books,setBooks,search,apiKey}){
    let searchUrl= `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&printType=books&key=${allanKey}&maxResults=40`
    let localZebras = 'http://localhost:4000/zebras'
    let localGiraffes = ' http://localhost:4000/giraffes'
    let localSputnik = 'http://localhost:4000/sputnik'
    let localDune = 'http://localhost:4000/dune'

    let [searchResults,setSearchResults] = useState([])
    useEffect(()=>{
        if (search===''){
            axios.get(localGiraffes)
            .then(r=> {
                // console.log(r)
                setBooks(r.data)
            })    
        } else{

        }
    },[])

    console.log(books);

    //       // update books to display 
    // let filteredBooks = books.filter((book)=>{
    // return book.volumeInfo.imageLinks !== undefined
    //     })

    // let booksToDisplay = filteredBooks.map((book, i)=>{
    //     return (
    //         <BookCard book={book} key={i}
    //         cursor='pointer'
    //         />
    //         )
    //     })
        

    return(
        <React.Fragment>
            <div>{searchUrl}</div>
            <div> 
                    {/* {booksToDisplay} */}
            </div>

        </React.Fragment>
    )
}

export default SearchResults;