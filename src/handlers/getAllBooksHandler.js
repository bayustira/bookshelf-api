const books = require('../books');

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  if (name !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        books: books
          .filter((book) => book.name.toLowerCase().includes(name.toLowerCase()))
          .map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
      },
    });
    response.code(200);
    return response;
  }

  if (reading === '0') {
    const response = h.response({
      status: 'success',
      data: {
        books: books
          .filter((book) => book.reading === false)
          .map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
      },
    });
    response.code(200);
    return response;
  }

  if (reading === '1') {
    const response = h.response({
      status: 'success',
      data: {
        books: books
          .filter((book) => book.reading === true)
          .map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
      },
    });
    response.code(200);
    return response;
  }

  if (finished === '0') {
    const response = h.response({
      status: 'success',
      data: {
        books: books
          .filter((book) => book.finished === false)
          .map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
      },
    });
    response.code(200);
    return response;
  }

  if (finished === '1') {
    const response = h.response({
      status: 'success',
      data: {
        books: books
          .filter((book) => book.finished === true)
          .map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      books: books
        .map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
    },
  });
  response.code(200);
  return response;
};

module.exports = { getAllBooksHandler };