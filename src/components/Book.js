import React, { Component } from 'react'
import BookCategoryChanger from './BookCategoryChanger'

class Book extends Component {
  render() {
    const { id, book } = this.props
    return (
      <li key={id}>
        <div className="book">
          <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks !== undefined ? `url(${book.imageLinks.smallThumbnail})` : null}}>
              <BookCategoryChanger onCategoryChanged={this.props.onCategoryChanged} book={book} />
              </div>
          </div>
          <div className="book-title">{book.title}</div>
  		    <div className="book-authors">{book.authors}</div>
        </div>
	    </li>
    )
  }
}

export default Book
