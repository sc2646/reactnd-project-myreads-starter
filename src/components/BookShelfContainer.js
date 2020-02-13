
import React, { Component } from 'react'
import Book from './Book'

class BookShelfContainer extends Component {
  fetchBooksOnShelf (books, title) {
    return books.filter(book =>
      book.shelf.split(' ').join('').toLowerCase() === title.split(' ').join('').toLowerCase());
  }

  createBookElements(books) {
    return books.map((book, inde) =>
      <Book id={book.id} book={book} onCategoryChanged={this.props.onShelfChange} />)
  }

  render(){
    const { title, books } = this.props
    const relevantBooks = this.fetchBooksOnShelf(books, title)
    console.log(relevantBooks)
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.createBookElements(relevantBooks)}
            </ol>
          </div>
        </div>
      )
  }
}

export default BookShelfContainer
