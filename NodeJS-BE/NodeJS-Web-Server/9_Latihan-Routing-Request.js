const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    const { method, url } = request;

    if (url === '/') {
        // TODO 2: logika respons bila url bernilai '/'
        if (method === 'GET') {
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if (url === '/about') {
        // TODO 2: logika respons bila url bernilai '/about'
        if (method === 'GET') {
            response.end('<h1>Hallo! ini adalah halaman about</h1>');
        } else if (method === 'POST') {
            let value = [];

            request.on('data', (data) => {
                value.push(data);
            })

            request.on('end', () => {
                value = Buffer.concat(value).toString();
                const { name } = JSON.parse(value);
                response.end(`<h1>Hallo, ${name}! ini adalah halaman about</h1>`);
            })
        } else {
            response.end(`Halaman tidak dapat ditemukan dengan method ${method} request!`);
        }
    } else {
        // TODO 2: logika respons bila url bukan bernilai '/' atau '/about'
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
}

const server = http.createServer(requestListener);

server.listen(8081, 'localhost', () => {
    console.log('Server dimulai dengan port 8081');
})


// curl -X GET http://localhost:8081/about
// output: <h1>Halo! Ini adalah halaman about</h1>
// curl -X POST -H "Content-Type: application/json" http://localhost:8081/about -d "{\"name\": \"Dicoding\"}"
// output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
// curl -X PUT http://localhost:8081/about
// output: <h1>Halaman tidak dapat ditemukan dengan method PUT request</h1>
// curl -X DELETE http://localhost:8081/about
// output: <h1>Halaman tidak dapat ditemukan dengan method DELETE request</h1>