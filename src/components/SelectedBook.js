import React from "react";
import { useParams } from "react-router-dom";

// Here we add `match` to the arguments so we can access the path information in `routerProps` that is passed from MoviesPage.js
function SelectedBook({ books }) {
    // call useParams to access the `params` from the url:
    // the dynamic portion of our /book/:bookId path
    const params = useParams();


    // const match = useRouteMatch();

    console.log(books)

    const bookSelected = books.find(book => book.id === params);

    // <Route exact path={match.url}>
    //     <h3>Choose a movie from the list above</h3>
    // </Route>
    // <Route path={`${match.url}/:movieId`}>
    //     <MovieShow movies={movies} />
    // </Route>
    
    return (
        <div className="">
            <h1>Selected Book</h1>
            <p>{bookSelected}</p>
            <p>{bookSelected.title}</p>
        </div>
    )
}

export default SelectedBook;