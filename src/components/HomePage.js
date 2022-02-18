import React, {useState,useEffect} from "react";
import axios from "axios";
import BookCard from "./BookCard";

let localBooks = 'http://localhost:4000';
let localZebras = 'http://localhost:4000/zebras';
let localGiraffes = ' http://localhost:4000/giraffes';
let localSputnik = 'http://localhost:4000/sputnik';

function HomePage( {books, setBooks, apiKey,onReadClick, onFavoriteClick,displayBooks} ) {

    let [devDigestBooks,setDevDigestBooks]= useState([]);
    let [sputnikBooks,setSputnik]= useState([]);
    let [nycbooksList,setnycBooksList]= useState([]);
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
    const localNew = 'http://localhost:4000/new'

    
    function displayBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return newBookList.map((book,i)=>{
            return (
                <BookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick} />
                )
            })
    }
  
    useEffect(()=>{
        axios.get(bestSellers)
        .then(r=> {
        setBooks(r.data)
        })
    }, [])

    let booksToDisplay = displayBooks(books);

    //developers digest
    useEffect(()=>{
        axios.get(devdigest)
        .then(r=> {
        setDevDigestBooks(r.data)
        })
    }, [])

    let devDigestToDisplay = displayBooks(devDigestBooks)
        
    //New York
    useEffect(()=>{
        axios.get(nycbooks)
        .then(r=> {
        setnycBooksList(r.data)
        })
    }, [])

    let nycToDisplay = displayBooks(nycbooksList)

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

    let [newReleases,setNewReleases] = useState([]);

    useEffect(()=>{
      axios.get(localNew)
      .then(r=> {
        setNewReleases(r.data)
      })
  }, [])

    let newReleasesToDisplay = displayBooks(newReleases);




    return(
        <React.Fragment>
            <div className="spacer"></div>
    
            
            <h1 className="heading">This Week's Best Sellers</h1>
            <div className="backdrop">
            <div className='book-carousel'> 
                    {booksToDisplay}
            </div> 
            </div>

            <h1 className="heading">New and Noteworthy</h1>
            <div className="backdrop">
                <div className='book-carousel'> 
                        {newReleasesToDisplay}
                </div> 
            </div>


            {/* <div className="backdrop">
                <div className='book-carousel'> 
                        {booksToDisplay2}
                </div> 
            </div> */}



            <h1 className="heading">Developer's Digest</h1>
            <div className="backdrop">
            <div className='book-carousel'> 
                    {devDigestToDisplay}
            </div> 
            </div> 


            <h1 className="heading">See it on the Screen</h1>
            {/* <p>Books Made into Movies</p> */}
            <div className="backdrop">

            <div className='book-carousel'> 
                    {moviesToDisplay}
            </div> 
            </div> 


            <h1 className="heading">New York, New York</h1>
            {/* <p>All About the City and More</p> */}
            <div className="backdrop">
            <div className='book-carousel'> 
                    {nycToDisplay}
            </div>
            </div> 


            <h1 className="heading">The Dune Saga</h1>
            {/* <p>Catch Up on the Epic Sci-Fi Original</p> */}
            <div className="backdrop">
            <div className='book-carousel'> 
                    {duneToDisplay}
            </div> 
            </div> 


            <h1 className="heading">Learn More: Javascript</h1>
            {/* <p>Wanna Learn More? Check out these!</p> */}
            <div className="backdrop">
            <div className='book-carousel'> 
                    {javascriptToDisplay}
            </div> 
            </div> 


            <h1 className="heading">Author in Focus: Benjamin Franklin</h1>
            {/* <p>Learn more about this week's featured artist!</p> */}
            <div className="backdrop">
            <div className='book-carousel'> 
                    {benjaminToDisplay}
            </div> 
            </div> 


            <h1 className="heading">This Week in History: Sputnik</h1>
            {/* <p>Learn more about this pivotal event in history!</p> */}
            <div className="backdrop">
            <div className='book-carousel'> 
                    {sputnikToDisplay}
            </div> 
            </div> 
            <div className="bot-spacer-home"></div>

        </React.Fragment>
    );
}

export default HomePage;