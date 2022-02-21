import React from 'react';
import { Route, Link } from "react-router-dom";
import SelectedBook from './SelectedBook';
import axios from 'axios'

let amazonUrl='https://www.amazon.com/s?k='
function BigBookCard({book,onReadClick,onFavoriteClick}){

    function handleHoverOver(event){
        // console.log(document.getElementById(book.id))
        document.getElementById(book.id+'-big').className=('book-details')

    }

    function handleHoverOut(event){
        // console.log(document.getElementById(book.id))
        document.getElementById(book.id+'-big').className=('book-details hidden')

    }

    function handleFavoriteClick(){
        onFavoriteClick(book)
    }

    function handleReadClick(){
        onReadClick(book)
    }

    function handleBuyClick(){
        window.open(amazonUrl+book.volumeInfo.title)
    }

    return (
            <div className='big-book-card' onMouseOver={handleHoverOver} onMouseOut={handleHoverOut}>
                <img 
                src={book.volumeInfo.imageLinks === undefined? "": `${book.volumeInfo.imageLinks.thumbnail}`} 
                alt={book.volumeInfo.title}/>
                <div id={book.id+'-big'} className={`book-details hidden`}>
                <p className='book-details-text'>{isNaN(book.volumeInfo.publishedDate)?book.volumeInfo.title:book.volumeInfo.title +' ('+(2000+new Date(book.volumeInfo.publishedDate).getYear()-100)+')'}</p>
                    <p className='book-details-text'>{book.volumeInfo.authors}</p>
                    {/* <p className='book-details-text'>{book.volumeInfo.categories}</p> */}
                    <div className='card-buttons'>
                        <button className='favorite-button' onClick={handleFavoriteClick}>
                            <img src='https://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/512/favorite-icon.png' />
                        </button>
                        <button className='read-button' onClick={handleReadClick}>
                            <img src='https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/eye-512.png' />
                        </button>
                        <button className='favorite-button' onClick={handleBuyClick}>
                            <img src='https://cdn0.iconfinder.com/data/icons/e-commerce-basic-icons-set-3/800/product19-512.png' />
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default BigBookCard;