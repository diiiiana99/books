import React, {useState,useEffect} from "react";
import axios from "axios";
import BookCard from "./BookCard";

let localBooks = 'http://localhost:4000';
let localZebras = 'http://localhost:4000/zebras';
let localGiraffes = ' http://localhost:4000/giraffes';
let localSputnik = 'http://localhost:4000/sputnik';

function HomePage( {books, setBooks, apiKey} ) {

    let [books2,setBooks2]= useState([]);
    let [sputnikBooks,setSputnik]= useState([]);
    let [nycbooksList,setnycBooks]= useState([]);
    let [javascriptBooks,setJavascriptBooks]= useState([]);
    let [benjaminBooks,setBenjaminBooks] = useState([]);
    let [moviebooks,setMovieBooks]= useState([]);
    let [duneBooks,setDuneBooks] = useState([]);


    let bestSellers = 'http://localhost:4000/bestsellers'
    let nycbooks='http://localhost:4000/nyc';
    let devdigest='http://localhost:4000/devdigest'
    let javascriptbooks='http://localhost:4000/javascript'
    let benjaminfranklin='http://localhost:4000/benjaminfranklin'
    let movies = 'http://localhost:4000/moviebooks'
    let dune = 'http://localhost:4000/dune'
    
    function displayBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return newBookList.map((book,i)=>{
            return (
                <BookCard book={book} key={i}/>
                )
            })
    }
  
    useEffect(()=>{
        axios.get(bestSellers)
        .then(r=> {
        setBooks(r.data)
        })
    }, [])

    let filteredBooks = books.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay = filteredBooks.map((book, i)=>{
        return (
            <BookCard book={book} key={i}/>
            )
        })

    //developers digest
    useEffect(()=>{
        axios.get(devdigest)
        .then(r=> {
        setBooks2(r.data)
        })
    }, [])

    let filteredBooks2 = books2.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay2 = filteredBooks2.map((book, i)=>{
        return (
            <BookCard book={book} key={i}/>
            )
        })
        
    //New York
    useEffect(()=>{
        axios.get(nycbooks)
        .then(r=> {
        setnycBooks(r.data)
        })
    }, [])

    let filteredNYC = nycbooksList.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let nycToDisplay = filteredNYC.map((book, i)=>{
        return (
            <BookCard 
                book={book}
                key={i}
            />
            )
        })

    //Javascript
    useEffect(()=>{
        axios.get(javascriptbooks)
        .then(r=> {
            setJavascriptBooks(r.data)
        })
    }, [])

    let javascriptToDisplay = displayBooks(javascriptBooks);

    //Benjamin
    useEffect(()=>{
        axios.get(benjaminfranklin)
        .then(r=> {
            setBenjaminBooks(r.data)
        })
    }, [])

    let benjaminToDisplay = displayBooks(benjaminBooks);
    
    //Movies
    useEffect(()=>{
        axios.get(movies)
        .then(r=> {
            setMovieBooks(r.data)
        })
    }, [])

    let moviesToDisplay = displayBooks(moviebooks);

    //Random Historical Event:
    useEffect(()=>{
        axios.get(localSputnik)
        .then(r=> {
            setSputnik(r.data)
        })
    }, [])

    let sputnikToDisplay = displayBooks(sputnikBooks);

    //Dune
    useEffect(()=>{
        axios.get(dune)
        .then(r=> {
            setDuneBooks(r.data)
        })
    }, [])

    let duneToDisplay = displayBooks(duneBooks);

    return(
        <React.Fragment>

            <h1>Best Sellers</h1>
            <p>This week's most popular books</p>
            <div className='book-carousel'> 
                    {booksToDisplay}
            </div> 

            <h1>Developer's Digest</h1>
            <p>Recommendations from the Team </p>
            <div className='book-carousel'> 
                    {booksToDisplay2}
            </div> 

            <h1>See it on the Screen</h1>
            <p>Books Made into Movies</p>
            <div className='book-carousel'> 
                    {moviesToDisplay}
            </div> 

            <h1>New York, New York</h1>
            <p>All About the City and More</p>
            <div className='book-carousel'> 
                    {nycToDisplay}
            </div>

            <h1>The Dune Saga</h1>
            <p>Catch Up on the Epic Sci-Fi Original</p>
            <div className='book-carousel'> 
                    {duneToDisplay}
            </div> 


            <h1>Javascript</h1>
            <p>Wanna Learn More? Check out these!</p>
            <div className='book-carousel'> 
                    {javascriptToDisplay}
            </div> 

            <h1>Author in Focus: Benjamin Franklin</h1>
            <p>Learn more about this week's featured artist!</p>
            <div className='book-carousel'> 
                    {benjaminToDisplay}
            </div> 

            <h1>This Week in History: Sputnik</h1>
            <p>Learn more about this pivotal event in history!</p>
            <div className='book-carousel'> 
                    {sputnikToDisplay}
            </div> 


        </React.Fragment>
    );
}

export default HomePage;