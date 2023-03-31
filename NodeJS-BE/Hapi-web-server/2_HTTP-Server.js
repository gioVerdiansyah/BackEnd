const Hapi = require('@hapi/hapi');

const init = async() => {
    const server = Hapi.server({
        port: 8081,
        host: 'localhost',
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
init();