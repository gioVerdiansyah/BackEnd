// Program sederhana menampilkan isi dari file coba.html lalu di baca dan di tulis menggunakan method fs(file system) dan buatkan server yang di isi dari hasil baca fs
const { error } = require('console');
const fs = require('fs');
const http = require('http');

// create server
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    // read file
    const readable = fs.createReadStream('NodeJS-BE/component/input.html');
    readable.on('data', (chunk) => {
        // 'data' adalah event yang dipancarkan ketika readable stream (stream yang digunakan untuk membaca file) memiliki data yang tersedia untuk dibaca. Kemudian, chunk adalah data yang dikembalikan oleh event 'data' tersebut.
        response.write(chunk)
    });

    readable.on('end', () => {
        response.end();
    });

    readable.on('error', (error) => {
        console.log(error)
        response.statusCode = 500;
        response.end('Internal server error');
    })
})

server.listen(8085, 'localhost', () => {
    console.log("Server sudah dibuat di http://localhost:8085");
})