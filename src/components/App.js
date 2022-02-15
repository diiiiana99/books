import React, {useState,useEffect} from 'react';
// using axios because it is a simpler way of using CRUD, eliminates the r=>r.json() step
import axios from "axios";
import '../App.css';
import NavBar from './NavBar';
import BookList from './BookList';
import SelectedBook from './SelectedBook';
import { Route, Switch } from "react-router-dom";

// updates to state variables are being delayed by one action
// ie: if you first search for 'javascript', it will return nothing
// then if you search for 'react', it will return results for javascript, and so forth

///TESTING API FUNCTIONALITY - not super important right now

// const apiKey2 ='AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys'
// const apiKey2='AIzaSyBOTcf1Js7o8SlmGyfA0bG7JBLrWJQ37R8'
// const apiKey2='AIzaSyDVGpNSqYZdyylw2q3fRDfa2cVe2A7xDHU'
// const apiKey2='AIzaSyAo515HS1QxHI--AdZ6joTBP-cR89IleMc'

//search in title and author
// let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=atomic+inauthor:clear&printType=books&key='+apiKey2

// let zebras = 'https://www.googleapis.com/books/v1/volumes?q=ho&printType=books&maxResults=100&key='+apiKey2

//get singular result
// uses volume ID 
// let single = "https://www.googleapis.com/books/v1/volumes/XfFvDwAAQBAJ?key="+apiKey2

function App() {
  let [books,setBooks]= useState([])

  // initial book render
  useEffect(()=>{
    axios.get('http://localhost:3001/zebras')
    .then(r=> {
      setBooks(r.data.items)
    })
  }, [])

  return (
    <div className="App">
    console.log(books)
      <div className='container'>
        <NavBar 
          setBooks={setBooks}
          // apiKey2={apiKey2}
        />
        <Switch>
          
          <Route path="/book">
            <SelectedBook
              books={books}
            />
          </Route>
          
          <Route exact path="/">
            {/* <div>Home</div> */}
            <BookList
              books={books}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;



{/* <Route exact path="/main"> <MainPage books={books} /> </Route> */}