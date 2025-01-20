import React, { useEffect, useState } from 'react'
import Book from './Book';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect (()=>{
        fetch('./data/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
        // .then(data => console.log(data))
    },[])
  return (
    <div>
        <h2 className='text-5xl font-bold text-center'>Books</h2>
       <h2>No of Books: {books.length}</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            
            books.map(book => <Book key={book.bookId} book={book}> </Book>)
        }

        </div>
    </div>
  )
}

export default Books