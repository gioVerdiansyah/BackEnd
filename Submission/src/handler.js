const { nanoid } = require('nanoid');
const books = require('./books');

const setupNormal = (request, h) => {
    const { name = 'User' } = request.query;
    return h.response(`<p>Hallo, ${name} please visit the website <a href= "http://notesapp-v1.dicodingacademy.com/" target="_blank">http://notesapp-v1.dicodingacademy.com/</a> and change the url to http://localhost:8081</p>`)
        .code(201)
        .header('X-Powered-By', 'NodeJS')
        .type('text/html')
}

// menambah book
const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    // Validate input
    if(!name){
        return h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        }).code(400);
    }

    if(readPage > pageCount){
    return h.response({
        status: 'fail',
        message:  'Gagal menambahkan buku. readPage '
        + 'tidak boleh lebih besar dari pageCount'
    }).code(400);
    }



    const id = nanoid(16);
    const finished = pageCount === readPage;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt
    };

    books.push(newBook);

    const success = books.filter((book) => book.id === id).length === 1;

    if (success) {
        return h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        }).code(201);
    }

    return h.response({
        status: 'error',
        message: 'Buku gagal ditambahkan',
    }).code(500);
}


// ! Menampilkan Buku
const getBookHandler = (request, h) => {
    const {name, reading, finished} = request.query;

    let filteredBook = books;

    // Filtering
    if(name){
        filteredBook = filteredBook.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()) !== false);
    }

    if(reading){
        filteredBook = filteredBook.filter((book) => Number(book.reading) === Number(reading));
    }

    if(finished){
        filteredBook = filteredBook.filter((book) => Number(book.finished) === Number(finished));
    }

    return h.response({
        status: 'success',
        data: {
            books: filteredBook.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
            })),
        },
    });
};

const getBookByIdHandler = (request, h) => {
    const { id } = request.params;
    const book = books.find((book) => book.id === id);

    if (book) {
        return h.response({
            status: 'success',
            data: {book},
        })
    }

    return h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
        }).code(404);
}



//! mengubah Book
const editBookByIdHandler = (request, h) => {
    const { id } = request.params;
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    if(!name){
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        }).code(400);
    }

    if(readPage > pageCount){
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage '
            + 'tidak boleh lebih besar dari pageCount',
        }).code(400);
    }

    const index = books.findIndex((book) => book.id === id);

    if (index !== -1) {
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt: new Date().toISOString(), 
        };

        return h.response({
                status: 'success',
                message: 'Buku berhasil diperbarui'
            });
    }

    // jika tidak
    return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan'
        }).code(404);
}




// ! Hapus Buku
const deleteBookByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = books.findIndex((book) => book.id === id);

    if (index !== -1) {
        books.splice(index, 1);

        return h.response({
                status: 'success',
                message: 'Buku berhasil dihapus',
            });
    }


    return h.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan',
        })
        .code(404);
}

module.exports = { setupNormal, addBookHandler, getBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler };