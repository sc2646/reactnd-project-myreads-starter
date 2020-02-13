import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
import SearchBook from './components/SearchBook'
import { Route, Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    BooksAPI.getAll()
      .then(books =>
        this.setState({ books }))
  }

  moveBookShelf = (event, book) => {
    const newShelf = event.target.value
    if(newShelf !== book.shelf) {
      BooksAPI.update(book, newShelf)
        .then(result =>{
          this.fetchBooks()
        })
    }
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/search' render={() => (
          <SearchBook
            books={this.state.books}
            onShelfChange={this.moveBookShelf} />
          )}
        />


        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              <BookList
                books={this.state.books}
                onShelfChange={this.moveBookShelf} />
              </div>
            <div className="open-search">
              <Link
                to='/search'
                className='search-book'>
                <button>Add a book</button>
                </Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
