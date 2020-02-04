import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The Way of Kings", author: '', id: 1 },
    { title: "The Name of The Wind", author: 'Patrick Rothfuss', id: uuid() },
    { title: "Final Empire", author: 'Brandon Sanderson', id: uuid() }
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title, author: author, id: uuid() }])
  }
  const removeBook = (id) => {
    setBooks(books.filter(book =>
      book.id !== id
    ))
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider