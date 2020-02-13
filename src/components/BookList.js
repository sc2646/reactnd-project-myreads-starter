import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelfContainer from './BookShelfContainer'

class BookList extends Component {
  render() {
    const { books, onShelfChange } = this.props
    return (
        <div className="list-books-content">
            <BookShelfContainer
              title = {'Currently Reading'}
              books = {books}
              onShelfChange = {onShelfChange} />
            <BookShelfContainer
              title = {'Want to Read'}
              books = {books}
              onShelfChange = {onShelfChange} />
            <BookShelfContainer
              title = {'Read'}
              books = {books}
              onShelfChange = {onShelfChange} />
        </div>
    )
  }

}

export default BookList
