import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from '../images/alt_book_report_logo.png' 

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

let genreList = ['history','tech','Fiction','Science','Biography','Fantasy','Philosophy','Politics','Self-Help','Religion','Thriller','Crime','Humor','Children','Romance','zebras']

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
    // console.log(document.getElementById('genrecontainer'))
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
    <div className="navigation">
      <div className='nav-container'>

        <NavLink style={{ marginRight: "10px" }} to="/">
            <img 
              src={logo}
              alt="Logo"
              className="website-logo"
              />
        </NavLink>

        <NavLink to="/">
          <div className="nav-link">Home</div>
        </NavLink>

        <div className="nav-link" onMouseOver={handleOver} onMouseOut={handleOff}>
          Browse
        <div id = 'genrecontainer' className={'genre-container hidden'}>
          <div className="dropdownContent">
          {genreList.sort().map((category) =>
              <NavLink key={category} className='nav-link-small' style={{ marginRight: "10px" }} to={`/genre/${category}`}>
                <div>{titleCase(category)}</div>
              </NavLink>
          )}
          <NavLink to="/more">
            <div className="nav-link-small">More</div>
          </NavLink>
          </div>
        </div>
        </div>
{/* 
        <NavLink to="/new">
          <div className="nav-link">New Releases</div>
        </NavLink> */}
        <NavLink to="/favorites">
          <div className="nav-link">Favorites</div>
        </NavLink>
        <NavLink to="/toread">
            <div className="nav-link">Reading List</div>
        </NavLink>

          <div className="nav-search-container">
            <form
              onSubmit={onSubmit}
              className='search-form'
              >
              <input 
                  type='text' 
                  onChange={onChange}
                  className="nav-search-input"
                  placeholder='Titles, Authors, Genres...' 
                  autoComplete='off'
                  cursor='pointer'
                  />
                  <button 
                    // onClick={handleSearchClick} 
                    className="search-button">
                    <img src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"/>
                </button>
              </form>
            </div>
            
        </div>
      </div>
      {/* <div className="spacer"></div> */}
    </div>
  );
}

export default NavBar;