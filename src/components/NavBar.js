import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from '../images/book_report_logo.png' 

function NavBar({ onChange, onSubmit}) {

  let [searchVis,setSearchVis]= useState(true)
  
  const bestSellers = 'http://localhost:4000/bestsellers'
  const nycbooks='http://localhost:4000/nyc';
  const devdigest='http://localhost:4000/devdigest'
  const javascriptbooks='http://localhost:4000/javascript'
  const benjaminfranklin='http://localhost:4000/benjaminfranklin'
  const movies = 'http://localhost:4000/moviebooks'
  const dune = 'http://localhost:4000/dune'

  const [ genres, setGenres] = useState([]);
  
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

  useEffect(async () => {
      const bestSellersGenres = await requestGenre(bestSellers)
      const nycbooksGenres = await requestGenre(nycbooks)
      const devdigestGenres = await requestGenre(devdigest)
      const javascriptbooksGenres = await requestGenre(javascriptbooks)
      const benjaminfranklinGenres = await requestGenre(benjaminfranklin)
      const moviesGenres = await requestGenre(movies)
      const duneGenres = await requestGenre(dune)
      const uniqueGenres = new Array(...new Set([...bestSellersGenres,...nycbooksGenres,...devdigestGenres,...javascriptbooksGenres,...benjaminfranklinGenres,...moviesGenres,...duneGenres]))
      setGenres(uniqueGenres)
  }, [])

  function handleSearchClick(){
    setSearchVis(!searchVis);
  }

  function handleOver(event){
    // document.getElementById('genrecontainer').className=('genre-container')
    document.getElementById('genrecontainer').className=('genre-container')
  }

  function handleOff(){
    console.log(document.getElementById('genrecontainer'))
    document.getElementById('genrecontainer').className=('genre-container hidden')
  }

  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
    <div className='nav-bar'>
      <NavLink style={{ marginRight: "10px" }} to="/">
          <img src={logo} alt="Logo" />
      </NavLink>
      <div onMouseOver={handleOver} onMouseOut={handleOff}>
          Browse Genres
        <div id = 'genrecontainer' className={'genre-container hidden'}>
          {genres.sort().map((category) =>
              <NavLink style={{ marginRight: "10px" }} to={`/genre/${category}`}>
                <div>{titleCase(category)}</div>
              </NavLink>
          )}
        </div>
      </div>
      <NavLink to="/favorites">
        <div>Favorites</div>
      </NavLink>
      <NavLink to="/toread">
          <div>To-Read</div>
      </NavLink>
      <div className="search-container">
        <form
          onSubmit={onSubmit}
          className='search-form'
          >
          {searchVis? <input 
              type='text' 
              onChange={onChange}
              // className='form-control mt-10' 
              className="search-field"
              placeholder='Search for Titles, Authors, Genres' 
              autoComplete='off'
              cursor='pointer'
              />:''}

              {/* <input 
              id='searchinput'
              type='text' 
              onChange={onChange}
              // className='form-control mt-10' 
              className="search-field"
              placeholder='Search for Books' 
              autoComplete='off'
              cursor='pointer'
              /> */}
              <button 
                // onClick={handleSearchClick} 
                className="search-button">
                <img src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"/>
              </button>
          </form>
        </div>
    </div>
    </div>
  );
}

export default NavBar;