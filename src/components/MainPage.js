import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";
import BookList from "./BookList";

function MainPage() {
    const match = useRouteMatch();
  
    return (
      <div>
        <BookList books={books} />
  
        {/* Adding code to show a message to the user to select a book if they haven't yet */}
        <Route exact path={match.url}>
          <h3>Choose a movie from the list above</h3>
        </Route>
  
        <Route path={`${match.url}/:movieId`}>
          <MovieShow movies={movies} />
        </Route>
      </div>
    );
  }
  
}

export default MainPage;
