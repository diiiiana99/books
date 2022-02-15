import React, {useState,useEffect} from "react";
import BookCard from "./BookCard";
import axios from "axios";

function BookList( {books, apiKey} ) {
      // update books to display 
    let filteredBooks = books.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })

    let booksToDisplay = filteredBooks.map((book)=>{
        return (
            <div className='book-card' >
                <img 
                key={book.id}
                src={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`} 
                alt={book.title}/>
            </div>
        )
        })

    let nytURL='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=a8Y1LuFG60g1s9EqYAQ0ZgxEdIZIdnj3';

    // use isbn number to get google api results and then display 

    let [bestSellers,setBS]= useState([])

    useEffect(()=>{
      axios.get(nytURL)
      .then(r=> {
        setBS(r.data.results.books)
      })
    }, [])

    let isbnList = bestSellers.map((book)=>{
        // console.log(book)
        return book.isbns[0]['isbn10']
    })

    let [topBooks,setTB] = useState([])
    let nytbooks = [];

    useEffect(()=>{
        isbnList.map((book)=>{
            // console.log(book.isbns[0]['isbn10'])
            axios.get('https://www.googleapis.com/books/v1/volumes?q=+isbn:'+book+'&printType=books&key='+apiKey)
            .then(r=> {
                nytbooks.push(r.data.items)
                setTB(nytbooks)
            })
        })
    },[bestSellers])
   
    // let bestSellersToDisplay = topBooks.map((book)=>{
    //         console.log(bestSellersToDisplay)
    //         return (
    //             <div className='book-card' >
    //                 <img 
    //                 src={book[0].volumeInfo.imageLinks.thumbnail} 
    //                 alt={book.title}/>
    //             </div>
    //         )
    //         })


    return(
        <React.Fragment>
            <div className='book-carousel'> 
                    {booksToDisplay}
            </div>
            <div className='book-carousel'> 
                    {/* {bestSellersToDisplay} */}
            </div> 
        </React.Fragment>

         
        
    );
}

export default BookList;