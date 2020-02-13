import React from 'react'

const BookCategoryChanger = (props) => {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={(event) => props.onCategoryChanged(event, props.book)}
          value={props.book.shelfundefined ? 'none' : props.book.shelf} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }


export default BookCategoryChanger
