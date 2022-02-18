import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { NavLink } from "react-router-dom";


function MoreList(){

    let genreList = ['history','tech','Fiction','Science','Biography','Fantasy','Philosophy','Politics','Self-Help','Religion','Thriller','Crime','Humor','Children','Romance','zebras']

    let genreButtons = genreList.sort().map((category) =>
        <NavLink key={category} className='nav-link-small-category' style={{ marginRight: "10px" }} to={`/genre/${category}`}>
          <div>{titleCase(category)}</div>
        </NavLink>
    )


    const bestSellers = 'http://localhost:4000/bestsellers';
    const nycbooks='http://localhost:4000/nyc';
    const devdigest='http://localhost:4000/devdigest';
    const javascriptbooks='http://localhost:4000/javascript';
    const benjaminfranklin='http://localhost:4000/benjaminfranklin';
    const movies = 'http://localhost:4000/moviebooks';
    const dune = 'http://localhost:4000/dune';
    const fiction = 'http://localhost:4000/Fiction';
    const science = 'http://localhost:4000/Science';
    const Biography = 'http://localhost:4000/Biography';
    const fantasy = 'http://localhost:4000/Fantasy';
    const scifi = 'http://localhost:4000/ScienceFiction'

  
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
        // const javascriptbooksGenres = await requestGenre(javascriptbooks)
        const benjaminfranklinGenres = await requestGenre(benjaminfranklin)
        const moviesGenres = await requestGenre(movies)
        const duneGenres = await requestGenre(dune)
        const fictionGenres = await requestGenre(fiction)
        const scienceGenres = await requestGenre(science)
        const BiographyGenres = await requestGenre(Biography)
        const fantasyGenres = await requestGenre(fantasy)
        const scifiGenres = await requestGenre(scifi)
        // const Genres = await requestGenre(inserthere)
        // const Genres = await requestGenre(inserthere)
        // const Genres = await requestGenre(inserthere)


        const uniqueGenres = new Array(...new Set([...scienceGenres,...BiographyGenres,...fantasyGenres,...scifiGenres, ...bestSellersGenres,...fictionGenres,...devdigestGenres,...benjaminfranklinGenres,...moviesGenres]))
        setGenres(uniqueGenres)
    }, [])
  
  

    let sortedGenres = genres.sort().map((category) =>
        <NavLink key={category} className='nav-link-small-category' style={{ marginRight: "10px" }} to={`/genre-more/${category}`}>
          <div>{titleCase(category)}</div>
        </NavLink>
    )

    let sg1 = sortedGenres.slice(0,10)
    let sg2 = sortedGenres.slice(10,20)
    let sg3 = sortedGenres.slice(20,30)
    let sg4 = sortedGenres.slice(30,40)
    let sg5 = sortedGenres.slice(40,50)

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }



    return (
        <React.Fragment>
            <div className="spacer"></div>

            <h1 className="heading">Genres</h1>
            <div className="backdrop">
                <div className='book-carousel'> 
                    {genreButtons}
                </div> 
            </div>
            <div className="backdrop">
                <div className='book-carousel'> 
                </div> 
            </div>



            <div className="spacer-books"></div>
            <div className="backdrop">
                <div className='book-carousel'> 
                    {sg1}
                </div> 
            </div>

            <div className="backdrop">
                <div className='book-carousel'> 
                    {sg2}
                </div> 
            </div>

            <div className="backdrop">
                <div className='book-carousel'> 
                    {sg3}
                </div> 
            </div>

            <div className="backdrop">
                <div className='book-carousel'> 
                    {sg4}
                </div> 
            </div>

            <div className="backdrop">
                <div className='book-carousel'> 
                    {sg5}
                </div> 
            </div>


        <div className="bot-spacer"></div>
        </React.Fragment>
)
}

export default MoreList;