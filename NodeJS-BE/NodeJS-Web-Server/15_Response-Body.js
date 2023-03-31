const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    response.statusCode = 200;
    const { method, url } = request;

    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }))
        } else {
            response.statusCode = 400;
            response.statusMessage = 'Method now allowed!';
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }))
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Hallo! ini adalah halaman about',
            }))
        } else if (method === 'POST') {
            let data = [];

            request.on('data', (value) => {
                data.push(value);
            })

            request.on('end', () => {
                data = Buffer.concat(data).toString();
                const { name } = JSON.parse(data);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Hallo, ${name}! ini adalah halaman about`,
                }))
            })
        } else {
            response.statusCode = 400;
            response.statusMessage = 'Method now allowed!';
            response.end(JSON.stringify({
                message: `Halaman tidak dapat ditemukan dengan method ${method} request!`,
            }))
        }
    } else {
        response.statusCode = 404;
        response.statusMessage = 'unable to find the in question URL';
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
}

const server = http.createServer(requestListener);
server.listen(8081, 'localhost', () => {
    console.log(`Server dimulai dengan port 8081`);
})