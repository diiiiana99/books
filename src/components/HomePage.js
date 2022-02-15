import React, {useState,useEffect} from "react";
import axios from "axios";

let localZebras = 'http://localhost:3000/zebras'


function HomePage( {books, setBooks, apiKey} ) {

      // initial book render
    useEffect(()=>{
        axios.get(localZebras)
        .then(r=> {
        setBooks(r.data)
        })
        console.log(books)
    }, [])

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

    // let nytURL='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=a8Y1LuFG60g1s9EqYAQ0ZgxEdIZIdnj3';

    // // use isbn number to get google api results and then display 

    // let [bestSellers,setBS]= useState([])

    // useEffect(()=>{
    //   axios.get(nytURL)
    //   .then(r=> {
    //     setBS(r.data.results.books)
    //   })
    // }, [])

    // let isbnList = bestSellers.map((book)=>{
    //     // console.log(book)
    //     return book.isbns[0]['isbn10']
    // })

    // let [topBooks,setTB] = useState([])
    // let nytbooks = [];

    // useEffect(()=>{
    //     isbnList.map((book)=>{
    //         // console.log(book.isbns[0]['isbn10'])
    //         axios.get('https://www.googleapis.com/books/v1/volumes?q=+isbn:'+book+'&printType=books&key='+apiKey)
    //         .then(r=> {
    //             nytbooks.push(r.data.items)
    //             setTB(nytbooks)
    //         })
    //     })
    // },[bestSellers])
   
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
            {/* <div className='book-carousel'> 
                    {booksToDisplay}
            </div> */}
            <h1>Best Sellers</h1>
            <div className='book-carousel'> 
                    {/* {bestSellersToDisplay} */}
                    {booksToDisplay}
            </div> 
            <h1>Trending Authors</h1>
            <div className='book-carousel'> 
                    {/* {bestSellersToDisplay} */}
                    {booksToDisplay}
            </div> 
            <h1>Classics</h1>
            <div className='book-carousel'> 
                    {/* {bestSellersToDisplay} */}
                    {booksToDisplay}
            </div> 

        </React.Fragment>

         
        
    );
}

export default HomePage;