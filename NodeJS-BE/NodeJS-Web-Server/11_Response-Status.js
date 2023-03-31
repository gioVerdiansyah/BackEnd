const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    const { method, url } = request;

    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.statusMessage = 'Method now allowed!';
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Hallo! ini adalah halaman about</h1>');
        } else if (method === 'POST') {
            let data = [];

            request.on('data', (value) => {
                data.push(value);
            })

            request.on('end', () => {
                data = Buffer.concat(data).toString();
                const { name } = JSON.parse(data);
                response.statusCode = 200;
                response.end(`<h1>Hallo, ${name}! ini adalah halaman about</h1>`);
            })
        } else {
            response.statusCode = 400;
            response.statusMessage = 'Method now allowed!';
            response.end(`Halaman tidak dapat ditemukan dengan method ${method} request!`);
        }
    } else {
        response.statusCode = 404;
        response.statusMessage = 'unable to find the in question URL';
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
}

const server = http.createServer(requestListener);
server.listen(8081, 'localhost', () => {
    console.log(`Server dimulai dengan port 8081`);
})