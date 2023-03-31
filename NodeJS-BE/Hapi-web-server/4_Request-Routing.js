const Hapi = require('@hapi/hapi');
const routes = require('./route');

const init = async() => {
    const server = Hapi.server({
        port: 8081,
        host: 'localhost'
    });

    server.route(routes);

    await server.start();
    console.log(`server dimulai pada port ${server.info.uri}`);
}
init();