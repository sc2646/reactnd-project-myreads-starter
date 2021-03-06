# MyReads Project
This is MyReads project for Udacity’s React Nanodegree. You can select and categorize books in different bookshelves, including read, currently reading, and want to read. This project is built with React and an API is provided to get the data from backend server.



## Quick Start
### To run locally:
* clone the project
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Demo
![Change bookshelves in main page](https://github.com/sc2646/reactnd-project-myreads-starter/blob/master/Screen%20Shot%202020-02-13%20at%201.24.29%20PM.png)
![Search term and results](https://github.com/sc2646/reactnd-project-myreads-starter/blob/master/Screen%20Shot%202020-02-13%20at%201.24.49%20PM.png)

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
