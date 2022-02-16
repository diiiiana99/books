import React, {useState,useEffect} from "react";
import axios from "axios";
import BookCard from "./BookCard";

let localZebras = 'http://localhost:4000/zebras';
let localGiraffes = ' http://localhost:4000/giraffes'
let localSputnik = 'http://localhost:4000/sputnik'

function HomePage( {books, setBooks, apiKey} ) {

    let [books2,setBooks2]= useState([]);
    let [books3,setBooks3]= useState([]);

    let bestSellers = 'http://localhost:4000/bestsellers'


      // initial book render
    useEffect(()=>{
        axios.get(bestSellers)
        .then(r=> {
        setBooks(r.data)
        })
    }, [])

    // update books to display 
    let filteredBooks = books.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay = filteredBooks.map((book, i)=>{
        return (
            <BookCard book={book} key={i}/>
            )
        })

    useEffect(()=>{
        axios.get(localGiraffes)
        .then(r=> {
        setBooks2(r.data)
        })
    }, [])

        // update books to display 
    let filteredBooks2 = books2.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay2 = filteredBooks2.map((book, i)=>{
        return (
            <BookCard book={book} key={i}/>
            )
        })

    useEffect(()=>{
        axios.get(localSputnik)
        .then(r=> {
        setBooks3(r.data)
        })
    }, [])

        // update books to display 
    let filteredBooks3 = books3.filter((book)=>{
        return book.volumeInfo.imageLinks !== undefined
    })
    let booksToDisplay3 = filteredBooks3.map((book, i)=>{
        return (
            <BookCard 
                book={book}
                key={i}
            />
            )
        })
    
    
    

    let nytURL='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=a8Y1LuFG60g1s9EqYAQ0ZgxEdIZIdnj3';

    // use isbn number to get google api results and then display 

    // let [bestSellers2,setBS]= useState([])

    // useEffect(()=>{
    //   axios.get(nytURL)
    //   .then(r=> {
    //     setBS(r.data.results.books)
    //   })
    // }, [])

    // let isbnList = bestSellers2.map((book)=>{
    //     // console.log(book)
    //     return book.isbns[0]['isbn10']
    // })

    let isbnList = [
        "0525559477",
        "0593358333",
        "0593356152",
        "0735222355",
        "1250274613",
        "1501171348",
        "0385546025",
        "0316499773",
        "1984818414",
        "0593087488",
        "0593185412",
        "006288834X",
        "0593315030",
        "0374212236",
        "1982168439"
    ]


    // let nytBestSellers = [];
    // isbnList.map((book)=>{
    //     axios.get('https://www.googleapis.com/books/v1/volumes?q=+isbn:'+book+'&printType=books&key='+apiKey)
    //     .then(r=>{ console.log(r.data.items)
    //         nytBestSellers.push(r.data.items)})
    // })
    // console.log(nytBestSellers)

    // let [topBooks,setTB] = useState([])
    // let nytbooks = [];

    //     // isbnList.map((book)=>{
    //     //     // console.log(book.isbns[0]['isbn10'])
    //     //     axios.get('https://www.googleapis.com/books/v1/volumes?q=+isbn:'+book+'&printType=books&key='+apiKey)
    //     //     .then(r=> {
    //     //         console.log(r)
    //     //         let datax = r.data.items
    //     //         nytbooks={...nytbooks, datax}
    //     //         setTB(nytbooks)
    //     //     })
    //     // })
    //     console.log(topBooks)


    // useEffect(()=>{
    //     console.log(isbnList);
    //     isbnList.map((book)=>{
    //         // console.log(book.isbns[0]['isbn10'])
    //         axios.get('https://www.googleapis.com/books/v1/volumes?q=+isbn:'+book+'&printType=books&key='+apiKey)
    //         .then(r=> {
    //             console.log(r)
    //             let datax = r.data.items
    //             nytbooks={...nytbooks, datax}
    //             setTB(nytbooks)
    //         })
    //     })
    //     console.log(topBooks)
    // },[])
   
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
            <h1>Best Sellers</h1>
            <div className='book-carousel'> 
                    {booksToDisplay}
            </div> 
            <h1>Trending Authors</h1>
            <div className='book-carousel'> 
                    {booksToDisplay2}
            </div> 
            <h1>Classics</h1>
            <div className='book-carousel'> 
                    {/* {bestSellersToDisplay} */}
                    {booksToDisplay3}
            </div> 
        </React.Fragment>
    );
}

export default HomePage;