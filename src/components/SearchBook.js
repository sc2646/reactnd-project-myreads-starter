import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './../BooksAPI'
import Book from './Book'

class SearchBook extends Component {
  state = {
    query: '',
    booksToShow: []
  }

  updateQuery = (query) => {
    if(query === '') {
      this.setState({
        query: '',
        booksToShow: []
      })
      return
    }
    BooksAPI.search(query).then((bookResults) => {
      this.updateBookSearchResult(bookResults)
      if (bookResults !== undefined && bookResults.error !== 'empty query') {
        this.setState({
          query: query.trim(),
          booksToShow: bookResults
        })
      } else {
        this.setState({
          query: query.trim(),
          booksToShow: []
        })
      }
    })
  }

  updateBookSearchResult = (books) => {
    if(books !== undefined && books.error !== "empty query") {
            // since the search method does not return proper shelf we need to iterate over our current
            // states and the new search terms to find what the current shelf state is for each book
            let bookIds = books.map(book => book.id);
            // let currentlyReadingIntersect = this.intersect(bookIds, this.state.currentlyReading.map( cr => cr.id));
            let currentlyReadingIntersect = this.intersect(bookIds, this.props.books.filter((cr) => cr.shelf === 'currentlyReading').map(b => b.id));
            let readIntersects = this.intersect(bookIds, this.props.books.filter(r => r.shelf === 'read').map((b) => b.id));
            let wantToReadIntersects = this.intersect(bookIds, this.props.books.filter((wr) => wr.shelf === 'wantToRead').map((b) => b.id));

            for (let i = 0; i < books.length; i++) {
                if (currentlyReadingIntersect.includes(books[i].id)) {
                    books[i].shelf = 'currentlyReading';
                }
                if (readIntersects.includes(books[i].id)) {
                    books[i].shelf = 'read';
                }
                if (wantToReadIntersects.includes(books[i].id)) {
                    books[i].shelf = 'wantToRead';
                }
            }
        }
  }

  intersect = (a, b) => {
        let t;
        if (b.length > a.length) {
            t = b;
            b = a;
            a = t; // indexOf to loop over shorter
        }
        return a.filter(function (e) {
            return b.indexOf(e) > -1;
        });
    }

  clearQuery = () => {
    this.setState({
      query: '',
      booksToShow: [] })
  }

  render() {
    const { query, booksToShow } = this.state
    const { books, onShelfChange } = this.props

    // const showingBooks = query === ''
    //   ? books
    //   : BooksAPI.search(query).then()

    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link
                to='/'
                className='list-book'>
                <button
                  className="close-search"
                  onClick={this.clearQuery}>Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  className='search-books'
                  type="text"
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              {console.log(query)}
              <ol className="books-grid">
                {this.state.booksToShow.map(book => (
                  <li key={book.id}>
                    <Book
                      id={book.id}
                      book={book}
                      onCategoryChanged={this.props.onShelfChange} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
    )
  }
}

export default SearchBook;
