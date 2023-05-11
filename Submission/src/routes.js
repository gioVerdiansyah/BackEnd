const { setupNormal, addBookHandler, getBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require("./handler");

const routes = [{
    method: '*',
    path: '/',
    handler: setupNormal,
},{
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
}, {
    method: 'GET',
    path: '/books',
    handler: getBookHandler,
}, {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
}, {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
}, {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
}];

module.exports = routes;