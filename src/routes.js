const { addBookHandler } = require('./handlers/addBookHandler');
const { deleteBookByIdHandler } = require('./handlers/deleteBookByIdHandler');
const { getAllBooksHandler } = require('./handlers/getAllBooksHandler');
const { getBookByIdHandler } = require('./handlers/getBookByIdHandler');
const { updateBookHandler } = require('./handlers/updateBookHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;