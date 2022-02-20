import React, {useState,useEffect} from 'react';
// using axios because it is a simpler way of using CRUD, eliminates the r=>r.json() step
import axios from "axios";
import NavBar from './NavBar';
import HomePage from './HomePage';
import SearchResults from "./SearchResults";
import SelectedBook from './SelectedBook';
import Footer from "./Footer";
import Genre from "./Genre";
import GenreMore from "./GenreMore";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Favorites from "./Favorites";
import ToReadList from './ToReadList';
import NewReleases from './NewReleases';
import MoreList from './MoreList';

///API KEYS:

const apiKey ='AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys'
// const apiKey2='AIzaSyBOTcf1Js7o8SlmGyfA0bG7JBLrWJQ37R8'
// const apiKey3='AIzaSyA8fo7zDXJrVGuia8Pml1RT8WIxmWA5Hzg'
// const apiKey4='AIzaSyA2Dg912lB4wLmPm0XaY--L-yc2PfdVG84'
// const apiKey5='AIzaSyDnjytUM4gOUWl7PpUTriSO3K8DuCBemiU'
// const apiKey6= 'AIzaSyA8fo7zDXJrVGuia8Pml1RT8WIxmWA5Hzg'
// const apiKey= 'AIzaSyDVGpNSqYZdyylw2q3fRDfa2cVe2A7xDHU'
// const apiKey = 'AIzaSyB74bDSFkfuOu0WV_Z7iPIPUOAEiq2Mmbg'
// const apiKey='AIzaSyACwOvdEqnIZO3oG-IP35G2-XFB6EQqIts'

//search in title and author
let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=atomic+inauthor:clear&printType=books&key='+apiKey

let zebras = 'https://www.googleapis.com/books/v1/volumes?q=zebras&printType=books&maxResults=25&key='+apiKey


//local favorites/to read
const localFavorites= 'http://localhost:4000/favorites'
const localToRead= 'http://localhost:4000/to-read'
const localNew = 'http://localhost:4000/new'


//get singular result
// uses volume ID 
let single = "https://www.googleapis.com/books/v1/volumes/XfFvDwAAQBAJ?key="+apiKey

function App() {
  let history = useHistory();

  let [books,setBooks]= useState([])

    //search function
  const [search,setSearch]=useState('');

  function handleChange(event){
      setSearch(event.target.value);
      // console.log(search)
  }

  let allanKey= 'AIzaSyDVGpNSqYZdyylw2q3fRDfa2cVe2A7xDHU'
  // let [searchUrl,setSearchUrl] = useState('');
  let [searchBooks,setSearchBooks]= useState([]);
  let [searchUrl,setSearchUrl]= useState('')

  let [searchTitle,setSearchtitle]=useState('')
  function handleSubmit(event){
    event.preventDefault();
    setSearchUrl(`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&key=${allanKey}&maxResults=40`)
    setSearchtitle(search)
    history.push('./search-results')
      if (search!==''){
        history.push('./search-results')
      } else if (search===''){
    }
  }

  
    let [toReadBooks,setToReadBooks] = useState([]);
    let [favoriteBooks,setFavoriteBooks] = useState([]);
    let [newReleases,setNewReleases] = useState([]);

      useEffect(()=>{
        //Reading List fetch
        axios.get(localToRead)
        .then(r=> {
        setToReadBooks(r.data)
        })
        //Favorites List fetch
        axios.get(localFavorites)
        .then(r=> {
        setFavoriteBooks(r.data)
        })
        //Fetch new releases
        axios.get(localNew)
        .then(r=> {
          setNewReleases(r.data)
        })
    }, [])

    // WHEN IN THE 'TO-READ' PAGE the book is removed from the read list
    function handleReadClickinList(selectedBook){
      axios.delete(`${localToRead}/${selectedBook.id}`)
      setToReadBooks(toReadBooks.filter((book)=>book.id!==selectedBook.id))
    }

    // WHEN NOT IN THE 'TO-READ' PAGE, the book is added to the to read list
    function handleReadClickoutList(selectedBook){
      const clickedBooks = toReadBooks.find(book => {
        return book.id === selectedBook.id
      })
      if (clickedBooks) {alert(`${selectedBook.volumeInfo.title} by ${selectedBook.volumeInfo.authors} is already in your reading list!`)}
      if (!clickedBooks){
        axios.post(localToRead,selectedBook)
        setToReadBooks([...toReadBooks,selectedBook])
      }
      }
    
    // WHEN IN THE 'favorite' PAGE the book is removed from the read list
    function handleFavoritesClickIN(selectedBook){
      axios.delete(`${localFavorites}/${selectedBook.id}`)
      setFavoriteBooks(favoriteBooks.filter((book)=>book.id!==selectedBook.id))
    }

    // WHEN NOT IN THE 'favorite' PAGE, the book is added to the to read list
    function handleFavoritesClickOUT(selectedBook){
      const clickedBooks = favoriteBooks.find(favBook => {
        return favBook.id === selectedBook.id
      })
      if (clickedBooks) {alert(`${selectedBook.volumeInfo.title} by ${selectedBook.volumeInfo.authors} is already in your favorites!`)}
      if (!clickedBooks){
        axios.post(localFavorites,selectedBook)
        setFavoriteBooks([...favoriteBooks,selectedBook])  
      }
      }

    let [genres,setGenres] = useState([]);
    let [randGenre,setRandGenre] = useState(0);

    const requestGenre = async (topic) => {
        const genresArray = [];
        let req = await fetch(topic)
        let res = await req.json()
        res.forEach((book) => {
          const categories = book.volumeInfo.categories;
          if(categories) {
            if(genresArray.indexOf(categories[0].toLowerCase()) === -1) {
              genresArray.push(categories[0].toLowerCase())
            }
          }
        })
        return(genresArray)
      }

    const requestGenre2  = async (bookList) => {
      const genresArray = [];
      bookList.forEach((book) => {
        const categories = book.volumeInfo.categories;
        if(categories) {
          // console.log(categories)
          if(genresArray.indexOf(categories[0].toLowerCase()) === -1) {
            console.log('working')
            genresArray.push(categories[0].toLowerCase())
          }
        }
      })
      // console.log(genresArray)
      return(genresArray)
    }

      useEffect(async()=>{
        // let favoritesGenre = await requestGenre(localFavorites)
        // let toReadGenre = await requestGenre(localToRead)
        let favGenres = await requestGenre2(favoriteBooks)
        let toReadGenres = await requestGenre2(toReadBooks)

        // let genreList2 = new Array(...new Set([...favoritesGenre,...toReadGenre]));

        let genreList = new Array(...new Set([...favGenres,...toReadGenres]));
        // console.log(genreList2)

        let noInput = genreList.length ===0;
        // console.log(noInput)
        if(noInput){setRandGenre(0)}
        else{setRandGenre(genreList[Math.floor(Math.random()*genreList.length)])}

      },[favoriteBooks,toReadBooks])



      let [randomBooks,setRandomBooks] = useState([]);

      useEffect(async()=>{
        if (await randGenre===0){
            console.log('zero')
      } else if (randGenre!==0){
        let randomUrl =(isNaN(randGenre)?`https://www.googleapis.com/books/v1/volumes?q=+subject:${randGenre}&printType=books&maxResults=15`:undefined)
        console.log(randomUrl)
          await axios.get(randomUrl)
          .then(r=>setRandomBooks(r.data.items))
          // setRandomBooks(favoriteBooks)
      }
      },[randGenre])



      // console.log(randomBooks)

  return (
    <div className="App">
      <div >
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
              onReadClick={handleReadClickoutList}
              onFavoriteClick={handleFavoritesClickOUT}
              randomBooks={randomBooks}
              randGenre={randGenre}
            />
          </Route>
          <Route path='/search-results'>
            <SearchResults
              books={searchBooks} 
              onReadClick={handleReadClickoutList}
              onFavoriteClick={handleFavoritesClickOUT}
              searchUrl={searchUrl}
              search= {searchTitle}
              setBooks={setBooks}
            />
          </Route>
          <Route exact path ='/book/:bookId'>
            <SelectedBook
              books={books}
            />
          </Route>
          <Route exact path ='/genre/:genre'>
            <Genre 
              onReadClick={handleReadClickoutList}
              onFavoriteClick={handleFavoritesClickOUT}
              />
          </Route>
          <Route exact path ='/genre-more/:genre'>
            <GenreMore
              onReadClick={handleReadClickoutList}
              onFavoriteClick={handleFavoritesClickOUT}
              />
          </Route>
        <Route path ='/favorites'>
          <Favorites 
            books={favoriteBooks}
            setBooks={setBooks}
            onReadClick={handleReadClickoutList}
            onFavoriteClick={handleFavoritesClickIN}
          />
        </Route>
        <Route path ='/toread'>
          <ToReadList
            books={toReadBooks}
            setBooks={setBooks}
            onReadClick={handleReadClickinList}
            onFavoriteClick={handleFavoritesClickOUT}
          />
        </Route>
        <Route path ='/new'>
          <NewReleases
            books={newReleases}
            setBooks={setBooks}
            onReadClick={handleReadClickoutList}
            onFavoriteClick={handleFavoritesClickOUT}
        />
        </Route>
        <Route path ='/genres'>
          <MoreList
            books={newReleases}
            setBooks={setBooks}
            onReadClick={handleReadClickoutList}
            onFavoriteClick={handleFavoritesClickOUT}
        />
        </Route>


        </Switch>
        <Footer
        
        />
      </div>
    </div>
  );
}

export default App;
