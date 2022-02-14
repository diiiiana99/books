import React, {useState,useEffect} from 'react';
// using axios because it is a simpler way of using CRUD, eliminates the r=>r.json() step
import axios from "axios";
import '../App.css';
import Card from "./Card";

// updates to state variables are being delayed by one action
// ie: if you first search for 'javascript', it will return nothing
// then if you search for 'react', it will return results for javascript, and so forth

///TESTING API FUNCTIONALITY - not super important right now

const apiKey='AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys'
// const apiKey= 'AIzaSyCu0GO52L8knIMQ7P_gmazBf_7wlngXqyc'

//search in title and author
let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=atomic+inauthor:clear&printType=books&projection=lite&key=AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys'

//get singular result
// uses volume ID 
let single = "https://www.googleapis.com/books/v1/volumes/XfFvDwAAQBAJ?key=AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys"

function App() {
  let [books,setBooks]= useState([])
  let [results,setResults]=useState([])
  const [booksToDisplay,setBTD]=useState([])

  // let [booksToDisplay,setBooksTD]=useState([])

  useEffect(()=>{
    axios.get(booksUrl)
    .then(r=> {
    //  { console.log(r.data.items)
      setResults(r.data.items)
      console.log(results)
      if (results.length !==0){
        setBTD(results.map((book)=>{
          console.log(book)
          return <Card book={book} />
        //   return <img src={book.volumeInfo.imageLinks === undefined
        //       ? ""
        //       : `${book.volumeInfo.imageLinks.thumbnail}`
        // } alt={book.title}/>
        }))
    }})

  }, [])

  const [search,setSearch]=useState('');

  function handleChange(event){
    setSearch(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    let burl= `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&key=${apiKey}&maxResults=40`
    // console.log(burl)
    axios.get(burl)
    .then(r=> {
    //  { console.log(r.data.items)
      setResults(r.data.items)
      console.log(results)
      if (results.length !==0){
        setBTD(results.map((book)=>{
          console.log(book)
          return <Card book={book} />
        //   return <img src={book.volumeInfo.imageLinks === undefined
        //       ? ""
        //       : `${book.volumeInfo.imageLinks.thumbnail}`
        // // } alt={book.title}/>
        }))
    }})
    // fetch(burl)
    // .then(r=>r.json())
    // .then(items=>{
    //   setResults(items)
    //   console.log(results)
    //   console.log(items)

    // })
  }

  // let booksToDisplay = books.items.map((book)=>{
  //   return <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
  // })

  return (
    <div className="App">
      <div className='container'>
        <h1>Book-Report</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input 
                  type='text' onChange={handleChange}
                  className='form-control mt-10' 
                  placeholder='Search for Books' 
                  autoComplete='off' />
            </div>
            <button 
              type='submit' 
              className='btn btn-danger'  
            >Search</button>
        </form>
        {/* <Card/> */}
        {booksToDisplay}
      </div>
    </div>
  );
}

export default App;
