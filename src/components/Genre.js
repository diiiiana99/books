import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Genre({ books }){

    const params = useParams();
    // console.log(books)

    
    // const [ selectedGenre, setSelectedGenre ] = useState(books.find(book => book.volumeInfo.categories.includes(params.genre)));
    
    // console.log(selectedGenre)

    return (
        <div></div>
    )
}

export default Genre;