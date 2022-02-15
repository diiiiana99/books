import React, {useState,useEffect} from 'react';
// using axios because it is a simpler way of using CRUD, eliminates the r=>r.json() step
import axios from "axios";
import '../App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import SearchResults from "./SearchResults";
import { Route, Switch } from "react-router-dom";

// updates to state variables are being delayed by one action
// ie: if you first search for 'javascript', it will return nothing
// then if you search for 'react', it will return results for javascript, and so forth

///TESTING API FUNCTIONALITY - not super important right now

const apiKey1 ='AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys'
const apiKey2='AIzaSyBOTcf1Js7o8SlmGyfA0bG7JBLrWJQ37R8'
const apiKey3='AIzaSyA8fo7zDXJrVGuia8Pml1RT8WIxmWA5Hzg'
const apiKey4='AIzaSyA2Dg912lB4wLmPm0XaY--L-yc2PfdVG84'
const apiKey5='AIzaSyDnjytUM4gOUWl7PpUTriSO3K8DuCBemiU'
const apiKey6= 'AIzaSyA8fo7zDXJrVGuia8Pml1RT8WIxmWA5Hzg'
const apiKey7= 'AIzaSyDVGpNSqYZdyylw2q3fRDfa2cVe2A7xDHU'
const apiKey8 = 'AIzaSyB74bDSFkfuOu0WV_Z7iPIPUOAEiq2Mmbg'
const apiKey='AIzaSyACwOvdEqnIZO3oG-IP35G2-XFB6EQqIts'

//search in title and author
let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=atomic+inauthor:clear&printType=books&key='+apiKey

let zebras = 'https://www.googleapis.com/books/v1/volumes?q=zebras&printType=books&maxResults=25&key='+apiKey

let localZebras = 'http://localhost:3000/zebras'

//get singular result
// uses volume ID 
let single = "https://www.googleapis.com/books/v1/volumes/XfFvDwAAQBAJ?key="+apiKey

function App() {
  let [books,setBooks]= useState([])

    //search function
  const [search,setSearch]=useState('');

  function handleChange(event){
      setSearch(event.target.value);
  }

  function handleSubmit(event){
      let burl= `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&key=${apiKey}&maxResults=40`
  }
  
  return (
    <div className="App">
      <div className='container'>
        <NavBar 
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Switch>
          <Route exact path="/">
            <HomePage
              books={books}
              apiKey={apiKey}
              setBooks={setBooks}
            />
          </Route>
          <Route path ='/search-results'>
            <SearchResults
            books={books} 
             search= {search}
             setBooks={setBooks}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
