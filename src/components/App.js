import React, {useState,useEffect} from 'react';
// using axios because it is a simpler way of using CRUD, eliminates the r=>r.json() step
import axios from "axios";
import '../App.css';

// updates to state variables are being delayed by one action
// ie: if you first search for 'javascript', it will return nothing
// then if you search for 'react', it will return results for javascript, and so forth

///TESTING API FUNCTIONALITY - not super important right now

const apiKey1 ='AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys'
const apiKey2='AIzaSyBOTcf1Js7o8SlmGyfA0bG7JBLrWJQ37R8'

//search in title and author
let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=atomic+inauthor:clear&printType=books&key='+apiKey2

//get singular result
// uses volume ID 
let single = "https://www.googleapis.com/books/v1/volumes/XfFvDwAAQBAJ?key=AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys"

function App() {
  let [books,setBooks]= useState([])

  // initial book render
  useEffect(()=>{
    axios.get(booksUrl)
    .then(r=> {
      console.log(r.data.items)
      setBooks(r.data.items)
    })
  }
, [])
  
  //search function
  const [search,setSearch]=useState('');

  function handleChange(event){
    setSearch(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    let burl= `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&key=${apiKey2}&maxResults=40`
    console.log(burl)
    axios.get(burl)
    .then(r=> {
      setBooks(r.data.items)
      console.log(books)  
  })
  }

  // update books to display 
  // will not be staying in app component  
  let booksToDisplay = books.map((book)=>{
    return <img src={book.volumeInfo.imageLinks === undefined
      ? ""
      : `${book.volumeInfo.imageLinks.thumbnail}`
      } alt={book.title}/>
})

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
        {booksToDisplay}
      </div>
    </div>
  );
}

export default App;
