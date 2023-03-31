const route = [{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'User' } = request.params;
            const { lang } = request.query;

            if (lang === 'id') {
                return `Hai, ${name}`;
            }

            return `Hello, ${name}!`;
        }
    },
    {
        method: 'GET',
        path: '/hai/{name?}',
        handler: (request, h) => {
            const { name = 'user' } = request.params;
            const { from } = request.query;
            return h.response(`Hai, ${name} from ${from}`)
                .code(201)
                .type('text/plain')
                .header('X-Try-Method-GET', 'success');
            // curl -X GET http://localhost:8081/hai/verdi?from=madiuni?from=madiun
        }
    },
    {
        method: 'GET',
        path: '/hallo',
        handler: (request, h) => {
            const { name, from } = request.query;
            return `Hallo, ${name} dari ${from}`;
            // curl -X GET "http://localhost:8081/hallo?name=Verdi&from=Madiun"
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut!';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut!';
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Hallo, ${username} dengan password: ${password}`;
            // curl -X POST -H "Content-Type: application/json" -d "{\"username\" : \"Verdi\", \"password\" : \"blackJack\"}" http://localhost:8081/login
        }
    },
    {
        method: 'POST',
        path: '/user',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return h.response(`Hallo, ${username} dengan password: ${password}`)
                .code(201)
                .type('application/x-www-form-urlencoded')
                .header('X-Testing', 'No problem found');

            // curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "username=Verdi&password=black" http://localhost:8081/user?username=Verdi&password=black
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak dapat ditemukan!'
        }
    }
]

module.exports = route;