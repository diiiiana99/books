import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Genre({ books }){

    const params = useParams();
    console.log(books)

    console.log(params)

    // const [ selectedGenre, setSelectedGenre ] = useState(books.find(book => book.volumeInfo.categories.includes(params.Genre)));


    return (
        <div></div>
    )
}

export default Genre;