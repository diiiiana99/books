import React, {useState,useEffect} from "react";
import axios from "axios";
import BookCard from "./BookCard";
import BigBookCard from "./BigBookCard";
import ExBigBookCard from "./ExBigBookCard";

//joke
let localBooks = 'http://localhost:4000';
let localZebras = 'http://localhost:4000/zebras';
let localGiraffes = ' http://localhost:4000/giraffes';
let localSputnik = 'http://localhost:4000/sputnik';

// used 
let localBestSellers = 'http://localhost:4000/bestsellers'
let localNycBooks='http://localhost:4000/nyc';
let localDevDigest='http://localhost:4000/devdigest'
let localJavaScriptBooks='http://localhost:4000/javascript'
let localBenFranklin='http://localhost:4000/benjaminfranklin'
let localMovies = 'http://localhost:4000/moviebooks'
let localDune = 'http://localhost:4000/dune'
let localHistory = 'http://localhost:4000/history'
const localNew = 'http://localhost:4000/new'


function HomePage( {books, setBooks, apiKey,onReadClick, onFavoriteClick,displayBooks,randomBooks,randGenre} ) {

    //state vars for book info storage

    let [zebraBooks,setZebraBooks] = useState([])
    let [newReleases,setNewReleases] = useState([]);
    let [devDigestBooks,setDevDigestBooks]= useState([]);
    let [duneBooks,setDuneBooks] = useState([]);
    let [moviebooks,setMovieBooks]= useState([]);
    let [nycbooksList,setnycBooksList]= useState([]);
    let [javascriptBooks,setJavascriptBooks]= useState([]);
    let [benjaminBooks,setBenjaminBooks] = useState([]);
    let [sputnikBooks,setSputnik]= useState([]);



    //functions to create book carousels
    function displayBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return newBookList.map((book,i)=>{
            return (
                <BookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick} />
                )
            })
    }

    //function to create larger carousel
    function displayBigBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return newBookList.map((book,i)=>{
            return (
                <BigBookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick}/>
                )
            })
    }

    //functions to display the carousels on the page
    function bookCarousel(header,bookList) {
        return (
            <React.Fragment>
                <h1 className="heading">{header}</h1>
                <div className="backdrop">
                <div className='book-carousel'> 
                        {bookList}
                </div> 
                </div>
            </React.Fragment>
        )
    }
    
    function bigCarousel(header,bookList) {
        return (
            <React.Fragment>
                <h1 className="top-heading">{header}</h1>
                <div className="backdrop">
                <div className='book-carousel'> 
                        {bookList}
                </div> 
                </div>
            </React.Fragment>
        )
    }


    //fetch information
    useEffect(()=>{
        axios.get(localDune)
        .then(r=> {
            setZebraBooks(r.data)
        })

        //BestSellers
        axios.get(localBestSellers)
        .then(r=> {
            setBooks(r.data)
        })

        //New
        axios.get(localNew)
        .then(r=> {
            setNewReleases(r.data)
        })

        //DevDigest
        axios.get(localDevDigest)
        .then(r=> {
            setDevDigestBooks(r.data)
        })

        //Dune
        axios.get(localDune)
        .then(r=> {
            setDuneBooks(r.data)
        })

        // NY
        axios.get(localNycBooks)
        .then(r=> {
            setnycBooksList(r.data)
        })

        //JS
        axios.get(localJavaScriptBooks)
        .then(r=> {
            setJavascriptBooks(r.data)
        })

        //Benjamin Franklin
        axios.get(localBenFranklin)
        .then(r=> {
            setBenjaminBooks(r.data)
        })

        //Movies
        axios.get(localMovies)
        .then(r=> {
            setMovieBooks(r.data)
        })

        //Sputnik
        axios.get(localSputnik)
        .then(r=> {
            setSputnik(r.data)
        })


    }, [])

    //create carousels for individual booklists

    let zebrasToDisplay = displayBigBooks(zebraBooks.slice(0,10));
    let booksToDisplay = displayBooks(books);
    let newReleasesToDisplay = displayBooks(newReleases);
    let devDigestToDisplay = displayBigBooks(devDigestBooks);
    let moviesToDisplay = displayBooks(moviebooks);
    let duneToDisplay = displayBooks(duneBooks);
    let nycToDisplay = displayBooks(nycbooksList);
    let javascriptToDisplay = displayBooks(javascriptBooks);
    let benjaminToDisplay = displayBooks(benjaminBooks);
    let sputnikToDisplay = displayBooks(sputnikBooks);

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }


    return(
        <React.Fragment>
            <div className="spacer-top-home"></div>

            {bigCarousel("",zebrasToDisplay)}

            {randGenre===0?'':bookCarousel(`Recommended for you in ${titleCase(randGenre)}`,displayBooks(randomBooks))}

            {bookCarousel("This Week's Best Sellers",booksToDisplay)}

            {bookCarousel("New and Noteworthy",newReleasesToDisplay)}

            {bookCarousel("Developer's Digest",devDigestToDisplay)}

            {bookCarousel("See it on the Screen",moviesToDisplay)}

            {bookCarousel("The Dune Saga",duneToDisplay)}

            {bookCarousel("New York, New York",nycToDisplay)}

            {bookCarousel("Learn More: Javascript",javascriptToDisplay)}

            {bookCarousel("Author in Focus: Benjamin Franklin",benjaminToDisplay)}

            {bookCarousel("This Week in History: Sputnik",displayBooks(sputnikBooks))}


            <div className="bot-spacer-home"></div>

        </React.Fragment>
    );
}

export default HomePage;