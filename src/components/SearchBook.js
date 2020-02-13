import React, { Component } from 'react'

class SearchBook extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { query } = this.state
    const { books } = this.props

    const showingBooks = query === ''
      ? books
      : books.filter(book => (
        book.title.toLowerCase().includes(query.toLowerCase())
      ))
    // console.log(this.props)
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
              <ol className="books-grid">
                {showingBooks.map(book => (
                  <li key={book.id} className='book-list-item'>
                  <div
                    className='book-cover'
                    style={{width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`}}/>
                    <div className='book-details'>
                      <p>{book.title}</p>
                      <p>{book.categories}</p>
                    </div>
                  </li>
                  ))
                }
              </ol>
            </div>
          </div>
    )
  }
}

export default SearchBook;
