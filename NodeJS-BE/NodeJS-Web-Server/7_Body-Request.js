console.log('#Beginner from create server');

const http = require('http');

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    const { method } = request;

    if (method === 'GET') {}
    if (method === 'POST') {
        let data = [];

        request.on('data', (chunk) => {
            data.push(chunk)
        })

        request.on('end', () => {
            data = Buffer.concat(data).toString();
            const { name } = JSON.parse(data);
            response.end(`<h1>Hello, ${name}</h1>`)
        })
    }
}

const server = http.createServer(requestListener);
const port = 8081;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server berjalan di\nhttp://${host}:${port}`);
})