import React, {useState,useEffect} from 'react';
// using axios because it is a simpler way of using CRUD, eliminates the r=>r.json() step
import axios from "axios";
import '../App.css';
import NavBar from './NavBar';
import BookList from './BookList';
import { Route, Switch } from "react-router-dom";

// updates to state variables are being delayed by one action
// ie: if you first search for 'javascript', it will return nothing
// then if you search for 'react', it will return results for javascript, and so forth

///TESTING API FUNCTIONALITY - not super important right now

const apiKey1 ='AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys'
const apiKey2='AIzaSyBOTcf1Js7o8SlmGyfA0bG7JBLrWJQ37R8'

//search in title and author
let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=atomic+inauthor:clear&printType=books&key='+apiKey2

let zebras = 'https://www.googleapis.com/books/v1/volumes?q=zebras&printType=books&maxResults=25&key='+apiKey2

//get singular result
// uses volume ID 
let single = "https://www.googleapis.com/books/v1/volumes/XfFvDwAAQBAJ?key="+apiKey2

function App() {
  let [books,setBooks]= useState([])

  // initial book render
  useEffect(()=>{
    axios.get('http://localhost:3000/zebras')
    .then(r=> {
      console.log(r.data)
      setBooks(r.data)
    })
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <NavBar 
          setBooks={setBooks}
          apiKey2={apiKey2}
        />
        <Switch>
          <Route path="/books">
            <BookList
              books={books}
            />
          </Route>
          <Route exact path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
